const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());

// مسار ملف تخزين البيانات لضمان عدم ضياع السلع
const DATA_FILE = path.join(__dirname, 'products.json');

// دالة مساعدة لقراءة البيانات من الملف بأمان
function readData() {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            // بيانات افتراضية إذا كان الملف غير موجود بعد
            const initialData = {
                approved: [
                    {
                        id: 1,
                        title: "كفرات هواتف ذكية (iPhone & Samsung)",
                        desc: "تشكيلة واسعة من الكفرات الحرارية والمقاومة للصدمات متوفرة لجميع الموديلات بجودة ووضوح عاليين.",
                        category: "قسم الكفرات",
                        img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80"
                    }
                ],
                pending: []
            };
            fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2), 'utf8');
            return initialData;
        }
        const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error("خطأ في قراءة ملف البيانات:", error);
        return { approved: [], pending: [] };
    }
}

// دالة مساعدة لحفظ البيانات في الملف
function writeData(data) {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error("خطأ في كتابة ملف البيانات:", error);
    }
}

// واجهة الموقع الكاملة والمطورة لـ Mobitech
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
        .logo { font-size: 24px; font-weight: 900; color: var(--accent-color); display: flex; align-items: center; gap: 10px; }
        .nav-links { display: flex; gap: 20px; list-style: none; }
        .nav-links a { color: var(--text-color); text-decoration: none; font-weight: 500; }
        .nav-links a:hover { color: var(--accent-color); }

        .hero { padding: 60px 5% 40px; text-align: center; background: radial-gradient(circle at top, rgba(56, 189, 248, 0.15), transparent 60%); }
        .hero h1 { font-size: 2.8rem; font-weight: 900; margin-bottom: 15px; }
        .hero h1 span { color: var(--accent-color); }
        .hero p { font-size: 1.1rem; color: var(--text-muted); max-width: 700px; margin: 0 auto 25px; }
        
        .social-buttons { display: flex; justify-content: center; gap: 15px; margin-bottom: 30px; flex-wrap: wrap; }
        .btn { padding: 12px 25px; border-radius: 30px; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 10px; border: none; cursor: pointer; transition: opacity 0.2s, transform 0.2s; }
        .btn:hover { opacity: 0.9; transform: translateY(-2px); }
        .btn-primary { background-color: var(--accent-color); color: #0b0f19; }
        .btn-success { background-color: var(--success-color); color: white; }
        .btn-danger { background-color: var(--danger-color); color: white; }
        .btn-whatsapp { background-color: #25d366; color: #fff; }
        .btn-telegram { background-color:
