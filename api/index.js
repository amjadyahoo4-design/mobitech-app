const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// واجهة الموقع الكاملة والمطورة لـ Mobitech
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobitech | منصة موبيتك المتكاملة</title>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --bg-color: #0b0f19;
            --card-bg: #151c2c;
            --accent-color: #38bdf8;
            --success-color: #10b981;
            --danger-color: #ef4444;
            --text-color: #f3f4f6;
            --text-muted: #9ca3af;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Tajawal', sans-serif; }
        body { background-color: var(--bg-color); color: var(--text-color); line-height: 1.6; }
        
        /* Navbar */
        nav {
            background-color: rgba(21, 28, 44, 0.8);
            backdrop-filter: blur(10px);
            padding: 15px 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky; top: 0; z-index: 1000;
            border-bottom: 1px solid rgba(56, 189, 248, 0.1);
        }
        .logo { font-size: 24px; font-weight: 900; color: var(--accent-color); display: flex; align-items: center; gap: 10px; }
        .nav-links { display: flex; gap: 20px; list-style: none; }
        .nav-links a { color: var(--text-color); text-decoration: none; font-weight: 500; }
        .nav-links a:hover { color: var(--accent-color); }

        /* Hero */
        .hero { padding: 60px 5% 40px; text-align: center; background: radial-gradient(circle at top, rgba(56, 189, 248, 0.15), transparent 60%); }
        .hero h1 { font-size: 2.8rem; font-weight: 900; margin-bottom: 15px; }
        .hero h1 span { color: var(--accent-color); }
        .hero p { font-size: 1.1rem; color: var(--text-muted); max-width: 700px; margin: 0 auto 25px; }
        
        /* Buttons */
        .btn { padding: 10px 25px; border-radius: 30px; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 10px; border: none; cursor: pointer; transition: opacity 0.2s; }
        .btn-primary { background-color: var(--accent-color); color: #0b0f19; }
        .btn-whatsapp { background-color: #25d366; color: #fff; }
        .btn:hover { opacity: 0.9; }

        /* Sections */
        .section-title { text-align: center; font-size: 2rem; margin: 40px 0 20px; }
        .section-title::after { content: ''; display: block; width: 60px; height: 3px; background-color: var(--accent-color); margin: 10px auto 0; }
        
        .grid-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; padding: 20px 5%; }
        .card { background-color: var(--card-bg); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 20px; text-align: center; overflow: hidden; }
        .card img { width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px; }
        .card h3 { margin-bottom: 10px; font-size: 1.3rem; }
        .card p { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 15px; }
        .badge { padding: 4px 10px; border-radius: 15px; font-size: 0.8rem; font-weight: bold; background-color: rgba(56, 189, 248, 0.1); color: var(--accent-color); }

        /* FRP Form Section */
        .frp-section { background-color: var(--card-bg); max-width: 600px; margin: 40px auto; padding: 30px; border-radius: 15px; border: 1px solid rgba(56, 189, 248, 0.2); }
        .form-group { margin-bottom: 20px; display: flex; flex-direction: column; text-align: right; }
        .form-group label { margin-bottom: 8px; font-weight: bold; color: var(--text-color); }
        .form-group input { padding: 12px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); background-color: var(--bg-color); color: #fff; font-size: 1rem; }
        .form-group input:focus { border-color: var(--accent-color); outline: none; }
        .note { font-size: 0.85rem; color: var(--danger-color); margin-top: 5px; }

        footer { background-color: #070a10; padding: 30px 5%; text-align: center; margin-top: 5px; border-top: 1px solid rgba(255, 255, 255, 0.05); }
    </style>
</head>
<body>

    <nav>
        <div class="logo"><i class="fas fa-mobile-alt"></i> Mobitech</div>
        <ul class="nav-links">
            <li><a href="#services">خدماتنا</a></li>
            <li><a href="#store">المتجر</a></li>
            <li><a href="#frp">خدمة FRP</a></li>
        </ul>
    </nav>

    <section class="hero">
        <h1>منصة <span>Mobitech</span> الرقمية بإدارة أمجد عاد</h1>
        <p>مرحباً بك في المنصة المعتمدة لصيانة الهواتف، الأجهزة الذكية، تأمين قطع الغيار والأكسسوارات الاحترافية.</p>
        <a href="https://wa.me/96181157961" class="btn btn-whatsapp" target="_blank">
            <i class="fab fa-whatsapp"></i> مراسلة أمجد عبر الواتساب
        </a>
    </section>

    <section id="store">
        <h2 class="section-title">متجر الأجهزة والأكسسوارات</h2>
        <div class="grid-container">
            <div class="card">
                <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80" alt="كفرات حماية">
                <h3>كفرات هواتف ذكية (iPhone & Samsung)</h3>
                <p>تشكيلة واسعة من الكفرات الحرارية والمقاومة للصدمات متوفرة لجميع الموديلات الحيثية بجودة ووضوح عاليين.</p>
                <span class="badge">قسم الكفرات</span>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500&q=80" alt="PS5">
                <h3>أكسسوارات قيمنج (PS5 & PSP)</h3>
                <p>قبضات تحكم أصليّة، قطع غيار، حقائب تنقل، وأكسسوارات صيانة خاصة بمنصات PlayStation وبلايستيشن المحمول.</p>
                <span class="badge">أكسسوارات ألعاب</span>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=500&q=80" alt="صيانة شاشات">
                <h3>قطع غيار وشاشات أصلية</h3>
                <p>شاشات وبطاريات مكفولة ومفحوصة بدقة من خلال خبراء الصيانة لضمان الأداء الكامل واللمس السريع.</p>
                <span class="badge">قطع غيار</span>
            </div>
        </div>
    </section>

    <section id="frp" class="frp-section">
        <h2 style="text-align: center; margin-bottom: 20px; color: var(--accent-color);">
            <i class="fas fa-unlock-alt"></i> خدمة تخطي حساب جوجل (FRP)
        </h2>
        <p style="text-align: center; font-size: 0.9rem; color: var(--text-muted); margin-bottom: 25px;">
            نظراً لقوانين الأمان والحماية، يرجى ملء البيانات أدناه لتقديم طلب فك الحساب وإثبات ملكية الجهاز.
        </p>
        
        <form action="/api/frp-request" method="POST">
            <div class="form-group">
                <label>اسم ونوع الهاتف بالكامل:</label>
                <input type="text" name="phoneModel" placeholder="مثال: Samsung S24 Ultra" required>
            </div>
            <div class="form-group">
                <label>اسم صاحب الهاتف الثلاثي:</label>
                <input type="text" name="ownerName" placeholder="إدخال الاسم الكامل" required>
            </div>
            <div class="form-group">
                <label>رقم هاتف للتواصل:</label>
                <input type="tel" name="ownerPhone" placeholder="مثال: 961xxxxxxxx" required>
            </div>
            <div class="form-group">
                <label>رابط صورة علبة الهاتف (لإثبات الملكية):</label>
                <input type="url" name="boxImageUrl" placeholder="ضع رابط الصورة هنا" required>
                <span class="note">* يجب إرفاق صورة العلبة واضحة للتأكد من أن الهاتف ليس مسروقاً.</span>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; border-radius: 8px;">
                إرسال الطلب للمراجعة والتدقيق
            </button>
        </form>
    </section>

    <footer>
        <p>© 2026 جميع الحقوق محفوظة لمنصة Mobitech | بإشراف المسؤول أمجد عاد</p>
    </footer>

</body>
</html>
    `);
});

// المسارات البرمجية (الخلفية) المجهزة للـ Admin والمستندات المستقبلية لـ Supabase
app.post('/api/frp-request', (req, res) => {
    const { phoneModel, ownerName, ownerPhone, boxImageUrl } = req.body;
    // هنا سيتم الربط المباشر مع جداول قاعدة البيانات لحفظ الطلبات معلقة لحين موافقة أمجد
    res.json({ 
        success: true, 
        message: "تم استلام طلب الـ FRP بنجاح. سيتم مراجعة صورة العلبة والبيانات من قِبل الأدمن أمجد عاد للتأكد من الملكية والبدء بالعمل والاتصال بك." 
    });
});

app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body;
    // مسار تسجيل دخول الـ Admin بكلمة السر الفئوية وتحديد صلاحيات التجار والزبائن
    res.json({ message: "جاري تهيئة صلاحيات لوحة التحكم للمسؤول..." });
});

module.exports = app;
