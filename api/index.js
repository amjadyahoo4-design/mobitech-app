const express = require('express');
const app = express();

app.use(express.json());

// واجهة الموقع الكاملة والمتكاملة لـ Mobitech
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
        
        .top-actions { display: flex; justify-content: center; gap: 15px; margin-bottom: 25px; }
        .social-buttons { display: flex; justify-content: center; gap: 15px; margin-bottom: 30px; flex-wrap: wrap; }
        
        .btn { padding: 12px 25px; border-radius: 30px; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 10px; border: none; cursor: pointer; transition: opacity 0.2s, transform 0.2s; }
        .btn:hover { opacity: 0.9; transform: translateY(-2px); }
        .btn-primary { background-color: var(--accent-color); color: #0b0f19; }
        .btn-secondary { background-color: #222b3e; color: #fff; border: 1px solid rgba(255,255,255,0.1); }
        .btn-warning { background-color: #f59e0b; color: #0b0f19; }
        .btn-success { background-color: var(--success-color); color: white; padding: 8px 20px; font-size: 0.9rem; border-radius: 6px; }
        .btn-danger { background-color: var(--danger-color); color: white; padding: 8px 20px; font-size: 0.9rem; border-radius: 6px; }
        .btn-whatsapp { background-color: #25d366; color: #fff; }
        .btn-telegram { background-color: #0088cc; color: #fff; }

        .categories-bar { display: flex; justify-content: center; gap: 10px; margin: 20px 0; flex-wrap: wrap; }
        .cat-btn { padding: 8px 20px; border-radius: 20px; border: none; background: #1e293b; color: var(--text-color); cursor: pointer; font-weight: 500; }
        .cat-btn.active { background: #2563eb; color: #fff; }

        .section-title { text-align: center; font-size: 2rem; margin: 40px 0 20px; }
        .section-title::after { content: ''; display: block; width: 60px; height: 3px; background-color: var(--accent-color); margin: 10px auto 0; }
        
        .grid-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; padding: 20px 5%; }
        .card { background-color: var(--card-bg); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 20px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; }
        .card img { width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px; }
        .card h3 { margin-bottom: 10px; font-size: 1.3rem; }
        .card p { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 15px; flex-grow: 1; }
        .badge { padding: 4px 10px; border-radius: 15px; font-size: 0.8rem; font-weight: bold; background-color: rgba(56, 189, 248, 0.1); color: var(--accent-color); align-self: center; }

        .form-section { background-color: var(--card-bg); max-width: 600px; margin: 40px auto; padding: 30px; border-radius: 15px; border: 1px solid rgba(56, 189, 248, 0.2); display: none; }
        .form-group { margin-bottom: 20px; display: flex; flex-direction: column; text-align: right; }
        .form-group label { margin-bottom: 8px; font-weight: bold; color: var(--text-color); }
        .form-group input, .form-group textarea, .form-group select { padding: 12px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); background-color: var(--bg-color); color: #fff; font-size: 1rem; width: 100%; }

        .admin-box { border: 2px dashed rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 15px; background-color: rgba(21, 28, 44, 0.5); max-width: 1200px; margin: 50px auto; display: none; }
        .admin-actions { display: flex; gap: 10px; justify-content: center; margin-top: 15px; }

        footer { background-color: #070a10; padding: 30px 5%; text-align: center; margin-top: 40px; border-top: 1px solid rgba(255, 255, 255, 0.05); color: var(--text-muted); }
    </style>
</head>
<body>

    <nav>
        <div class="logo"><i class="fas fa-mobile-alt"></i> Mobitech</div>
        <ul class="nav-links">
            <li><a href="#store">المتجر</a></li>
            <li><a href="#store" onclick="toggleSection('client-section')">إضافة سلعة</a></li>
            <li><a href="#store" onclick="toggleSection('admin-panel')">لوحة المسؤول</a></li>
        </ul>
    </nav>

    <section class="hero">
        <h1>منصة <span>Mobitech</span> الرقمية</h1>
        <p>مرحباً بك في المنصة المعتمدة لصيانة الهواتف، الأجهزة الذكية، وتأمين قطع الغيار والأكسسوارات الاحترافية.</p>
        
        <div class="top-actions">
            <button class="btn btn-secondary" onclick="toggleSection('client-section')"><i class="fas fa-user"></i> دخول كزبون</button>
            <button class="btn btn-warning" onclick="toggleSection('admin-panel')"><i class="fas fa-crown"></i> لوحة المسؤول</button>
        </div>

        <div class="social-buttons">
            <a href="https://wa.me/96181157961" class="btn btn-whatsapp" target="_blank">
                <i class="fab fa-whatsapp"></i> واتساب سريع
            </a>
            <a href="https://t.me/Mobitech_Support" class="btn btn-telegram" target="_blank">
                <i class="fab fa-telegram-plane"></i> تليجرام مباشر
            </a>
        </div>
    </section>

    <div class="categories-bar">
        <button class="cat-btn active" onclick="filterCat('الكل')">⚡ الكل</button>
        <button class="cat-btn" onclick="filterCat('شاشات')">📱 شاشات</button>
        <button class="cat-btn" onclick="filterCat('سبيكرات')">🔊 سبيكرات</button>
        <button class="cat-btn" onclick="filterCat('كفرات')">🛡️ كفرات</button>
    </div>

    <section id="store">
        <h2 class="section-title">تصفح معروضات المتجر المتوفرة حياً</h2>
        <div class="grid-container" id="store-grid"></div>
    </section>

    <section id="client-section" class="form-section">
        <h2 style="text-align: center; margin-bottom: 20px; color: var(--accent-color);">
            <i class="fas fa-plus-circle"></i> إضافة سلعة للبيع (زبون)
        </h2>
        <form id="productForm" onsubmit="clientSubmitProduct(event)">
            <div class="form-group">
                <label>اسم ومواصفات السلعة:</label>
                <input type="text" id="pTitle" placeholder="مثال: شاشة iPhone 13 Pro" required>
            </div>
            <div class="form-group">
                <label>تصنيف القسم:</label>
                <select id="pCategory">
                    <option value="شاشات">شاشات</option>
                    <option value="سبيكرات">سبيكرات</option>
                    <option value="كفرات">كفرات</option>
                </select>
            </div>
            <div class="form-group">
                <label>تفاصيل السلعة والسعر:</label>
                <textarea id="pDesc" rows="3" placeholder="اكتب حالة القطعة والسعر المعروض..." required></textarea>
            </div>
            <div class="form-group">
                <label>رابط صورة السلعة:</label>
                <input type="url" id="pImg" placeholder="ضع رابط الصورة المباشر هنا" required>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; border-radius: 8px;">
                إرسال السلعة للمراجعة
            </button>
        </form>
    </section>

    <section id="admin-panel" class="admin-box">
        <h2 style="text-align: center; margin-bottom: 20px; color: var(--danger-color);">
            <i class="fas fa-user-shield"></i> لوحة تحكم المسؤول (طلبات قيد المراجعة)
        </h2>
        <div class="grid-container" id="admin-grid" style="padding:0;"></div>
    </section>

    <footer>
        <p>© 2026 جميع الحقوق محفوظة لمنصة Mobitech الرقمية</p>
    </footer>

    <script>
        // السلع الافتراضية الثابتة في المتجر
        var defaultItems = [
            { title: "كفرات هواتف ذكية (iPhone & Samsung)", category: "كفرات", desc: "تشكيلة واسعة من الكفرات الحرارية والمقاومة للصدمات متوفرة لجميع الموديلات.", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80" },
            { title: "سبيكر بلوتوث احترافي مضخم", category: "سبيكرات", desc: "صوت نقي وقوي جداً مع بطارية تدوم لفترات طويلة مقاوم للمياه.", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80" },
            { title: "شاشات وبطاريات أصلية مكفولة", category: "شاشات", desc: "شاشات وبطاريات لجميع الأجهزة مفحوصة بدقة لضمان الأداء الكامل.", img: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=500&q=80" }
        ];

        var approvedItems = JSON.parse(localStorage.getItem('m_approved')) || [];
        var pendingItems = JSON.parse(localStorage.getItem('m_pending')) || [];
        var currentFilter = 'الكل';

        function toggleSection(id) {
            var el = document.getElementById(id);
            if(el.style.display === 'block') {
                el.style.display = 'none';
            } else {
                el.style.display = 'block';
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }

        function filterCat(cat) {
            currentFilter = cat;
            var buttons = document.querySelectorAll('.cat-btn');
            buttons.forEach(b => b.classList.remove('active'));
            event.target.classList.add('active');
            refreshStoreUI();
        }

        function refreshStoreUI() {
            var storeGrid = document.getElementById('store-grid');
            var adminGrid = document.getElementById('admin-grid');
            
            var allItems = defaultItems.concat(approvedItems);
            var storeHTML = '';

            for (var i = 0; i < allItems.length; i++) {
                var item = allItems[i];
                if (currentFilter !== 'الكل' && item.category !== currentFilter) continue;
                
                storeHTML += '<div class="card">' +
                    '<img src="' + item.img + '" onerror="this.src=\'https://images.unsplash.com/photo-1595556621984-6c0f9f44c648?w=500\'">' +
                    '<h3>' + item.title + '</h3>' +
                    '<p>' + item.desc + '</p>' +
                    '<span class="badge">' + item.category + '</span>' +
                    '</div>';
            }
            storeGrid.innerHTML = storeHTML || '<p style="text-align:center; grid-column:1/-1;">لا توجد معروضات في هذا القسم حالياً.</p>';

            if (pendingItems.length === 0) {
                adminGrid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:var(--text-muted); padding: 20px;">لا توجد طلبات معلقة بانتظار المراجعة.</p>';
            } else {
                var adminHTML = '';
                for (var j = 0; j < pendingItems.length; j++) {
                    var pItem = pendingItems[j];
                    adminHTML += '<div class="card" style="border: 1px dashed var(--danger-color);">' +
                        '<img src="' + pItem.img + '" onerror="this.src=\'https://images.unsplash.com/photo-1595556621984-6c0f9f44c648?w=500\'">' +
                        '<h3>' + pItem.title + '</h3>' +
                        '<p>' + pItem.desc + '</p>' +
                        '<span class="badge" style="color:var(--danger-color); background:rgba(239,68,68,0.1)">' + pItem.category + '</span>' +
                        '<div class="admin-actions">' +
                        '<button onclick="adminAction(' + j + ', \'accept\')" class="btn btn-success"><i class="fas fa-check"></i> قبول</button>' +
                        '<button onclick="adminAction(' + j + ', \'reject\')" class="btn btn-danger"><i class="fas fa-times"></i> رفض</button>' +
                        '</div>' +
                        '</div>';
                }
                adminGrid.innerHTML = adminHTML;
            }
        }

        function clientSubmitProduct(event) {
            event.preventDefault();
            var newItem = {
                title: document.getElementById('pTitle').value,
                category: document.getElementById('pCategory').value,
                desc: document.getElementById('pDesc').value,
                img: document.getElementById('pImg').value
            };

            pendingItems.push(newItem);
            localStorage.setItem('m_pending', JSON.stringify(pendingItems));
            
            alert('تم إرسال السلعة بنجاح! ستظهر بالمتجر فور موافقة المسؤول عليها.');
            document.getElementById('productForm').reset();
            document.getElementById('client-section').style.display = 'none';
            refreshStoreUI();
        }

        function adminAction(index, decision) {
            if (decision === 'accept') {
                approvedItems.push(pendingItems[index]);
                localStorage.setItem('m_approved', JSON.stringify(approvedItems));
            }
            pendingItems.splice(index, 1);
            localStorage.setItem('m_pending', JSON.stringify(pendingItems));
            refreshStoreUI();
        }

        refreshStoreUI();
    </script>
</body>
</html>
    `);
});

app.get('/api', (req, res) => {
    res.json({ message: "Welcome to Mobitech API Backend" });
});

module.exports = app;
