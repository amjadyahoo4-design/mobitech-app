const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// قاعدة بيانات مؤقتة
let products = [
    { id: 1, title: "آيفون 15 برو", price: 1000, desc: "مستعمل بحالة الزيرو", location: "القاهرة" },
    { id: 2, title: "لابتوب ديل", price: 800, desc: "كور i5 رمات 16", location: "الرياض" }
];

// واجهة الموقع (HTML + CSS) داخل الكود مباشرة لتبسيط الرفع
app.get('/', (req, res) => {
    let productCards = products.map(p => `
        <div style="background: white; padding: 15px; margin-bottom: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="margin: 0 0 10px 0; color: #333;">${p.title}</h3>
            <p style="margin: 0 0 10px 0; color: #666;">${p.desc}</p>
            <div style="display: flex; justify-content: space-between; font-weight: bold;">
                <span style="color: #28a745;">${p.price} $</span>
                <span style="color: #007bff;">📍 ${p.location}</span>
            </div>
        </div>
    `).join('');

    res.send(`
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mobitech Store</title>
        </head>
        <body style="font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 15px;">
            <div style="background: #007bff; color: white; text-align: center; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <h2>تطبيق Mobitech للإلكترونيات</h2>
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <h3>أضف إعلانك الجديد</h3>
                <form action="/add-product" method="POST">
                    <input type="text" name="title" placeholder="عنوان الإعلان" required style="width:100%; padding:8px; margin-bottom:10px; box-sizing:border-box;"><br>
                    <input type="number" name="price" placeholder="السعر" required style="width:100%; padding:8px; margin-bottom:10px; box-sizing:border-box;"><br>
                    <input type="text" name="location" placeholder="المدينة" required style="width:100%; padding:8px; margin-bottom:10px; box-sizing:border-box;"><br>
                    <textarea name="desc" placeholder="تفاصيل المنتج" style="width:100%; padding:8px; margin-bottom:10px; box-sizing:border-box;"></textarea><br>
                    <button type="submit" style="background:#28a745; color:white; border:none; padding:10px; width:100%; border-radius:5px; font-size:16px; cursor:pointer;">نشر الإعلان الفوري</button>
                </form>
            </div>
            
            <h3>الإعلانات الحالية:</h3>
            ${productCards}
        </body>
        </html>
    `);
});

// استقبال الإعلانات الجديدة وإعادة التوجيه للصفحة الرئيسية
app.post('/add-product', (req, res) => {
    const { title, price, location, desc } = req.body;
    products.unshift({ id: products.length + 1, title, price, location, desc });
    res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
