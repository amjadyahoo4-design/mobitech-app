const express = require('express');
const app = express();

app.use(express.json());

// واجهة الموقع الكاملة والمتكاملة لمنصة Mobitech المحدثة مع تحسينات
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobitech | المنصة الذكية المتكاملة (نسخة محسنة)</title>
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
        
        .interactive-modes { display: flex; justify-content: center; gap: 15px; margin-bottom: 25px; background: rgba(255,255,255,0.02); padding: 15px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); max-width: 500px; margin: 0 auto 25px; }
        .mode-title { width: 100%; text-align: center; font-size: 0.95rem; color: var(--accent-color); margin-bottom: 10px; display: block; }

        .btn { padding: 12px 25px; border-radius: 30px; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 10px; border: none; cursor: pointer; transition: opacity 0.2s, transform 0.2s; font-size: 1rem; }
        .btn:hover { opacity: 0.9; transform: translateY(-2px); }
        
        .btn-client { background-color: #1e293b; color: #fff; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 10px 20px; }
        .btn-admin { background-color: #f59e0b; color: #0b0f19; border-radius: 8px; padding: 10px 20px; }
        
        .social-buttons { display: flex; justify-content: center; gap: 15px; margin-bottom: 35px; flex-wrap: wrap; }
        .btn-whatsapp { background-color: #25d366; color: #fff; border-radius: 10px; width: 45%; max-width: 220px; justify-content: center; }
        .btn-telegram { background-color: #0284c7; color: #fff; border-radius: 10px; width: 45%; max-width: 220px; justify-content: center; }

        .categories-title { font-size: 1.3rem; margin: 30px 0 15px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 10px; }
        .categories-bar { display: flex; justify-content: center; gap: 10px; margin-bottom: 30px; flex-wrap: wrap; padding: 0 5%; }
        .cat-btn { padding: 8px 18px; border-radius: 25px; border: none; background: #1e293b; color: var(--text-color); cursor: pointer; font-weight: bold; font-size: 0.9rem; display: flex; align-items: center; gap: 5px; transition: background 0.2s; }
        .cat-btn.active { background: #2563eb; color: #fff; box-shadow: 0 4px 12px rgba(37,99,235,0.3); }

        /* شريط البحث */
        .search-bar {
            display: flex;
            justify-content: center;
            margin: 20px auto 10px;
            max-width: 500px;
            padding: 0 5%;
        }
        .search-bar input {
            width: 100%;
            padding: 12px 20px;
            border-radius: 40px;
            border: 1px solid rgba(255,255,255,0.1);
            background: #1e293b;
            color: white;
            font-size: 1rem;
        }

        .stats-row {
            display: flex;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
            margin: 10px auto 20px;
        }
        .stat-card {
            background: #151c2c;
            padding: 6px 15px;
            border-radius: 30px;
            font-size: 0.85rem;
            border: 1px solid rgba(255,255,255,0.05);
        }

        .section-title { text-align: center; font-size: 1.8rem; margin: 30px 0 20px; }
        
        .grid-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; padding: 20px 5%; }
        .card { background-color: var(--card-bg); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 20px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; position: relative; }
        .card img { width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px; background: #0f1420; }
        .card h3 { margin-bottom: 10px; font-size: 1.25rem; color: #fff; }
        .card p { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 15px; flex-grow: 1; }
        .badge { padding: 4px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: bold; background-color: rgba(56, 189, 248, 0.1); color: var(--accent-color); align-self: center; }

        .dynamic-section { background-color: var(--card-bg); max-width: 650px; margin: 30px auto; padding: 25px; border-radius: 15px; border: 1px solid rgba(56, 189, 248, 0.2); display: none; }
        .form-group { margin-bottom: 18px; display: flex; flex-direction: column; text-align: right; }
        .form-group label { margin-bottom: 8px; font-weight: bold; color: var(--text-color); font-size: 0.95rem; }
        .form-group input, .form-group textarea, .form-group select { padding: 12px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); background-color: var(--bg-color); color: #fff; font-size: 1rem; width: 100%; }
        
        .btn-submit { background-color: var(--accent-color); color: #0b0f19; font-weight: bold; width: 100%; justify-content: center; border-radius: 8px; padding: 12px; margin-top: 10px; }
        .btn-success { background-color: var(--success-color); color: white; padding: 6px 15px; font-size: 0.85rem; border-radius: 5px; border: none; cursor: pointer; }
        .btn-danger { background-color: var(--danger-color); color: white; padding: 6px 15px; font-size: 0.85rem; border-radius: 5px; border: none; cursor: pointer; }
        .admin-actions { display: flex; gap: 10px; justify-content: center; margin-top: 12px; flex-wrap: wrap; }

        .frp-box { background: linear-gradient(135deg, #1e1b4b, #151c2c); border: 1px solid rgba(139, 92, 246, 0.3); padding: 20px; border-radius: 12px; text-align: center; }
        .frp-status { display: inline-block; padding: 5px 15px; background: rgba(16, 185, 129, 0.2); color: #34d399; border-radius: 20px; font-weight: bold; margin-bottom: 15px; font-size: 0.9rem; }

        /* إشعار توست */
        .toast-notify {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%) scale(0.9);
            background: #1e293b;
            backdrop-filter: blur(12px);
            padding: 12px 24px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            gap: 12px;
            z-index: 2000;
            border-right: 4px solid var(--accent-color);
            opacity: 0;
            transition: 0.2s;
            pointer-events: none;
            font-weight: 500;
            box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        }
        .toast-notify.show { opacity: 1; transform: translateX(-50%) scale(1); }

        footer { background-color: #070a10; padding: 25px 5%; text-align: center; margin-top: 50px; border-top: 1px solid rgba(255, 255, 255, 0.05); color: var(--text-muted); font-size: 0.9rem; }
        .image-preview { margin-top: 10px; text-align: center; display: none; }
        .image-preview img { max-width: 100%; max-height: 150px; border-radius: 8px; border: 1px solid #38bdf8; }
    </style>
</head>
<body>

    <nav>
        <a href="/" class="logo"><i class="fas fa-mobile-alt"></i> Mobitech</a>
        <ul class="nav-links">
            <li><a onclick="showAllStore()">المتجر</a></li>
            <li><a onclick="toggleSection('frp-section')">خدمة FRP</a></li>
            <li><a onclick="toggleSection('client-section')">إضافة سلعة</a></li>
            <li><a onclick="toggleSection('admin-panel')">لوحة المسؤول</a></li>
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
                    <button class="btn btn-admin" onclick="toggleSection('admin-panel')"><i class="fas fa-crown"></i> لوحة المسؤول</button>
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
    
    <!-- شريط البحث -->
    <div class="search-bar">
        <input type="text" id="searchInput" placeholder="🔍 ابحث عن منتج..." autocomplete="off">
    </div>

    <div class="categories-bar">
        <button id="btn-all" class="cat-btn active" onclick="filterCat('الكل', event)">⚡ الكل</button>
        <button class="cat-btn" onclick="filterCat('شاشات', event)">📱 شاشات</button>
        <button class="cat-btn" onclick="filterCat('سبيكرات', event)">🔊 سبيكرات</button>
        <button class="cat-btn" onclick="filterCat('كفرات', event)">🛡️ كفرات</button>
    </div>

    <!-- إحصائيات -->
    <div class="stats-row" id="statsRow"></div>

    <section id="store-view">
        <div class="grid-container" id="store-grid"></div>
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
                <textarea id="pDesc" rows="3" placeholder="اكتب حالة القطعة والسعر..." required></textarea>
            </div>
            <div class="form-group">
                <label>رابط الصورة المباشر للسلعة:</label>
                <input type="url" id="pImg" placeholder="مثال: https://site.com/image.jpg" required>
                <div class="image-preview" id="imagePreviewDiv">
                    <img id="previewImg" alt="معاينة الصورة">
                </div>
            </div>
            <button type="submit" class="btn btn-submit">تحميل السلعة وإرسالها للمراجعة</button>
        </form>
    </section>

    <section id="admin-panel" class="dynamic-section" style="max-width:1100px;">
        <h2 style="text-align: center; margin-bottom: 20px; color: #f59e0b;">
            <i class="fas fa-user-shield"></i> لوحة تحكم المسؤول
        </h2>
        <div style="margin-bottom: 20px;">
            <h3>⏳ طلبات معلقة</h3>
            <div class="grid-container" id="admin-pending-grid" style="padding:0;"></div>
        </div>
        <div>
            <h3>✅ المنتجات المقبولة (معروضة في المتجر)</h3>
            <div class="grid-container" id="admin-approved-grid" style="padding:0;"></div>
        </div>
    </section>

    <footer>
        <p>© 2026 جميع الحقوق محفوظة لمنصة Mobitech الرقمية المتكاملة</p>
    </footer>

    <div id="toastMsg" class="toast-notify"><i class="fas fa-bell"></i> <span>رسالة</span></div>

    <script>
        // البيانات الأساسية مع معرفات فريدة
        var defaultItems = [
            { id: "d1", title: "شاشات بديلة مفحوصة (OLED & LCD)", category: "شاشات", desc: "شاشات وبطاريات عالية الجودة مع الضمان الكامل للأداء واللمس المتعدد.", img: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=500&q=80" },
            { id: "d2", title: "سبيكر مضخم صوت نقي للأجهزة الذكية", category: "سبيكرات", desc: "سبيكرات صيانة داخلية وخارجية أصلية لجميع فئات الهواتف المحمولة.", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80" },
            { id: "d3", title: "كفرات حماية حرارية ومقاومة للصدمات", category: "كفرات", desc: "تشكيلة كفرات متكاملة ذات مظهر عصري أنيق وحماية قصوى لهاتفك.", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80" }
        ];

        var approvedItems = JSON.parse(localStorage.getItem('mobitech_saved_approved')) || [];
        var pendingItems = JSON.parse(localStorage.getItem('mobitech_saved_pending')) || [];
        var currentFilter = 'الكل';
        var searchQuery = '';

        // دالة الإشعار
        function showToast(msg, isError) {
            var toast = document.getElementById('toastMsg');
            toast.querySelector('span').innerText = msg;
            toast.style.borderRightColor = isError ? '#ef4444' : '#38bdf8';
            toast.classList.add('show');
            setTimeout(function() { toast.classList.remove('show'); }, 2500);
        }

        // دالة مساعدة لتحديث الإحصائيات
        function updateStats() {
            var allItems = defaultItems.concat(approvedItems);
            var counts = { 'شاشات': 0, 'سبيكرات': 0, 'كفرات': 0 };
            for (var i = 0; i < allItems.length; i++) {
                var cat = allItems[i].category;
                if (counts[cat] !== undefined) counts[cat]++;
            }
            var statsHtml = '<div class="stat-card">📱 شاشات: ' + counts['شاشات'] + '</div>' +
                            '<div class="stat-card">🔊 سبيكرات: ' + counts['سبيكرات'] + '</div>' +
                            '<div class="stat-card">🛡️ كفرات: ' + counts['كفرات'] + '</div>';
            document.getElementById('statsRow').innerHTML = statsHtml;
        }

        function toggleSection(id) {
            var el = document.getElementById(id);
            if (el.style.display === 'block') {
                el.style.display = 'none';
            } else {
                el.style.display = 'block';
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }

        function showAllStore() {
            currentFilter = 'الكل';
            searchQuery = '';
            document.getElementById('searchInput').value = '';
            var buttons = document.querySelectorAll('.cat-btn');
            buttons.forEach(function(b) { b.classList.remove('active'); });
            document.getElementById('btn-all').classList.add('active');
            refreshStoreUI();
        }

        function filterCat(cat, e) {
            currentFilter = cat;
            var buttons = document.querySelectorAll('.cat-btn');
            buttons.forEach(function(b) { b.classList.remove('active'); });
            if (e && e.currentTarget) {
                e.currentTarget.classList.add('active');
            }
            refreshStoreUI();
        }

        // دالة عرض المتجر مع دعم البحث والفلتر
        function refreshStoreUI() {
            var storeGrid = document.getElementById('store-grid');
            var displayItems = defaultItems.concat(approvedItems);
            var storeHTML = '';

            for (var i = 0; i < displayItems.length; i++) {
                var item = displayItems[i];
                // تطبيق الفلتر
                if (currentFilter !== 'الكل' && item.category !== currentFilter) continue;
                // تطبيق البحث
                if (searchQuery.trim() !== '') {
                    if (item.title.indexOf(searchQuery) === -1 && item.desc.indexOf(searchQuery) === -1) continue;
                }
                storeHTML += '<div class="card">' +
                    '<img src="' + item.img + '" onerror="this.src=\'https://images.unsplash.com/photo-1595556621984-6c0f9f44c648?w=500\'">' +
                    '<h3>' + escapeHtml(item.title) + '</h3>' +
                    '<p>' + escapeHtml(item.desc) + '</p>' +
                    '<span class="badge">' + item.category + '</span>' +
                    '</div>';
            }
            storeGrid.innerHTML = storeHTML || '<p style="text-align:center; grid-column:1/-1; padding:20px;">لا توجد قطع معروضة في هذا القسم حالياً.</p>';
            updateStats();
            renderAdminPanels();
        }

        // عرض لوحة المسؤول (منفصلة عن المتجر)
        function renderAdminPanels() {
            var pendingContainer = document.getElementById('admin-pending-grid');
            var approvedContainer = document.getElementById('admin-approved-grid');
            if (!pendingContainer || !approvedContainer) return;

            // قائمة المعلقة
            if (pendingItems.length === 0) {
                pendingContainer.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:var(--text-muted); padding:20px;">لا توجد سلع مضافة معلقة حالياً.</p>';
            } else {
                var pendHtml = '';
                for (var i = 0; i < pendingItems.length; i++) {
                    var p = pendingItems[i];
                    pendHtml += '<div class="card" style="border: 1px dashed #f59e0b;">' +
                        '<img src="' + p.img + '" onerror="this.src=\'https://images.unsplash.com/photo-1595556621984-6c0f9f44c648?w=500\'">' +
                        '<h3>' + escapeHtml(p.title) + '</h3>' +
                        '<p>' + escapeHtml(p.desc) + '</p>' +
                        '<span class="badge" style="color:#f59e0b; background:rgba(245,158,11,0.1)">' + p.category + '</span>' +
                        '<div class="admin-actions">' +
                        '<button onclick="adminAction(\'' + p.id + '\', \'accept\')" class="btn btn-success"><i class="fas fa-check"></i> قبول العرض</button>' +
                        '<button onclick="adminAction(\'' + p.id + '\', \'reject\')" class="btn btn-danger"><i class="fas fa-times"></i> رفض العرض</button>' +
                        '</div>' +
                        '</div>';
                }
                pendingContainer.innerHTML = pendHtml;
            }

            // قائمة المقبولة (مع إمكانية الحذف)
            if (approvedItems.length === 0) {
                approvedContainer.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:var(--text-muted); padding:20px;">لا توجد منتجات مقبولة بعد.</p>';
            } else {
                var appHtml = '';
                for (var j = 0; j < approvedItems.length; j++) {
                    var a = approvedItems[j];
                    appHtml += '<div class="card">' +
                        '<img src="' + a.img + '" onerror="this.src=\'https://images.unsplash.com/photo-1595556621984-6c0f9f44c648?w=500\'">' +
                        '<h3>' + escapeHtml(a.title) + '</h3>' +
                        '<p>' + escapeHtml(a.desc) + '</p>' +
                        '<span class="badge">' + a.category + '</span>' +
                        '<div class="admin-actions">' +
                        '<button onclick="deleteApprovedItem(\'' + a.id + '\')" class="btn btn-danger"><i class="fas fa-trash-alt"></i> حذف من المتجر</button>' +
                        '</div>' +
                        '</div>';
                }
                approvedContainer.innerHTML = appHtml;
            }
        }

        // دالة الحذف من المقبولة
        window.deleteApprovedItem = function(id) {
            if (confirm('هل أنت متأكد من حذف هذا المنتج نهائياً من المتجر؟')) {
                approvedItems = approvedItems.filter(function(item) { return item.id !== id; });
                localStorage.setItem('mobitech_saved_approved', JSON.stringify(approvedItems));
                refreshStoreUI();
                showToast('تم حذف المنتج من المتجر', false);
            }
        };

        // إضافة منتج من العميل مع إضافة معرف فريد
        function clientSubmitProduct(event) {
            event.preventDefault();
            var newId = Date.now() + '-' + Math.random().toString(36).substr(2, 6);
            var newItem = {
                id: newId,
                title: document.getElementById('pTitle').value,
                category: document.getElementById('pCategory').value,
                desc: document.getElementById('pDesc').value,
                img: document.getElementById('pImg').value
            };
            pendingItems.push(newItem);
            localStorage.setItem('mobitech_saved_pending', JSON.stringify(pendingItems));
            showToast('تم تحميل السلعة بنجاح! ستظهر في لوحة المسؤول للمراجعة.', false);
            document.getElementById('productForm').reset();
            document.getElementById('imagePreviewDiv').style.display = 'none';
            document.getElementById('client-section').style.display = 'none';
            refreshStoreUI();
        }

        // قبول أو رفض (باستخدام id)
        window.adminAction = function(id, decision) {
            var index = -1;
            for (var i = 0; i < pendingItems.length; i++) {
                if (pendingItems[i].id === id) { index = i; break; }
            }
            if (index === -1) return;
            if (decision === 'accept') {
                approvedItems.push(pendingItems[index]);
                localStorage.setItem('mobitech_saved_approved', JSON.stringify(approvedItems));
                showToast('تم قبول السلعة وظهرت في المتجر', false);
            } else {
                showToast('تم رفض السلعة', false);
            }
            pendingItems.splice(index, 1);
            localStorage.setItem('mobitech_saved_pending', JSON.stringify(pendingItems));
            refreshStoreUI();
        };

        // دالة للبحث المباشر
        document.getElementById('searchInput').addEventListener('input', function(e) {
            searchQuery = e.target.value;
            refreshStoreUI();
        });

        // معاينة الصورة عند إدخال الرابط
        var imgInput = document.getElementById('pImg');
        var previewDiv = document.getElementById('imagePreviewDiv');
        var previewImg = document.getElementById('previewImg');
        imgInput.addEventListener('input', function() {
            var url = this.value;
            if (url) {
                previewImg.src = url;
                previewDiv.style.display = 'block';
            } else {
                previewDiv.style.display = 'none';
            }
        });

        // دالة ترميز آمن
        function escapeHtml(str) {
            if (!str) return '';
            return str.replace(/[&<>]/g, function(m) {
                if (m === '&') return '&amp;';
                if (m === '<') return '&lt;';
                if (m === '>') return '&gt;';
                return m;
            });
        }

        // التأكد من دمج المنتجات الافتراضية مع المقبولة (لتجنب التكرار)
        (function init() {
            // دمج الافتراضيات إذا كانت المقبولة فارغة أو لا تحتوي عليها
            if (approvedItems.length === 0) {
                approvedItems = defaultItems.slice(); // نسخة
                localStorage.setItem('mobitech_saved_approved', JSON.stringify(approvedItems));
            } else {
                // التأكد من وجود المنتجات الافتراضية (لن يتم تكرارها لأن المعرفات فريدة)
                for (var i = 0; i < defaultItems.length; i++) {
                    var exists = false;
                    for (var j = 0; j < approvedItems.length; j++) {
                        if (approvedItems[j].id === defaultItems[i].id) { exists = true; break; }
                    }
                    if (!exists) approvedItems.push(defaultItems[i]);
                }
                localStorage.setItem('mobitech_saved_approved', JSON.stringify(approvedItems));
            }
            refreshStoreUI();
        })();
    </script>
</body>
</html>
    `);
});

app.get('/api', (req, res) => {
    res.json({ message: "Welcome to Mobitech API Backend" });
});

module.exports = app;
