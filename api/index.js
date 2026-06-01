// api/index.js
const { createClient } = require('@supabase/supabase-js'); 
const express = require('express');
const cors = require('cors');

const app = express();

// تفعيل CORS لضمان اتصال التطبيق والموقع بدون مشاكل صلاحيات
app.use(cors());
app.use(express.json());

// إعداد بيئة الاتصال بـ Supabase 
// تأكد من إضافة هذه المتغيرات في إعدادات (Environment Variables) على Vercel
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 1. نقطة فحص تشغيل السيرفر
app.get('/api', (req, res) => {
    res.status(200).json({ 
        success: true, 
        message: "API تطبيق Mobitech يعمل بنجاح ونظامي 100%" 
    });
});

// 2. جلب الشاشات وقطع الغيار (جداول Shashatkom / Products)
// تم ضبط الـ RLS لها لتسمح بالقراءة للجميع بنجاح
app.get('/api/products', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('products') // تأكد من اسم الجدول لديك (مثلاً products أو screens)
            .select('*');

        if (error) throw error;

        res.status(200).json({
            success: true,
            count: data.length,
            data: data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "فشل في جلب البيانات من قاعدة البيانات",
            error: error.message
        });
    }
});

// 3. إضافة طلب صيانة جديد أو شراء
app.post('/api/orders', async (req, res) => {
    const { product_id, client_name, client_phone, details } = req.body;

    if (!client_name || !client_phone) {
        return res.status(400).json({
            success: false,
            message: "يرجى تقديم اسم العميل ورقم الهاتف"
        });
    }

    try {
        const { data, error } = await supabase
            .from('orders')
            .insert([{ product_id, client_name, client_phone, details, status: 'pending' }])
            .select();

        if (error) throw error;

        res.status(201).json({
            success: true,
            message: "تم تسجيل طلبك بنجاح، سيتواصل معك الفني قريباً",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "حدث خطأ أثناء إرسال الطلب",
            error: error.message
        });
    }
});

// تصدير التطبيق ليعمل كـ Serverless Function على Vercel
module.exports = app;
