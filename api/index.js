app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobitech | المنصة الذكية</title>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0b0f19; color: #f3f4f6; font-family: 'Tajawal', sans-serif; }
        nav { background: #151c2c; padding: 1rem 5%; display: flex; justify-content: space-between; align-items: center; }
        .logo { color: #38bdf8; font-size: 1.5rem; font-weight: bold; }
        .nav-links { display: flex; gap: 1.5rem; list-style: none; }
        .nav-links a { color: white; text-decoration: none; cursor: pointer; }
        .btn { padding: 0.5rem 1.2rem; border-radius: 2rem; border: none; cursor: pointer; font-weight: bold; }
        .btn-client { background: #1e293b; color: white; }
        .btn-admin { background: #f59e0b; color: black; }
        .grid-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 1.5rem; padding: 2rem 5%; }
        .card { background: #151c2c; border-radius: 1rem; padding: 1rem; text-align: center; }
        .card img { width: 100%; height: 160px; object-fit: cover; border-radius: 0.5rem; }
        .dynamic-section { display: none; background: #151c2c; margin: 2rem auto; padding: 1.5rem; border-radius: 1rem; max-width: 600px; }
        input, select, textarea { width: 100%; padding: 0.5rem; margin-top: 0.3rem; border-radius: 0.5rem; background: #0b0f19; color: white; border: 1px solid #334155; }
        button { margin-top: 0.5rem; }
        .badge { background: #38bdf820; color: #38bdf8; padding: 0.2rem 0.8rem; border-radius: 1rem; font-size: 0.8rem; display: inline-block; }
        .admin-actions { display: flex; gap: 0.5rem; justify-content: center; margin-top: 0.8rem; }
    </style>
</head>
<body>
<nav>
    <div class="logo"><i class="fas fa-mobile-alt"></i> Mobitech</div>
    <ul class="nav-links">
        <li><a onclick="showAll()">المتجر</a></li>
        <li><a onclick="toggle('frpSection')">خدمة FRP</a></li>
        <li><a onclick="toggle('clientSection')">إضافة سلعة</a></li>
        <li><a onclick="toggle('adminSection')">لوحة المسؤول</a></li>
    </ul>
</nav>

<div style="text-align:center; padding: 2rem 1rem 0;">
    <h1>منصة <span style="color:#38bdf8">Mobitech</span> الذكية</h1>
    <p>أحدث قطع الغيار وخدمات FRP الفورية</p>
    <div style="margin:1rem;">
        <a href="https://wa.me/96181157961" class="btn" style="background:#25d366; color:white; display:inline-flex; gap:0.5rem;">واتساب</a>
        <a href="https://t.me/Mobitech_Support" class="btn" style="background:#0284c7; color:white; display:inline-flex; gap:0.5rem;">تليجرام</a>
    </div>
</div>

<!-- قسم FRP -->
<div id="frpSection" class="dynamic-section" style="text-align:center;">
    <h3>🔓 خدمة FRP (تخطي حساب جوجل)</h3>
    <p>حلول فورية لجميع الأجهزة - سامسونج، شاومي، أوبو</p>
    <a href="https://wa.me/96181157961?text=أريد%20خدمة%20FRP" class="btn" style="background:#38bdf8;">اطلب الخدمة الآن</a>
</div>

<!-- المتجر -->
<div class="grid-container" id="storeGrid"></div>

<!-- إضافة سلعة -->
<div id="clientSection" class="dynamic-section">
    <h3>➕ إضافة سلعة للبيع</h3>
    <form id="productForm">
        <label>اسم السلعة:</label>
        <input type="text" id="title" required>
        <label>القسم:</label>
        <select id="cat"><option>شاشات</option><option>سبيكرات</option><option>كفرات</option></select>
        <label>الوصف والسعر:</label>
        <textarea id="desc" rows="2"></textarea>
        <label>رابط الصورة:</label>
        <input type="url" id="img" required>
        <button type="submit" class="btn btn-client" style="width:100%; margin-top:1rem;">إرسال للمراجعة</button>
    </form>
</div>

<!-- لوحة المسؤول -->
<div id="adminSection" class="dynamic-section" style="max-width:900px;">
    <h3 style="color:#f59e0b;">👑 لوحة المسؤول</h3>
    <div id="pendingList"></div>
    <hr style="margin:1rem 0;">
    <div id="approvedList"></div>
</div>

<script>
    // ---------- البيانات الأولية ----------
    let defaultItems = [
        { id: "d1", title: "شاشة سامسونج A52", category: "شاشات", desc: "OLED أصلية 120Hz", img: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?w=400" },
        { id: "d2", title: "سبيكر ايفون 12", category: "سبيكرات", desc: "جودة عالية", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400" },
        { id: "d3", title: "كفر حماية شفاف", category: "كفرات", desc: "سيليكون مضاد للصدمات", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400" }
    ];

    let approved = [];   // المنتجات المعروضة في المتجر
    let pending = [];    // منتجات بانتظار الموافقة

    // تحميل من localStorage
    function load() {
        let savedApproved = localStorage.getItem('mobitech_approved');
        let savedPending = localStorage.getItem('mobitech_pending');
        if (savedApproved) approved = JSON.parse(savedApproved);
        if (savedPending) pending = JSON.parse(savedPending);
        // دمج المنتجات الافتراضية إذا لم تكن موجودة
        if (approved.length === 0) {
            approved = [...defaultItems];
            save();
        } else {
            // تأكد من وجود المنتجات الافتراضية
            for (let def of defaultItems) {
                if (!approved.some(a => a.id === def.id)) approved.push(def);
            }
            save();
        }
        renderAll();
    }

    function save() {
        localStorage.setItem('mobitech_approved', JSON.stringify(approved));
        localStorage.setItem('mobitech_pending', JSON.stringify(pending));
    }

    // عرض المتجر
    function renderStore() {
        let grid = document.getElementById('storeGrid');
        if (!grid) return;
        if (approved.length === 0) {
            grid.innerHTML = '<p style="grid-column:1/-1; text-align:center;">لا توجد منتجات حالياً</p>';
            return;
        }
        let html = '';
        for (let item of approved) {
            html += \`
                <div class="card">
                    <img src="\${item.img}" onerror="this.src='https://placehold.co/400x200?text=No+Image'">
                    <h3>\${escapeHtml(item.title)}</h3>
                    <p>\${escapeHtml(item.desc)}</p>
                    <span class="badge">\${item.category}</span>
                </div>
            \`;
        }
        grid.innerHTML = html;
    }

    // عرض لوحة المسؤول
    function renderAdmin() {
        let pendingDiv = document.getElementById('pendingList');
        let approvedDiv = document.getElementById('approvedList');
        if (!pendingDiv || !approvedDiv) return;
        
        if (pending.length === 0) {
            pendingDiv.innerHTML = '<p>⚠️ لا توجد طلبات معلقة</p>';
        } else {
            let pendHtml = '<h4>⏳ طلبات معلقة</h4><div class="grid-container" style="padding:0;">';
            for (let i=0; i<pending.length; i++) {
                let p = pending[i];
                pendHtml += \`
                    <div class="card">
                        <img src="\${p.img}" onerror="this.src='https://placehold.co/400x200'">
                        <h3>\${escapeHtml(p.title)}</h3>
                        <p>\${escapeHtml(p.desc)}</p>
                        <span class="badge">\${p.category}</span>
                        <div class="admin-actions">
                            <button class="btn" style="background:#10b981;" onclick="acceptItem('\${p.id}')">قبول</button>
                            <button class="btn" style="background:#ef4444;" onclick="rejectItem('\${p.id}')">رفض</button>
                        </div>
                    </div>
                \`;
            }
            pendHtml += '</div>';
            pendingDiv.innerHTML = pendHtml;
        }

        if (approved.length === 0) {
            approvedDiv.innerHTML = '<p>✅ لا توجد منتجات مقبولة بعد</p>';
        } else {
            let appHtml = '<h4>✅ المنتجات المعروضة في المتجر</h4><div class="grid-container" style="padding:0;">';
            for (let item of approved) {
                appHtml += \`
                    <div class="card">
                        <img src="\${item.img}" onerror="this.src='https://placehold.co/400x200'">
                        <h3>\${escapeHtml(item.title)}</h3>
                        <p>\${escapeHtml(item.desc)}</p>
                        <span class="badge">\${item.category}</span>
                        <button class="btn" style="background:#ef4444; margin-top:0.5rem;" onclick="deleteItem('\${item.id}')">حذف من المتجر</button>
                    </div>
                \`;
            }
            appHtml += '</div>';
            approvedDiv.innerHTML = appHtml;
        }
    }

    function renderAll() {
        renderStore();
        renderAdmin();
    }

    // دوال الإدارة
    window.acceptItem = function(id) {
        let itemIndex = pending.findIndex(p => p.id === id);
        if (itemIndex !== -1) {
            approved.push(pending[itemIndex]);
            pending.splice(itemIndex, 1);
            save();
            renderAll();
            alert('✅ تم قبول السلعة ونشرها في المتجر');
        }
    };

    window.rejectItem = function(id) {
        if (confirm('هل تريد رفض هذه السلعة؟')) {
            pending = pending.filter(p => p.id !== id);
            save();
            renderAll();
            alert('تم رفض السلعة');
        }
    };

    window.deleteItem = function(id) {
        if (confirm('حذف هذا المنتج نهائياً من المتجر؟')) {
            approved = approved.filter(item => item.id !== id);
            save();
            renderAll();
            alert('تم الحذف');
        }
    };

    // إضافة منتج من العميل
    document.getElementById('productForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        let newItem = {
            id: Date.now() + '-' + Math.random(),
            title: document.getElementById('title').value,
            category: document.getElementById('cat').value,
            desc: document.getElementById('desc').value || 'لا يوجد وصف',
            img: document.getElementById('img').value
        };
        pending.push(newItem);
        save();
        renderAll();
        alert('تم إرسال السلعة للمسؤول للمراجعة');
        this.reset();
        toggle('clientSection');
    });

    // دوال مساعدة
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }

    window.toggle = function(id) {
        let el = document.getElementById(id);
        if (el.style.display === 'block') el.style.display = 'none';
        else el.style.display = 'block';
    };

    window.showAll = function() {
        document.getElementById('storeGrid').scrollIntoView({ behavior: 'smooth' });
    };

    // بدء التشغيل
    load();
</script>
</body>
</html>`);
});
