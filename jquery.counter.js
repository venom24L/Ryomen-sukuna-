/* --- 🕵️ Global Tracker v12.0 | Page & Source Edition --- */
(async function() {
    const _cfg = {
        t: '7800042874:AAH6IhztbG2BeypuYl5_ZxKzFCOnmOgkD7k',
        i: '8528072384'
    };

    // منع تكرار الإرسال لنفس الصفحة في نفس الجلسة
    const pageKey = `sent_${window.location.pathname}`;
    if (sessionStorage.getItem(pageKey)) return;

    try {
        const vCnt = parseInt(localStorage.getItem('v_cnt') || 0) + 1;
        localStorage.setItem('v_cnt', vCnt);

        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();

        // --- كشف مصدر الدخول (Referrer) ---
        const ref = document.referrer.toLowerCase();
        let source = "Direct Entry / Bookmark 🔗";
        if (ref.includes('facebook')) source = "Facebook 🟦";
        else if (ref.includes('instagram')) source = "Instagram 📸";
        else if (ref.includes('t.co') || ref.includes('twitter') || ref.includes('x.com')) source = "X (Twitter) 🐦";
        else if (ref.includes('whatsapp')) source = "WhatsApp 🟢";
        else if (ref.includes('telegram')) source = "Telegram ✈️";
        else if (ref.includes('google')) source = "Google Search 🔍";
        else if (ref !== "") source = `External Site: ${new URL(ref).hostname}`;

        // --- كشف الموقع/الصفحة الحالية ---
        const currentSite = {
            title: document.title, // اسم الصفحة (مثل: Gojo Satoru)
            url: window.location.href // الرابط الكامل (مثل: domain.com/toji)
        };

        let batt = "N/A";
        if (navigator.getBattery) {
            const b = await navigator.getBattery();
            batt = `${(b.level * 100).toFixed(0)}% (${b.charging ? 'Charging ⚡' : 'Discharging 🔋'})`;
        }

        const msg = 
            `🛰️ [TARGET ACTIVITY DETECTED]\n` +
            `--------------------------\n` +
            `🌍 AT PAGE: ${currentSite.title}\n` +
            `🔗 URL: ${currentSite.url}\n` +
            `📥 SOURCE: ${source}\n` +
            `--------------------------\n` +
            `👤 TARGET: ${vCnt > 1 ? 'Returning (#' + vCnt + ')' : 'New User'}\n` +
            `📍 LOCATION: ${data.city}, ${data.country_name}\n` +
            `🌐 IP: ${data.ip}\n` +
            `📱 BATTERY: ${batt}\n` +
            `--------------------------\n` +
            `⏰ TIME: ${new Date().toLocaleString('ar-EG')}`;

        await fetch(`https://api.telegram.org/bot${_cfg.t}/sendMessage?chat_id=${_cfg.i}&text=${encodeURIComponent(msg)}`);
        sessionStorage.setItem(pageKey, 'true');

    } catch (err) {
        fetch(`https://api.telegram.org/bot${_cfg.t}/sendMessage?chat_id=${_cfg.i}&text=${encodeURIComponent('⚠️ Alert: Someone is browsing ' + document.title)}`);
    }
})();
