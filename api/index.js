const express = require('express');
const app = express();

// إعداد السيرفر لاستقبال البيانات الكبيرة والصور بـ Base64
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// قاعدة البيانات المؤقتة للمنتجات مع إضافة حقل السعر الافتراضي لكل منتج ($)
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
    },
    { 
        id: "d3", 
        title: "iPhone 13 Pro Max مستعمل - كفالة شهرين", 
        category: "هواتف مستعملة", 
        price: "650", 
        desc: "جهاز نظيف بنسبة 90% مع العلبة وكافة الملحقات الأصلية بسعر مميز.", 
        img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80", 
        status: "approved" 
    }
];

// مسار جلب جميع المنتجات للواجهة
app.get('/api/products', (req, res) => {
    res.json(serverProducts);
});

// مسار استقبال المنتجات المضافة من الزبائن مع حفظ السعر
app.post('/api/products', (req, res) => {
    const { title, category, desc, img, price } = req.body;
    const newItem = {
        id: Date.now() + '-' + Math.random().toString(36).substr(2, 4),
        title, 
        category, 
        desc, 
        img,
        price: price || "0", 
        status: 'pending' // تنتظر موافقة المسؤول
    };
    serverProducts.push(newItem);
    res.status(201).json({ success: true });
});

// مسار تحكم الإدارة (قبول، رفض، أو حذف منتج)
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

module.exports = app;
