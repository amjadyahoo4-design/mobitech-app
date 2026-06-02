const express = require('express');
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// الأكواد الأساسية لتشغيل السيرفر وتفادي أخطاء المسارات في Vercel
let serverProducts = [];
let serverUsers = [];

app.get('/api/products', (req, res) => { res.json(serverProducts); });
app.post('/api/products', (req, res) => {
    const { title, category, desc, img, price } = req.body;
    const newItem = {
        id: 'prod-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
        title, category, desc, img, price: price || "0", status: 'pending'
    };
    serverProducts.push(newItem);
    res.status(201).json(newItem);
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

app.get('/api/users', (req, res) => { res.json(serverUsers); });
app.post('/api/users/register', (req, res) => {
    const { name, phone, role } = req.body;
    const existingUser = serverUsers.find(u => u.phone === phone);
    if (existingUser) {
        return res.json({ success: true, user: existingUser });
    }
    const newUser = { id: 'usr-' + Date.now(), name, phone, role, status: 'pending' };
    serverUsers.push(newUser);
    res.json({ success: true, user: newUser });
});

module.exports = app;
