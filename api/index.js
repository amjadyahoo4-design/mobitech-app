<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>Mobitech | المنصة الذكية المتكاملة (النسخة المحسّنة)</title>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --bg-color: #0b0f19;
            --card-bg: #151c2c;
            --accent: #38bdf8;
            --accent-dark: #0284c7;
            --success: #10b981;
            --warning: #f59e0b;
            --danger: #ef4444;
            --text: #f3f4f6;
            --text-dim: #9ca3af;
            --border: rgba(255, 255, 255, 0.05);
        }

        body {
            background: var(--bg-color);
            color: var(--text);
            font-family: 'Tajawal', sans-serif;
            line-height: 1.5;
        }

        /* شريط التنقل */
        nav {
            background: rgba(21, 28, 44, 0.9);
            backdrop-filter: blur(12px);
            padding: 1rem 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid var(--border);
        }

        .logo {
            font-size: 1.6rem;
            font-weight: 900;
            color: var(--accent);
            display: flex;
            align-items: center;
            gap: 0.6rem;
            text-decoration: none;
        }

        .nav-links {
            display: flex;
            gap: 1.8rem;
            list-style: none;
        }

        .nav-links a {
            color: var(--text);
            text-decoration: none;
            font-weight: 500;
            cursor: pointer;
            transition: 0.2s;
        }

        .nav-links a:hover {
            color: var(--accent);
        }

        /* الأزرار */
        .btn {
            padding: 0.7rem 1.8rem;
            border-radius: 2rem;
            font-weight: 700;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            border: none;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 0.95rem;
        }

        .btn:hover {
            transform: translateY(-2px);
            opacity: 0.9;
        }

        .btn-client {
            background: #1e293b;
            color: white;
            border: 1px solid var(--border);
        }

        .btn-admin {
            background: var(--warning);
            color: #0b0f19;
        }

        .btn-whatsapp {
            background: #25d366;
            color: white;
        }

        .btn-telegram {
            background: #0284c7;
            color: white;
        }

        .btn-submit {
            background: var(--accent);
            color: #0b0f19;
            width: 100%;
            justify-content: center;
            border-radius: 0.8rem;
        }

        .btn-success {
            background: var(--success);
            color: white;
            padding: 0.4rem 1rem;
            font-size: 0.85rem;
        }

        .btn-danger {
            background: var(--danger);
            color: white;
            padding: 0.4rem 1rem;
            font-size: 0.85rem;
        }

        /* البطاقات */
        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.8rem;
            padding: 2rem 5%;
        }

        .card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 1.2rem;
            padding: 1.2rem;
            transition: transform 0.2s, box-shadow 0.2s;
            display: flex;
            flex-direction: column;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.3);
            border-color: rgba(56,189,248,0.3);
        }

        .card img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 0.8rem;
            background: #0f1420;
        }

        .badge {
            background: rgba(56,189,248,0.15);
            color: var(--accent);
            padding: 0.2rem 0.8rem;
            border-radius: 2rem;
            font-size: 0.75rem;
            font-weight: bold;
            align-self: flex-start;
            margin-top: 0.8rem;
        }

        /* الحقول والنماذج */
        .dynamic-section {
            background: var(--card-bg);
            border: 1px solid rgba(56,189,248,0.2);
            border-radius: 1.2rem;
            padding: 1.8rem;
            margin: 2rem auto;
            max-width: 700px;
            display: none;
        }

        .form-group {
            margin-bottom: 1.2rem;
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
        }

        .form-group label {
            font-weight: 600;
            font-size: 0.9rem;
        }

        input, select, textarea {
            background: var(--bg-color);
            border: 1px solid var(--border);
            padding: 0.8rem;
            border-radius: 0.6rem;
            color: white;
            font-family: inherit;
            font-size: 0.9rem;
        }

        .categories-bar {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.8rem;
            margin: 1.5rem 0;
        }

        .cat-btn {
            background: #1e293b;
            border: none;
            padding: 0.5rem 1.5rem;
            border-radius: 2rem;
            color: white;
            cursor: pointer;
            font-weight: 600;
            transition: 0.2s;
        }

        .cat-btn.active, .cat-btn:hover {
            background: var(--accent);
            color: #0b0f19;
        }

        /* إشعار توست */
        .toast-notify {
            position: fixed;
            bottom: 25px;
            left: 50%;
            transform: translateX(-50%) scale(0.9);
            background: #1e293b;
            backdrop-filter: blur(12px);
            padding: 0.8rem 1.8rem;
            border-radius: 3rem;
            display: flex;
            align-items: center;
            gap: 0.8rem;
            box-shadow: 0 8px 20px rgba(0,0,0,0.4);
            z-index: 2000;
            border-right: 4px solid var(--accent);
            opacity: 0;
            transition: 0.2s;
            pointer-events: none;
        }

        .toast-notify.show {
            opacity: 1;
            transform: translateX(-50%) scale(1);
        }

        /* إحصائيات */
        .stats-row {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
            margin: 1rem auto;
        }
        .stat-card {
            background: var(--card-bg);
            border-radius: 1rem;
            padding: 0.5rem 1.2rem;
            font-size: 0.85rem;
            border: 1px solid var(--border);
        }

        footer {
            background: #070a10;
            text-align: center;
            padding: 1.5rem;
            margin-top: 3rem;
            color: var(--text-dim);
        }

        @media (max-width: 700px) {
            .nav-links { gap: 1rem; }
            .hero h1 { font-size: 1.8rem; }
        }
    </style>
</head>
<body>

<nav>
    <a href="/" class="logo"><i class="fas fa-microchip"></i> Mobitech</a>
    <ul class="nav-links">
        <li><a onclick="showAllStore()">🏪 المتجر</a></li>
        <li><a onclick="toggleSection('frp-section')">🔓 FRP</a></li>
        <li><a onclick="toggleSection('client-section')">➕ إضافة سلعة</a></li>
        <li><a onclick="toggleSection('admin-panel')">👑 لوحة التحكم</a></li>
    </ul>
</nav>

<section class="hero" style="text-align:center; padding:2rem 5% 1rem;">
    <h1>منصة <span style="color:var(--accent)">Mobitech</span> الذكية</h1>
    <p>متجر متكامل لقطع الغيار، الصيانة، وخدمات FRP الفورية مع نظام إدارة متطور.</p>
    <div class="social-buttons" style="display:flex; justify-content:center; gap:1rem; margin:1rem 0;">
        <a href="https://wa.me/96181157961" class="btn btn-whatsapp" target="_blank"><i class="fab fa-whatsapp"></i> واتساب</a>
        <a href="https://t.me/Mobitech_Support" class="btn btn-telegram" target="_blank"><i class="fab fa-telegram"></i> تليجرام</a>
    </div>
</section>

<!-- قسم FRP -->
<section id="frp-section" class="dynamic-section" style="text-align:center;">
    <div style="background:linear-gradient(145deg,#1e1b4b,#0f0f1f); padding:1.5rem; border-radius:1.2rem;">
        <span style="background:#10b98120; padding:0.3rem 1rem; border-radius:2rem; color:#34d399;"><i class="fas fa-circle"></i> الخدمة نشطة</span>
        <h3 style="margin:1rem 0;">حلول FRP فورية (تخطي حساب جوجل)</h3>
        <p>لجميع أجهزة سامسونج، شاومي، أوبو، هواوي — عن بُعد أو في المحل.</p>
        <a href="https://wa.me/96181157961?text=أريد%20خدمة%20FRP%20فورية" class="btn" style="background:var(--accent); margin-top:1rem; display:inline-flex;">طلب الخدمة الآن <i class="fas fa-arrow-left"></i></a>
    </div>
</section>

<!-- شريط البحث والفئات -->
<div style="padding:0 5%;">
    <div style="display:flex; flex-wrap:wrap; gap:1rem; align-items:center; justify-content:space-between; margin-bottom:1rem;">
        <div style="flex:1; min-width:200px;">
            <input type="text" id="searchInput" placeholder="🔍 ابحث عن منتج..." style="width:100%; background:#1e293b;">
        </div>
        <button id="clearSearchBtn" class="btn-client" style="padding:0.5rem 1rem;">❌ مسح البحث</button>
    </div>
    <div class="categories-bar" id="categoriesBar"></div>
</div>

<div class="stats-row" id="statsRow"></div>

<!-- عرض المتجر -->
<div class="grid-container" id="store-grid"></div>

<!-- قسم إضافة سلعة (زبون) -->
<section id="client-section" class="dynamic-section">
    <h3 style="color:var(--accent); text-align:center;"><i class="fas fa-plus-circle"></i> إضافة سلعة جديدة</h3>
    <form id="productForm">
        <div class="form-group">
            <label>اسم المنتج / المواصفات</label>
            <input type="text" id="pTitle" placeholder="شاشة آيفون 13 برو MAX أصلية" required>
        </div>
        <div class="form-group">
            <label>القسم</label>
            <select id="pCategory"><option>شاشات</option><option>سبيكرات</option><option>كفرات</option></select>
        </div>
        <div class="form-group">
            <label>الوصف والسعر</label>
            <textarea id="pDesc" rows="2" placeholder="السعر: 35$ - حالة ممتازة"></textarea>
        </div>
        <div class="form-group">
            <label>رابط الصورة</label>
            <input type="url" id="pImg" placeholder="https://..." required>
        </div>
        <div class="form-group" id="imagePreview" style="display:none;">
            <img id="previewImg" style="max-width:100%; height:auto; border-radius:0.6rem;" />
        </div>
        <button type="submit" class="btn btn-submit"><i class="fas fa-paper-plane"></i> إرسال للمراجعة</button>
    </form>
</section>

<!-- لوحة التحكم (مسؤول) -->
<section id="admin-panel" class="dynamic-section" style="max-width:1100px;">
    <h3 style="color:var(--warning); text-align:center;">🛠️ لوحة المسؤول – المنتجات المعلقة والمقبولة</h3>
    <div style="margin:1rem 0; background:#1e293b; padding:0.8rem; border-radius:1rem;">
        <h4>⏳ طلبات معلقة <span id="pendingCount">0</span></h4>
        <div class="grid-container" id="admin-pending-grid" style="padding:0.5rem 0;"></div>
        <hr style="margin:1rem 0; border-color:var(--border);">
        <h4>✅ المنتجات المقبولة في المتجر <span id="approvedCount">0</span></h4>
        <div class="grid-container" id="admin-approved-grid" style="padding:0.5rem 0;"></div>
    </div>
</section>

<footer>
    <p>© 2026 Mobitech – جميع الحقوق محفوظة | نظام إدارة متجر ذكي</p>
</footer>

<div id="toastMsg" class="toast-notify"><i class="fas fa-info-circle"></i> <span>رسالة</span></div>

<script>
    // ---------- Helper functions ----------
    function showToast(msg, isError = false) {
        const toast = document.getElementById('toastMsg');
        toast.querySelector('span').innerText = msg;
        toast.style.borderRightColor = isError ? '#ef4444' : '#38bdf8';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2800);
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(c) {
            return c;
        });
    }

    // بيانات أساسية
    let defaultItems = [
        { id: 'd1', title: "شاشات بديلة OLED/LCD", category: "شاشات", desc: "شاشات أصلية عالية الجودة مع ضمان لمدة 6 أشهر.", img: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?w=500&auto=format" },
        { id: 'd2', title: "سبيكر صوت نقي", category: "سبيكرات", desc: "سماعات داخلية وخارجية – جودة استديو.", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format" },
        { id: 'd3', title: "كفرات حماية متطورة", category: "كفرات", desc: "مقاومة للصدمات، سيليكون و شفاف.", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format" }
    ];

    let approvedItems = [];  // { id, title, category, desc, img }
    let pendingItems = [];

    // تحميل من localStorage بأمان
    function loadData() {
        try {
            let savedApproved = localStorage.getItem('mobitech_approved_v2');
            let savedPending = localStorage.getItem('mobitech_pending_v2');
            if (savedApproved) approvedItems = JSON.parse(savedApproved);
            if (savedPending) pendingItems = JSON.parse(savedPending);
            if (!approvedItems.find(i => i.id === 'd1')) {
                // دمج الافتراضيات مع تجنب التكرار
                for (let def of defaultItems) {
                    if (!approvedItems.some(ap => ap.id === def.id)) approvedItems.push(def);
                }
                saveToLocal();
            }
        } catch(e) { console.warn(e); }
        // التأكد من وجود id لكل عنصر
        [...approvedItems, ...pendingItems].forEach(item => { if (!item.id) item.id = Date.now() + '-' + Math.random(); });
        saveToLocal();
    }

    function saveToLocal() {
        localStorage.setItem('mobitech_approved_v2', JSON.stringify(approvedItems));
        localStorage.setItem('mobitech_pending_v2', JSON.stringify(pendingItems));
    }

    // المتغيرات العامة
    let currentCategory = 'الكل';
    let searchQuery = '';

    function generateStats() {
        const statsDiv = document.getElementById('statsRow');
        const categories = ['شاشات', 'سبيكرات', 'كفرات'];
        let allItems = [...defaultItems.filter(d => !approvedItems.some(ap => ap.id === d.id)), ...approvedItems];
        let statsHtml = categories.map(cat => {
            let count = allItems.filter(item => item.category === cat).length;
            return `<div class="stat-card">📌 ${cat} : ${count}</div>`;
        }).join('');
        statsDiv.innerHTML = statsHtml || '<div class="stat-card">لا توجد منتجات</div>';
    }

    function renderStore() {
        let allApproved = [...approvedItems];
        let displayItems = allApproved.filter(item => {
            if (currentCategory !== 'الكل' && item.category !== currentCategory) return false;
            if (searchQuery.trim() !== '') {
                return item.title.includes(searchQuery) || item.desc.includes(searchQuery);
            }
            return true;
        });
        const container = document.getElementById('store-grid');
        if (displayItems.length === 0) {
            container.innerHTML = '<div style="text-align:center; grid-column:1/-1; padding:2rem;">لا توجد منتجات تطابق البحث أو التصنيف 🛒</div>';
            return;
        }
        let html = '';
        for (let item of displayItems) {
            html += `<div class="card">
                        <img src="${escapeHtml(item.img)}" onerror="this.src='https://placehold.co/500x300?text=No+Image'">
                        <h3>${escapeHtml(item.title)}</h3>
                        <p>${escapeHtml(item.desc)}</p>
                        <span class="badge">${escapeHtml(item.category)}</span>
                     </div>`;
        }
        container.innerHTML = html;
        generateStats();
    }

    function renderAdminPanels() {
        const pendingContainer = document.getElementById('admin-pending-grid');
        const approvedContainer = document.getElementById('admin-approved-grid');
        document.getElementById('pendingCount').innerText = pendingItems.length;
        document.getElementById('approvedCount').innerText = approvedItems.length;

        if (pendingItems.length === 0) pendingContainer.innerHTML = '<p style="grid-column:1/-1; color:var(--text-dim);">✨ لا توجد طلبات معلقة</p>';
        else {
            let pendHtml = '';
            pendingItems.forEach((item, idx) => {
                pendHtml += `<div class="card" style="border:1px solid #f59e0b40;">
                                <img src="${escapeHtml(item.img)}" onerror="this.src='https://placehold.co/500x300?text=Error'">
                                <h3>${escapeHtml(item.title)}</h3>
                                <p>${escapeHtml(item.desc)}</p>
                                <span class="badge" style="background:#f59e0b20;color:#fbbf24;">${escapeHtml(item.category)}</span>
                                <div class="admin-actions" style="display:flex; gap:0.6rem; margin-top:0.8rem;">
                                    <button class="btn btn-success" onclick="approveItem('${item.id}')"><i class="fas fa-check"></i> قبول</button>
                                    <button class="btn btn-danger" onclick="rejectItem('${item.id}')"><i class="fas fa-trash"></i> رفض</button>
                                </div>
                             </div>`;
            });
            pendingContainer.innerHTML = pendHtml;
        }

        // عرض المنتجات المقبولة مع خيار الحذف
        if (approvedItems.length === 0) approvedContainer.innerHTML = '<p style="grid-column:1/-1;">لا توجد منتجات مقبولة بعد</p>';
        else {
            let approvedHtml = '';
            approvedItems.forEach(item => {
                approvedHtml += `<div class="card">
                                    <img src="${escapeHtml(item.img)}" onerror="this.src='https://placehold.co/500x300'">
                                    <h3>${escapeHtml(item.title)}</h3>
                                    <p>${escapeHtml(item.desc)}</p>
                                    <span class="badge">${escapeHtml(item.category)}</span>
                                    <button class="btn btn-danger" style="margin-top:0.8rem;" onclick="deleteApprovedItem('${item.id}')"><i class="fas fa-trash-alt"></i> حذف من المتجر</button>
                                 </div>`;
            });
            approvedContainer.innerHTML = approvedHtml;
        }
    }

    // إجراءات الإدارة
    window.approveItem = function(id) {
        const itemIndex = pendingItems.findIndex(p => p.id === id);
        if (itemIndex !== -1) {
            const approvedItem = { ...pendingItems[itemIndex] };
            approvedItems.push(approvedItem);
            pendingItems.splice(itemIndex, 1);
            saveToLocal();
            renderAdminPanels();
            renderStore();
            showToast('✅ تم قبول السلعة ونشرها في المتجر');
        }
    };

    window.rejectItem = function(id) {
        if (confirm('هل أنت متأكد من رفض هذه السلعة؟')) {
            pendingItems = pendingItems.filter(p => p.id !== id);
            saveToLocal();
            renderAdminPanels();
            showToast('🗑️ تم رفض السلعة', false);
        }
    };

    window.deleteApprovedItem = function(id) {
        if (confirm('حذف هذا المنتج من المتجر نهائياً؟')) {
            approvedItems = approvedItems.filter(item => item.id !== id);
            saveToLocal();
            renderAdminPanels();
            renderStore();
            showToast('تم حذف المنتج من المتجر');
        }
    };

    // إضافة عميل
    document.getElementById('productForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let newTitle = document.getElementById('pTitle').value.trim();
        let newCat = document.getElementById('pCategory').value;
        let newDesc = document.getElementById('pDesc').value.trim();
        let newImg = document.getElementById('pImg').value.trim();

        if (!newTitle || !newImg) {
            showToast('الرجاء ملء جميع الحقول المطلوبة', true);
            return;
        }
        const newItem = {
            id: Date.now() + '-' + Math.random().toString(36),
            title: newTitle,
            category: newCat,
            desc: newDesc || 'لا يوجد وصف إضافي',
            img: newImg
        };
        pendingItems.push(newItem);
        saveToLocal();
        renderAdminPanels();
        showToast('تم إرسال السلعة للمسؤول للمراجعة ✅');
        document.getElementById('productForm').reset();
        document.getElementById('imagePreview').style.display = 'none';
        document.getElementById('client-section').style.display = 'none';
    });

    // معاينة الصورة
    document.getElementById('pImg').addEventListener('input', function() {
        let url = this.value;
        if (url) {
            let previewDiv = document.getElementById('imagePreview');
            let previewImg = document.getElementById('previewImg');
            previewImg.src = url;
            previewDiv.style.display = 'block';
        } else {
            document.getElementById('imagePreview').style.display = 'none';
        }
    });

    // فلاتر و بحث
    window.filterCat = function(cat, btn) {
        currentCategory = cat;
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        renderStore();
    };

    window.showAllStore = function() {
        currentCategory = 'الكل';
        searchQuery = '';
        document.getElementById('searchInput').value = '';
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('#categoriesBar .cat-btn:first-child')?.classList.add('active');
        renderStore();
    };

    document.getElementById('searchInput').addEventListener('input', function(e) {
        searchQuery = e.target.value;
        renderStore();
    });
    document.getElementById('clearSearchBtn').addEventListener('click', function() {
        document.getElementById('searchInput').value = '';
        searchQuery = '';
        renderStore();
    });

    function buildCategoryBtns() {
        let cats = ['الكل', 'شاشات', 'سبيكرات', 'كفرات'];
        let bar = document.getElementById('categoriesBar');
        bar.innerHTML = '';
        cats.forEach(c => {
            let btn = document.createElement('button');
            btn.className = 'cat-btn' + (c === 'الكل' ? ' active' : '');
            btn.innerText = c === 'الكل' ? '⚡ الكل' : (c === 'شاشات' ? '📱 شاشات' : (c === 'سبيكرات' ? '🔊 سبيكرات' : '🛡️ كفرات'));
            btn.onclick = (function(cat) { return function() { filterCat(cat, this); }; })(c);
            bar.appendChild(btn);
        });
    }

    window.toggleSection = function(id) {
        let el = document.getElementById(id);
        if (el.style.display === 'block') el.style.display = 'none';
        else { el.style.display = 'block'; el.scrollIntoView({ behavior: 'smooth' }); }
    };

    // تهيئة
    loadData();
    buildCategoryBtns();
    renderStore();
    renderAdminPanels();
</script>
</body>
</html>
