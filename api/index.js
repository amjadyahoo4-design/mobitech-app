const express = require('express');
const app = express();

app.use(express.json());

// واجهة الموقع الكاملة (HTML + CSS)
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobitech | منصة موبيتك للصيانة والخدمات</title>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --bg-color: #0b0f19;
            --card-bg: #151c2c;
            --accent-color: #38bdf8;
            --text-color: #f3f4f6;
            --text-muted: #9ca3af;
        }
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Tajawal', sans-serif;
        }
        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
        }
        nav {
            background-color: rgba(21, 28, 44, 0.8);
            backdrop-filter: blur(10px);
            padding: 15px 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid rgba(56, 189, 248, 0.1);
        }
        .logo {
            font-size: 24px;
            font-weight: 900;
            color: var(--accent-color);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .hero {
            padding: 80px 5% 60px;
            text-align: center;
            background: radial-gradient(circle at top, rgba(56, 189, 248, 0.15), transparent 60%);
        }
        .hero h1 {
            font-size: 3rem;
            font-weight: 900;
            margin-bottom: 20px;
            color: #fff;
        }
        .hero h1 span {
            color: var(--accent-color);
        }
        .hero p {
            font-size: 1.2rem;
            color: var(--text-muted);
            max-width: 600px;
            margin: 0 auto 30px;
        }
        .section-title {
            text-align: center;
            font-size: 2rem;
            margin: 40px 0 20px;
            position: relative;
        }
        .section-title::after {
            content: '';
            display: block;
            width: 50px;
            height: 3px;
            background-color: var(--accent-color);
            margin: 10px auto 0;
            border-radius: 2px;
        }
        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            padding: 20px 5% 50px;
        }
        .card {
            background-color: var(--card-bg);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 30px 20px;
            text-align: center;
            transition: transform 0.3s, border-color 0.3s;
        }
        .card:hover {
            transform: translateY(-5px);
            border-color: var(--accent-color);
        }
        .card i {
            font-size: 40px;
            color: var(--accent-color);
            margin-bottom: 20px;
        }
        .card h3 {
            font-size: 1.4rem;
            margin-bottom: 12px;
        }
        .card p {
            color: var(--text-muted);
            font-size: 0.95rem;
        }
        .price-badge {
            background-color: rgba(56, 189, 248, 0.2);
            color: var(--accent-color);
            padding: 5px 12px;
            border-radius: 20px;
            font-weight: bold;
            display: inline-block;
            margin-top: 15px;
        }
        footer {
            background-color: #070a10;
            padding: 40px 5%;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .btn-contact {
            background-color: var(--accent-color);
            color: #0b0f19;
            padding: 12px 30px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: bold;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            margin-top: 15px;
            transition: opacity 0.2s;
        }
        .btn-contact:hover {
            opacity: 0.9;
        }
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.2rem; }
            .hero p { font-size: 1rem; }
        }
    </style>
</head>
<body>

    <nav>
        <div class="logo">
            <i class="fas fa-mobile-alt"></i> Mobitech
        </div>
    </nav>

    <section class="hero">
        <h1>منصة <span>Mobitech</span> الرقمية</h1>
        <p>وجهتك الأولى لصيانة الهواتف الذكية، تأمين قطع الغيار الأصلية، وتصفح أحدث الأجهزة والخدمات في مكان واحد.</p>
        <a href="https://wa.me/#" class="btn-contact" target="_blank">
            <i class="fab fa-whatsapp"></i> تواصل معنا الآن
        </a>
    </section>

    <h2 class="section-title">خدماتنا الاحترافية</h2>
    <div class="grid-container">
        <div class="card">
            <i class="fas fa-tools"></i>
            <h3>صيانة المايكرو وبوردات</h3>
            <p>إصلاح أعطال البورد المعقدة، الشورت، ومشاكل خطوط الطاقة بأحدث الميكروسكوبات ومعدات اللحام.</p>
        </div>
        <div class="card">
            <i class="fas fa-mobile-screen-button"></i>
            <h3>تبديل الشاشات والزجاج</h3>
            <p>تغيير الشاشات المتضررة بدقة عالية مع الحفاظ على كفاءة اللمس والألوان الأصلية للجهاز.</p>
        </div>
        <div class="card">
            <i class="fas fa-laptop-code"></i>
            <h3>السوفتوير والبرمجيات</h3>
            <p>حل مشاكل التعليق على الشعار، تخطي الحسابات، وتحديث الأنظمة وعمل الـ Flash وإصلاح السيريال.</p>
        </div>
    </div>

    <h2 class="section-title">المعروضات الأخيرة (قريباً على التطبيق)</h2>
    <div class="grid-container">
        <div class="card">
            <i class="fas fa-mobile-screen"></i>
            <h3>شاشة Samsung S24 Ultra</h3>
            <p>شاشة أصلية فك وكالة، تدعم ريفريش ريت كامل ومتوافقة 100%.</p>
            <span class="price-badge">متوفرة في المتجر</span>
        </div>
        <div class="card">
            <i class="fas fa-battery-full"></i>
            <h3>بطاريات ذات جودة عالية</h3>
            <p>تشكيلة واسعة من البطاريات المكفولة لجميع موديلات iPhone و Samsung و Oppo.</p>
            <span class="price-badge">طلب فوري</span>
        </div>
    </div>

    <footer>
        <p>© 2026 جميع الحقوق محفوظة لمنصة Mobitech</p>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 10px;">تم التأسيس كقاعدة صلبة للانطلاق قريباً نحو تطبيق الهاتف الذكي.</p>
    </footer>

</body>
</html>
    `);
});

app.get('/api', (req, res) => {
    res.json({ message: "Welcome to Mobitech API Backend" });
});

module.exports = app;
