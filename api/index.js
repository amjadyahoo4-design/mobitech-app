const express = require('express');
const app = express();

// إعداد السيرفر لاستقبال البيانات الكبيرة والصور بـ Base64
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// 1. قاعدة البيانات المؤقتة للمنتجات
let serverProducts = [
    { 
        id: "d1", 
        title: "شاشات بديلة مفحوصة (OLED & LCD)", 
        category: "شاشات", 
        price: "45", 
        desc: "شاشات وبطاريات عالية الجودة مع الضمان الكامل للأداء واللمس المتعدد.", 
        img: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=500&q=80", 
        status: "approved" 
    },
    { 
        id: "d2", 
        title: "شاحن سريع أصلي بقوة 45 واط", 
        category: "أكسسوارات", 
        price: "15", 
        desc: "شواحن وكابلات معتمدة تدعم الشحن السريع الآمن لكافة الهواتف.", 
        img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80", 
        status: "approved" 
    }
];

// 2. قاعدة البيانات المؤقتة للمستخدمين الجدد (طلبات الحسابات)
let serverUsers = [
    { id: "u1", name: "أحمد العلي", phone: "96171000000", role: "تاجر", status: "approved" },
    { id: "u2", name: "محمد الحسين", phone: "96176000000", role: "زبون", status: "pending" }
];

// [مسارات المنتجات]
app.get('/api/products', (req, res) => { res.json(serverProducts); });

app.post('/api/products', (req, res) => {
    const { title, category, desc, img, price } = req.body;
    const newItem = {
        id: Date.now() + '-' + Math.random().toString(36).substr(2, 4),
        title, category, desc, img, price: price || "0", status: 'pending'
    };
    serverProducts.push(newItem);
    res.status(201).json({ success: true });
});

app.post('/api/products/action', (req, res) => {
    const { id, action } = req.body;
    if (action === 'accept') {
        const item = serverProducts.find(i => i.id === id);
        if (item) item.status = 'approved';
    } else if (action === 'reject' || action === 'delete') {
        serverProducts = serverProducts.filter(i => i.id !== id);
    }
    res.json({ success: true });
});


// [مسارات المستخدمين والحسابات الجديدة]

// مسار جلب قائمة المستخدمين (للمسؤول فقط)
app.get('/api/users', (req, res) => {
    res.json(serverUsers);
});

// مسار تسجيل حساب جديد (زبون أو تاجر بانتظار الموافقة)
app.post('/api/users/register', (req, res) => {
    const { name, phone, role } = req.body;
    
    // التحقق إذا كان الرقم مسجلاً من قبل
    const existingUser = serverUsers.find(u => u.phone === phone);
    if (existingUser) {
        return res.json({ success: false, message: "رقم الهاتف هذا مسجل مسبقاً للطلب!", status: existingUser.status, role: existingUser.role });
    }

    const newUser = {
        id: 'usr-' + Date.now(),
        name,
        phone,
        role, // زبون أو تاجر
        status: 'pending' // معلق بانتظار موافقتك
    };
    serverUsers.push(newUser);
    res.json({ success: true, message: "تم إرسال طلبك بنجاح!" });
});

// مسار فحص حالة الحساب الحالي للمستخدم عند دخوله المتصفح
app.post('/api/users/check', (req, res) => {
    const { phone } = req.body;
    const user = serverUsers.find(u => u.phone === phone);
    if (user) {
        res.json({ exists: true, status: user.status, role: user.role, name: user.name });
    } else {
        res.json({ exists: false });
    }
});

// مسار إجراءات المسؤول على الحسابات (قبول أو رفض)
app.post('/api/users/action', (req, res) => {
    const { id, action } = req.body;
    if (action === 'accept') {
        const user = serverUsers.find(u => u.id === id);
        if (user) user.status = 'approved';
    } else if (action === 'reject' || action === 'delete') {
        serverUsers = serverUsers.filter(u => u.id !== id);
    }
    res.json({ success: true });
});

module.exports = app;
