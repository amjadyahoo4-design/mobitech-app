const express = require('express');
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

let serverProducts = [
    { id: "d1", title: "شاشات بديلة مفحوصة (OLED & LCD)", category: "شاشات", desc: "شاشات وبطاريات عالية الجودة مع الضمان الكامل للأداء واللمس المتعدد.", img: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=500&q=80", status: "approved" },
    { id: "d2", title: "شاحن سريع أصلي بقوة 45 واط", category: "أكسسوارات", desc: "شواحن وكابلات معتمدة تدعم الشحن السريع الآمن لكافة الهواتف.", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80", status: "approved" },
    { id: "d3", title: "iPhone 13 Pro Max مستعمل - كفالة شهرين", category: "هواتف مستعملة", desc: "جهاز نظيف بنسبة 90% مع العلبة وكافة الملحقات الأصلية بسعر مميز.", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80", status: "approved" }
];

app.get('/api/products', (req, res) => {
    res.json(serverProducts);
});

app.post('/api/products', (req, res) => {
    const { title, category, desc, img } = req.body;
    const newItem = {
        id: Date.now() + '-' + Math.random().toString(36).substr(2, 4),
        title, category, desc, img,
        status: 'pending'
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

module.exports = app;
