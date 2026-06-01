const express = require('express');
const app = express();

app.use(express.json());

// واجهة الموقع الكاملة والمطورة لـ Mobitech
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
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

        .hero { padding: 60px 5% 40px; text-align: center; background: radial-gradient(circle at top, rgba(56, 189, 248, 0.15), transparent 60%); }
        .hero h1 { font-size: 2.8rem; font-weight: 900; margin-bottom: 15px; }
        .hero h1 span { color: var(--accent-color); }
        .hero p { font-size: 1.1rem; color: var(--text-muted); max-width: 700px; margin: 0 auto 25px; }
        
        .social-buttons { display: flex; justify-content: center; gap: 15px; margin-bottom: 30px; flex-wrap: wrap; }
        .btn { padding: 12px 25px; border-radius: 30px; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 10px; border: none; cursor: pointer; transition: opacity 0.2s, transform 0.2s; }
        .btn:hover { opacity: 0.9; transform: translateY(-2px); }
        .btn-primary { background-color: var(--accent-color); color: #0b0f19; }
        .btn-success { background-color: var(--success-color); color: white; padding: 8px 20px; font-size: 0.9rem; border-radius: 6px; }
        .btn-danger { background-color: var(--danger-color); color: white; padding: 8px 20px; font-size: 0.9rem; border-radius: 6px; }
        .btn-whatsapp { background-color: #25d366; color: #fff; }
        .btn-telegram { background-color: #0088cc; color: #fff; }

        .section-title { text-align: center; font-size: 2rem; margin: 40px 0 20px; }
        .section-title::after { content: ''; display: block; width: 60px; height: 3px; background-color: var(--accent-color); margin: 10px auto 0; }
        
        .grid-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; padding: 20px 5%; }
        .card { background-color: var(--card-bg); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 20px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; }
        .card img { width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px; }
        .card h3 { margin-bottom: 10px; font-size: 1.3rem; }
        .card p { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 15px; flex-grow: 1; }
        .badge { padding: 4px 10px; border-radius: 15px; font-size: 0.8rem; font-weight: bold; background-color: rgba(56, 189, 248, 0.1); color: var(--accent-color); align-self: center; }

        .form-section { background-color: var(--card-bg); max-width: 600px; margin: 40px auto; padding: 30px; border-radius: 15px; border: 1px solid rgba(56, 189, 248, 0.2); }
        .form-group { margin-bottom: 20px; display: flex; flex-direction: column; text-align: right; }
        .form-group label { margin-bottom: 8px; font-weight: bold; color: var(--text-color); }
        .form-group input, .form-group textarea, .form-group select { padding: 12px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); background-color: var(--bg-color); color: #fff; font-size: 1rem; width: 100%; font-family: 'Tajawal', sans-serif; }
        .form-group input:focus, .form-group textarea:focus, .form-group select:focus { border-color: var(--accent-color); outline: none; }
        .note { font-size: 0.85rem; color: var(--danger-color); margin-top: 5px; }

        .admin-box { border: 2px dashed rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 15px; background-color: rgba(21, 28, 44, 0.5); max-width: 1200px; margin: 50px auto; }
        .admin-actions { display: flex; gap: 10px; justify-content: center; margin-top: 15px; }

        footer { background-color: #070a10; padding: 30px 5%; text-align: center; margin-top: 40px; border-top: 1px solid rgba(255, 255, 255, 0.05); color: var(--text-muted); }
    </style>
</head>
<body>

    <nav>
        <div class="logo"><i class="fas fa-mobile-alt"></i> Mobitech</div>
        <ul class="nav-links">
            <li><a href="#store">المتجر</a></li>
            <li><a href="#client-section">إضافة سلعة</a></li>
            <li><a href="#admin-panel">لوحة المسؤول</a></li>
        </ul>
    </nav>

    <section class="hero">
        <h1>منصة <span>Mobitech</span> الرقمية</h1>
        <p>مرحباً بك في المنصة المعتمدة لصيانة الهواتف، الأجهزة الذكية، تأمين قطع الغيار والأكسسوارات الاحترافية.</p>
        
        <div class="social-buttons">
            <a href="https://wa.me/96181157961" class="btn btn-whatsapp" target="_blank">
                <i class="fab fa-whatsapp"></i> واتساب سريع
            </a>
            <a href="https://t.me/Mobitech_Support" class="btn btn-telegram" target="_blank">
                <i class="fab fa-telegram-plane"></i> تليجرام مباشر
            </a>
        </div>
    </section>

    <section id="store">
        <h2 class="section-title">متجر الأجهزة والأكسسوارات</h2>
        <div class="grid-container" id="store-grid">
            <div class="card">
                <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80" alt="كفرات حماية">
                <h3>كفرات هواتف ذكية (iPhone & Samsung)</h3>
                <p>تشكيلة واسعة من الكفرات الحرارية والمقاومة للصدمات متوفرة لجميع الموديلات بجودة ووضوح عاليين.</p>
                <span class="badge">قسم الكفرات</span>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500&q=80" alt="PS5">
                <h3>أكسسوارات ألعاب (PS5 & PSP)</h3>
                <p>قبضات تحكم أصليّة، قطع غيار، حقائب تنقل، وأكسسوارات صيانة خاصة بمنصات الألعاب.</p>
                <span class="badge">أكسسوارات ألعاب</span>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=500&q=80" alt="صيانة شاشات">
                <h3>قطع غيار وشاشات أصلية</h3>
                <p>شاشات وبطاريات مكفولة ومفحوصة بدقة من خلال خبراء الصيانة لضمان الأداء الكامل.</p>
                <span class="badge">قطع غيار</span>
            </div>
        </div>
    </section>

    <section id="client-section" class="form-section">
        <h2 style="text-align: center; margin-bottom: 20px; color: var(--accent-color);">
            <i class="fas fa-plus-circle"></i> إضافة سلعة للبيع (زبون)
        </h2>
        <form id="productForm" onsubmit="clientSubmitProduct(event)">
            <div class="form-group">
                <label>اسم ومواصفات السلعة بالكامل:</label>
                <input type="text" id="pTitle" placeholder="مثال: Samsung S24 Ultra 512GB" required>
            </div>
            <div class="form-group">
                <label>تصنيف القسم:</label>
                <select id="pCategory">
                    <option value="قطع غيار">قطع غيار وشاشات</option>
                    <option value="قسم الكفرات">كفرات وأكسسوارات</option>
                    <option value="أكسسوارات ألعاب">ألعاب وجيمين
