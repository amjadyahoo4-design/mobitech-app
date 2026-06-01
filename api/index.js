const express = require('express');
const app = express();

app.use(express.json());

// واجهة الموقع الكاملة والمتكاملة لمنصة Mobitech المحدثة
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobitech | المنصة الذكية المتكاملة</title>
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
        .logo { font-size: 24px; font-weight: 900; color: var(--accent-color); display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .nav-links { display: flex; gap: 20px; list-style: none; }
        .nav-links a { color: var(--text-color); text-decoration: none; font-weight: 500; cursor: pointer; }
        .nav-links a:hover { color: var(--accent-color); }

        .hero { padding: 50px 5% 30px; text-align: center; background: radial-gradient(circle at top, rgba(56, 189, 248, 0.15), transparent 60%); }
        .hero h1 { font-size: 2.5rem; font-weight: 900; margin-bottom: 10px; }
        .hero h1 span { color: var(--accent-color); }
        .hero p { font-size: 1.1rem; color: var(--text-muted); max-width: 700px; margin: 0 auto 20px; }
        
        /* أزرار الدخول التفاعلية (زبون / مسؤول) كما في تصميمك القديم */
        .interactive-modes { display: flex; justify-content: center; gap: 15px; margin-bottom: 25px; background: rgba(255,255,255,0.02); padding: 15px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); max-width: 500px; margin: 0 auto 25px; }
        .mode-title { width: 100%; text-align: center; font-size: 0.95rem; color: var(--accent-color); margin-bottom: 10px; display: block; }

        .btn { padding: 12px 25px; border-radius: 30px; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 10px; border: none; cursor: pointer; transition: opacity 0.2s, transform 0.2s; font-size: 1rem; }
        .btn:hover { opacity: 0.9; transform: translateY(-2px); }
        
        .btn-client { background-color: #1e293b; color: #fff; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 10px 20px; }
        .btn-admin { background-color: #f59e0b; color: #0b0f19; border-radius: 8px; padding: 10px 20px; }
        
        /* أزرار الاتصال الملونة الحية الكبيرة من تصميمك المحبب */
        .social-buttons { display: flex; justify-content: center; gap: 15px; margin-bottom: 35px; flex-wrap: wrap; }
        .btn-whatsapp { background-color: #25d366; color: #fff; border-radius: 10px; width: 45%; max-width: 220px; justify-content: center; }
        .btn-telegram { background-color: #0284c7; color: #fff; border-radius: 10px; width: 45%; max-width: 220px; justify-content: center; }

        /* شريط التصنيفات التفاعلي السريع للقطع */
        .categories-title { font-size: 1.3rem; margin: 30px 0 15px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 10px; }
        .categories-bar { display: flex; justify-content: center; gap: 10px; margin-bottom: 30px; flex-wrap: wrap; padding: 0 5%; }
        .cat-btn { padding: 8px 18px; border-radius: 25px; border: none; background: #1e293b; color: var(--text-color); cursor: pointer; font-weight: bold; font-size: 0.9rem; display: flex; align-items: center; gap: 5px; transition: background 0.2s; }
        .cat-btn.active { background: #2563eb; color: #fff; box-shadow: 0 4px 12px rgba(37,99,235,0.3); }

        .section-title { text-align: center; font-size: 1.8rem; margin: 30px 0 20px; }
        
        .grid-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; padding: 20px 5%; }
        .card { background-color: var(--card-bg); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 20px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; position: relative; }
        .card img { width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px; }
        .card h3 { margin-bottom: 10px; font-size: 1.25rem; color: #fff; }
        .card p { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 15px; flex-grow: 1; }
        .badge { padding: 4px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: bold; background-color: rgba(56, 189, 248, 0.1); color: var(--accent-color); align-self: center; }

        /* الأقسام المخفية التي تفتح وتغلق ديناميكياً */
        .dynamic-section { background-color: var(--card-bg); max-width: 650px; margin: 30px auto; padding: 25px; border-radius: 15px; border: 1px solid rgba(56, 189, 248, 0.2); display: none; }
        .form-group { margin-bottom: 18px; display: flex; flex-direction: column; text-align: right; }
        .form-group label { margin-bottom: 8px; font-weight: bold; color: var(--text-color); font-size: 0.95rem; }
        .form-group input, .form-group textarea, .form-group select { padding: 12px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); background-color: var(--bg-color); color: #fff; font-size: 1rem; width: 100%; }
        
        .btn-submit { background-color: var(--accent-color); color: #0b0f19; font-weight: bold; width: 100%; justify-content: center; border-radius: 8px; padding: 12px; margin-top: 10px; }
        .btn-success { background-color: var(--success-color); color: white; padding: 6px 15px; font-size: 0.85rem; border-radius: 5px; }
        .btn-danger { background-color: var(--danger-color); color: white; padding: 6px 15px; font-size: 0.85rem; border-radius: 5px; }
        .admin-actions { display: flex; gap: 10px; justify-content: center; margin-top: 12px; }

        .frp-box { background: linear-gradient(135deg, #1e1b4b, #151c2c); border: 1px solid rgba(139, 92, 246, 0.3); padding: 20px; border-radius: 12px; text-align: center; }
        .frp-status { display: inline-block; padding: 5px 15px; background: rgba(16, 185, 129, 0.2); color: #34d399; border-radius: 20px; font-weight: bold; margin-bottom: 15px; font-size: 0.9rem; }

        footer { background-color: #070a10; padding: 25px 5%; text-align: center; margin-top: 50px; border-top: 1px solid rgba(255, 255, 255, 0.05); color: var(--text-muted); font-size: 0.9rem; }
    </style>
</head>
<body>

    <nav>
        <a href="/" class="logo"><i class="fas fa-mobile-alt"></i> Mobitech</a>
        <ul class="nav-links">
            <li><a onclick="showView('store-view')">المتجر</a></li>
            <li><a onclick="toggleSection('frp-section')">خدمة FRP</a></li>
            <li><a onclick="toggleSection('client-section')">إضافة سلعة</a></li>
        </ul>
    </nav>

    <section class="hero">
        <h1>منصة <span>Mobitech</span> الذكية</h1>
        <p>المكتب والمنصة المتكاملة لصيانة الهواتف، الأجهزة الذكية، وتأمين قطع الغيار والأكسسوارات الاحترافية حياً.</p>
        
        <div class="interactive-modes">
            <div style="width:100%">
                <span class="mode-title">🌐 تصفح ضيف (عرض تفاعلي حي)</span>
                <div style="display:flex; gap:10px; justify-content:center;">
                    <button class="btn btn-client" onclick="toggleSection('client-section')"><i class="fas fa-user"></i> دخول كزبون</button>
                    <button class="btn btn-warning" onclick="toggleSection('admin-panel')"><i class="fas fa-crown"></i> لوحة المسؤول</button>
                </div>
            </div>
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

    <section id="frp-section" class="dynamic-section">
        <div class="frp-box">
            <span class="frp-status"><i class="fas fa-circle"></i> الخدمة تعمل الآن بشكل فوري</span>
            <h3 style="color:#fff; margin-bottom:10px;">قسم خدمات تخطي حسابات جوجل وصيانة السوفتوير (FRP)</h3>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:15px;">
                نوفر حلولاً فورية ومباشرة لفك وتخطي حماية أجهزة سامسونج، شاومي، أوبو، وإنفينيكس عن بعد أو في المحل بأحدث الأدوات الرقمية.
            </p>
            <a href="https://wa.me/96181157961?text=مرحبا،%20أريد%20الاستفسار%20عن%20خدمة%20FRP" class="btn btn-primary" style="border-radius:8px; font-size:0.9rem;" target="_blank">
                <i class="fas fa-unlock-alt"></i> اطلب صيانة FRP الآن
            </a>
        </div>
    </section>

    <h3 class="categories-title">📦 تصفح معروضات المتجر المتوفرة حياً</h3>
    <div class="categories-bar">
        <button class="cat-btn active" onclick="filterCat('الكل')">⚡ الكل</button>
        <button class="cat-btn" onclick="filterCat('شاشات')">📱 شاشات</button>
        <button class="cat-btn" onclick="filterCat('سبيكرات')">🔊 سبيكرات</button>
        <button class="cat-btn" onclick="filterCat('كفرات')">🛡️ كفرات</button>
    </div>

    <section id="store-view">
        <div class="grid-container" id="store-grid">
            </div>
    </section>

    <section id="client-section" class="dynamic-section">
        <h2 style="text-align: center; margin-bottom: 15px; color: var(--accent-color);">
            <i class="fas fa-plus-circle"></i> إضافة سلعة للبيع (زبون)
        </h2>
        <form id="productForm" onsubmit="clientSubmitProduct(event)">
            <div class="form-group">
                <label>اسم ومواصفات السلعة بالكامل:</label>
                <input type="text" id="pTitle" placeholder="مثال: شاشة Samsung A56 الأصلية" required>
            </div>
            <div class="form-group">
                <label>تصنيف القسم التابع له:</label>
                <select id="pCategory">
                    <option value="شاشات">شاشات</option>
                    <option value="سبيكرات">سبيكرات</option>
                    <option value="كفرات">كفرات</option>
                </select>
            </div>
            <div class="form-group">
                <label>المواصفات الفنية أو السعر المعروض للبيع:</label>
                <textarea id="pDesc" rows="3" placeholder="أدخل تفاصيل حالة القطعة، مدة الضمان، أو السعر..." required></textarea>
            </div>
            <div class="form-group">
                <label>رابط الصورة المباشر للسلعة:</label>
                <input type="url" id="pImg" placeholder="مثال: https://site.com/image.jpg" required>
            </div>
            <button type="submit" class="btn btn-submit">تحميل السلعة وإرسالها للمراجعة</button>
        </form>
    </section>

    <section id="admin-panel" class="dynamic-section" style="max-width:1100px;">
        <h2 style="text-align: center; margin-bottom: 20px; color: #f59e0b;">
            <i class="fas fa-user-shield"></i> لوحة تحكم المسؤول (الطلبات المعلقة)
        </h2>
        <div class="grid-container" id="admin-grid" style="padding:0;">
            </div>
    </section>

    <footer>
        <p>© 2026 جميع الحقوق محفوظة لمنصة Mobitech الرقمية المتكاملة</p>
    </footer>

    <script>
        // المنتجات الأساسية الثابتة لمنع ظهور الصفحة فارغة أبداً عند بداية التشغيل
        var defaultItems = [
            { title: "شاشات بديلة مفحوصة (OLED & LCD)", category: "شاشات", desc: "شاشات وبطاريات عالية الجودة مع الضمان الكامل للأداء واللمس المتعدد.", img: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=500&q=80" },
            { title: "سبيكر مضخم صوت نقي للأجهزة الذكية", category: "سبيكرات", desc: "سبيكرات صيانة داخلية وخارجية أصلية لجميع فئات الهواتف المحمولة.", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80" },
            { title: "كفرات حماية حرارية ومقاومة للصدمات", category: "كفرات", desc: "تشكيلة كفرات متكاملة ذات مظهر عصري أنيق وحماية قصوى لظهر وجوانب الهاتف.", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80" }
        ];

        // مصفوفات معزولة ومحمية بالكامل لضمان عمل الحفظ والإضافة بشكل دائم ومستقر
        var approvedItems = JSON.parse(localStorage.getItem('mobitech_saved_approved')) || [];
        var pendingItems = JSON.parse(localStorage.getItem('mobitech_saved_pending')) || [];
        var currentFilter = 'الكل';

        function toggleSection(id) {
            var el = document.getElementById(id);
            if (el.style.display === 'block') {
                el.style.display = 'none';
            } else {
                el.style.display = 'block';
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }

        function filterCat(cat) {
            currentFilter = cat;
            var buttons = document.querySelectorAll('.cat-btn');
            for(var i=0; i<buttons.length; i++) {
                buttons[i].classList.remove('active');
            }
            event.target.classList.add('active');
            refreshStoreUI();
        }

        function refreshStoreUI() {
            var storeGrid = document.getElementById('store-grid');
            var adminGrid = document.getElementById('admin-grid');
            
            // دمج المعروضات الثابتة مع المعروضات المضافة والمقبولة من الأدمن
            var displayItems = defaultItems.concat(approvedItems);
            var storeHTML = '';

            for (var i = 0; i < displayItems.length; i++) {
                var item = displayItems[i];
                if (currentFilter !== 'الكل' && item.category !== currentFilter) continue;
                
                storeHTML += '<div class="card">' +
                    '<img src="' + item.img + '" onerror="this.src=\'https://images.unsplash.com/photo-1595556621984-6c0f9f44c648?w=500\'">' +
                    '<h3>' + item.title + '</h3>' +
                    '<p>' + item.desc + '</p>' +
                    '<span class="badge">' + item.category + '</span>' +
                    '</div>';
            }
            storeGrid.innerHTML = storeHTML || '<p style="text-align:center; grid-column:1/-1; padding:20px;">لا توجد قطع معروضة في هذا القسم حالياً.</p>';

            // بناء واجهة لوحة تحكم المسؤول للطلبات المعلقة لإتاحة القبول والرفض
            if (pendingItems.length === 0) {
                adminGrid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:var(--text-muted); padding: 20px;">لا توجد سلع مضافة معلقة حالياً بانتظار المراجعة والقبول.</p>';
            } else {
                var adminHTML = '';
                for (var j = 0; j < pendingItems.length; j++) {
                    var pItem = pendingItems[j];
                    adminHTML += '<div class="card" style="border: 1px dashed #f59e0b;">' +
                        '<img src="' + pItem.img + '" onerror="this.src=\'https://images.unsplash.com/photo-1595556621984-6c0f9f44c648?w=500\'">' +
                        '<h3>' + pItem.title + '</h3>' +
                        '<p>' + pItem.desc + '</p>' +
                        '<span class="badge" style="color:#f59e0b; background:rgba(245,158,11,0.1)">' + pItem.category + '</span>' +
                        '<div class="admin-actions">' +
                        '<button onclick="adminAction(' + j + ', \'accept\')" class="btn btn-success"><i class="fas fa-check"></i> قبول العرض</button>' +
                        '<button onclick="adminAction(' + j + ', \'reject\')" class="btn btn-danger"><i class="fas fa-times"></i> رفض العرض</button>' +
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
            localStorage.setItem('mobitech_saved_pending', JSON.stringify(pendingItems));
            
            alert('تم تحميل السلعة وحفظها بنجاح! ستظهر بالمتجر فور موافقة المسؤول عليها من لوحة التحكم.');
            document.getElementById('productForm').reset();
            document.getElementById('client-section').style.display = 'none';
            refreshStoreUI();
        }

        function adminAction(index, decision) {
            if (decision === 'accept') {
                approvedItems.push(pendingItems[index]);
                localStorage.setItem('mobitech_saved_approved', JSON.stringify(approvedItems));
            }
            pendingItems.splice(index, 1);
            localStorage.setItem('mobitech_saved_pending', JSON.stringify(pendingItems));
            refreshStoreUI();
        }

        // تشغيل البناء الفوري للواجهة بمجرد فتح المنصة
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
