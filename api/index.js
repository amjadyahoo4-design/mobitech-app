const express = require('express');
const app = express();

app.use(express.json());

// مصفوفة المنتجات الأساسية مخزنة الآن على السيرفر لضمان ظهورها لجميع الزوار دائماً
let serverProducts = [
    { id: "d1", title: "شاشات بديلة مفحوصة (OLED & LCD)", category: "شاشات", desc: "شاشات وبطاريات عالية الجودة مع الضمان الكامل للأداء واللمس المتعدد.", img: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=500&q=80", status: "approved" },
    { id: "d2", title: "سبيكر مضخم صوت نقي للأجهزة الذكية", category: "سبيكرات", desc: "سبيكرات صيانة داخلية وخارجية أصلية لجميع فئات الهواتف المحمولة.", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80", status: "approved" },
    { id: "d3", title: "كفرات حماية حرارية ومقاومة للصدمات", category: "كفرات", desc: "تشكيلة كفرات متكاملة ذات مظهر عصري أنيق وحماية قصوى لهاتفك.", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80", status: "approved" }
];

// واجهة الموقع الكاملة والمتكاملة لمنصة Mobitech المحدثة
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobitech | المنصة الذكية المتكاملة (نسخة محسنة)</title>
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
        .logo { font-size: 24px; font-weight: 900; color: var(--accent-color); display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .nav-links { display: flex; gap: 20px; list-style: none; }
        .nav-links a { color: var(--text-color); text-decoration: none; font-weight: 500; cursor: pointer; }
        .nav-links a:hover { color: var(--accent-color); }

        .hero { padding: 50px 5% 30px; text-align: center; background: radial-gradient(circle at top, rgba(56, 189, 248, 0.15), transparent 60%); }
        .hero h1 { font-size: 2.5rem; font-weight: 900; margin-bottom: 10px; }
        .hero h1 span { color: var(--accent-color); }
        .hero p { font-size: 1.1rem; color: var(--text-muted); max-width: 700px; margin: 0 auto 20px; }
        
        .interactive-modes { display: flex; justify-content: center; gap: 15px; margin-bottom: 25px; background: rgba(255,255,255,0.02); padding: 15px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); max-width: 500px; margin: 0 auto 25px; }
        .mode-title { width: 100%; text-align: center; font-size: 0.95rem; color: var(--accent-color); margin-bottom: 10px; display: block; }

        .btn { padding: 12px 25px; border-radius: 30px; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 10px; border: none; cursor: pointer; transition: opacity 0.2s, transform 0.2s; font-size: 1rem; }
        .btn:hover { opacity: 0.9; transform: translateY(-2px); }
        
        .btn-client { background-color: #1e293b; color: #fff; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 10px 20px; }
        .btn-admin { background-color: #f59e0b; color: #0b0f19; border-radius: 8px; padding: 10px 20px; }
        
        .social-buttons { display: flex; justify-content: center; gap: 15px; margin-bottom: 35px; flex-wrap: wrap; }
        .btn-whatsapp { background-color: #25d366; color: #fff; border-radius: 10px; width: 45%; max-width: 220px; justify-content: center; }
        .btn-telegram { background-color: #0284c7; color: #fff; border-radius: 10px; width: 45%; max-width: 220px; justify-content: center; }

        .categories-title { font-size: 1.3rem; margin: 30px 0 15px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 10px; }
        .categories-bar { display: flex; justify-content: center; gap: 10px; margin-bottom: 30px; flex-wrap: wrap; padding: 0 5%; }
        .cat-btn { padding: 8px 18px; border-radius: 25px; border: none; background: #1e293b; color: var(--text-color); cursor: pointer; font-weight: bold; font-size: 0.9rem; display: flex; align-items: center; gap: 5px; transition: background 0.2s; }
        .cat-btn.active { background: #2563eb; color: #fff; box-shadow: 0 4px 12px rgba(37,99,235,0.3); }

        .search-bar { display: flex; justify-content: center; margin: 20px auto 10px; max-width: 500px; padding: 0 5%; }
        .search-bar input { width: 100%; padding: 12px 20px; border-radius: 40px; border: 1px solid rgba(255,255,255,0.1); background: #1e293b; color: white; font-size: 1rem; }

        .stats-row { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin: 10px auto 20px; }
        .stat-card { background: #151c2c; padding: 6px 15px; border-radius: 30px; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.05); }

        .grid-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; padding: 20px 5%; }
        .card { background-color: var(--card-bg); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 15px; padding: 20px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; position: relative; }
        .card img { width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px; background: #0f1420; }
        .card h3 { margin-bottom: 10px; font-size: 1.25rem; color: #fff; }
        .card p { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 15px; flex-grow: 1; }
        .badge { padding: 4px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: bold; background-color: rgba(56, 189, 248, 0.1); color: var(--accent-color); align-self: center; }

        .dynamic-section { background-color: var(--card-bg); max-width: 650px; margin: 30px auto; padding: 25px; border-radius: 15px; border: 1px solid rgba(56, 189, 248, 0.2); display: none; }
        .form-group { margin-bottom: 18px; display: flex; flex-direction: column; text-align: right; }
        .form-group label { margin-bottom: 8px; font-weight: bold; color: var(--text-color); font-size: 0.95rem; }
        .form-group input, .form-group textarea, .form-group select { padding: 12px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); background-color: var(--bg-color); color: #fff; font-size: 1rem; width: 100%; }
        
        .btn-submit { background-color: var(--accent-color); color: #0b0f19; font-weight: bold; width: 100%; justify-content: center; border-radius: 8px; padding: 12px; margin-top: 10px; }
        .btn-success { background-color: var(--success-color); color: white; padding: 6px 15px; font-size: 0.85rem; border-radius: 5px; border: none; cursor: pointer; }
        .btn-danger { background-color: var(--danger-color); color: white; padding: 6px 15px; font-size: 0.85rem; border-radius: 5px; border: none; cursor: pointer; }
        .admin-actions { display: flex; gap: 10px; justify-content: center; margin-top: 12px; flex-wrap: wrap; }

        .frp-box { background: linear-gradient(135deg, #1e1b4b, #151c2c); border: 1px solid rgba(139, 92, 246, 0.3); padding: 20px; border-radius: 12px; text-align: center; }
        .frp-status { display: inline-block; padding: 5px 15px; background: rgba(16, 185, 129, 0.2); color: #34d399; border-radius: 20px; font-weight: bold; margin-bottom: 15px; font-size: 0.9rem; }

        .toast-notify { position: fixed; bottom
