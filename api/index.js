const express = require('express');
const app = express();

app.use(express.json());

// واجهة الموقع الكاملة والمطورة لـ Mobitech
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobitech | منصة موبيتك المتكاملة</title>
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
        
        /* تعديل أزرار التواصل بشكل عصري وثابت */
        .social-container { display: flex; justify-content: center; gap: 15px; margin-bottom: 25px; flex-wrap: wrap; }
        .btn { padding: 12px 25px; border-radius: 30px; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 10px; border: none; cursor: pointer; transition: opacity 0.2s; }
        .btn-primary { background-color: var(--accent-color); color: #0b0f19; }
        .btn-whatsapp { background-color: #25d366; color: #fff; }
        .btn-telegram { background-color: #0088cc; color: #fff; }
        .btn-success { background-color: var(--success-color); color: #fff; padding: 6px 15px; font-size: 0.9rem; border-radius: 5px; }
        .btn-danger { background-color: var(--danger-color); color: #fff; padding: 6px 15px; font-size: 0.9rem; border-radius: 5px; }
        .btn:hover { opacity: 0.9; }

        .section-title { text-align: center; font-size: 2rem; margin: 40px 0 20px; }
        .section-title::after { content: ''; display: block; width: 60px; height: 3px; background-color: var(--accent-color); margin: 10px auto 0; }
        
        .grid-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; padding: 20px 5%; }
        .card { background-color: var(--card-bg); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 20px; text-align: center; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; }
        .card img { width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px; }
        .card h3 { margin-bottom: 10px; font-size: 1.3rem; }
        .card p { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 15px; flex-grow: 1; }
        .badge { padding: 4px 10px; border-radius: 15px; font-size: 0.8rem; font-weight: bold; background-color: rgba(56, 189, 248, 0.1); color: var(--accent-color); align-self: center; }

        .form-section { background-color: var(--card-bg); max-width: 600px; margin: 40px auto; padding: 30px; border-radius: 15px; border: 1px solid rgba(56, 189, 248, 0.2); }
        .form-group { margin-bottom: 20px; display: flex; flex-direction: column; text-align: right; }
        .form-group label { margin-bottom: 8px; font-weight: bold; color: var(--text-color); }
        .form-group input, .form-group textarea, .form-group select { padding: 12px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); background-color: var(--bg-color); color: #fff; font-size: 1rem; width: 100%; font-family: inherit; }
        .form-group input:focus, .form-group textarea:focus, .form-group select:focus { border-color: var(--accent-color); outline: none; }
        
        .admin-box { border: 2px dashed rgba(239, 68, 68, 0.3); padding: 20px; border-radius: 15px; background-color: rgba(21, 28, 44, 0.5); margin: 40px auto; max-width: 1200px; }
        .admin-btns { display: flex; gap: 10px; justify-content: center; margin-top: 15px; }
    </style>
</
