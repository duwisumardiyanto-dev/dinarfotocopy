# 📦 HANDOFF DOCUMENTATION - DINAR Fotocopy Website

**Project Name**: DINAR Fotocopy & ATK Web App  
**Client**: DINAR Fotocopy (Fotocopy Rumahan)  
**Version**: 1.0.0  
**Date**: 22 Oktober 2026  
**Status**: ✅ Production Ready

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [File Structure](#file-structure)
5. [Setup & Installation](#setup--installation)
6. [Running the Website](#running-the-website)
7. [Contact Information](#contact-information)
8. [Design System](#design-system)
9. [Content Management](#content-management)
10. [Deployment Guide](#deployment-guide)
11. [Maintenance & Support](#maintenance--support)

---

## 🎯 Project Overview

Website ini dibuat untuk **DINAR Fotocopy**, sebuah usaha fotocopy rumahan yang melayani:
- Fotocopy hitam putih & print warna
- Jilid lakban & laminasi
- Penjualan ATK (Alat Tulis Kantor)

### Target Audience
- Mahasiswa
- Pelajar
- Masyarakat umum di sekitar lokasi
- Pelanggan yang butuh jasa fotocopy, print, dan ATK

### Business Goals
- Memperkenalkan usaha fotocopy rumahan DINAR
- Menampilkan katalog produk dan harga
- Memudahkan pelanggan menghitung estimasi biaya
- Menyediakan cara mudah untuk menghubungi via WhatsApp

---

## ✨ Features

### 1. **Hero Section**
- Logo DINAR dengan background biru tema web
- Tagline: "Fotocopy & ATK - Pelayanan Ramah"
- Value propositions: Hemat, Dekat, Lengkap
- Call-to-action buttons
- Grid foto produk dan layanan

### 2. **Katalog Harga**
- **Filter Kategori**: All, Fotocopy & Print, ATK, Jilid & Laminasi
- **8 Produk dengan foto dummy**:
  - Fotocopy Hitam Putih (Rp 200/lembar)
  - Print Warna Epson (Rp 1.000/lembar)
  - Jilid Lakban (Rp 3.000/eks)
  - Laminasi (Rp 3.000-4.000)
  - Pulpen (Rp 2.000-3.000)
  - Buku Tulis (Rp 3.000-8.000)
  - Kertas HVS (Rp 35.000/rim)
  - ATK Lainnya (Rp 1.000+)

### 3. **Kalkulator Harga**
- Pilih jenis layanan
- Pilih ukuran kertas (A4, F4, Qto, A3)
- Pilih jenis kertas (HVS 70/80/100 gsm, Art Paper)
- Input jumlah halaman & salinan
- Estimasi biaya real-time
- Tombol order via WhatsApp

### 4. **Upload File**
- Drag & drop area untuk upload file
- Support multiple file formats (PDF, DOC, DOCX, JPG, PNG)
- Catatan tambahan untuk instruksi khusus
- Langsung kirim ke WhatsApp

### 5. **Testimoni**
- 3 testimoni dari pelanggan (tetangga, ibu RT, mahasiswa)
- Avatar dan rating bintang

### 6. **FAQ**
- 6 pertanyaan umum dengan jawaban
- Jam operasional, cara order, ATK tersedia, pembayaran, layanan antar

### 7. **Footer**
- Logo DINAR dengan background biru
- Informasi kontak lengkap
- Link navigasi
- Copyright information

---

## 🛠 Technology Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **HTML5** | Markup structure | - |
| **Tailwind CSS** | Styling framework | via CDN |
| **Vanilla JavaScript** | Interactivity | ES6+ |
| **Google Fonts** | Typography (Plus Jakarta Sans) | - |
| **Material Symbols** | Icons | Outlined style |
| **Unsplash** | Product images | - |
| **npx serve** | Development server | Latest |

### Why Vanilla Stack?
- ✅ No build process required
- ✅ Easy to maintain for non-developers
- ✅ Fast loading time
- ✅ Can be hosted on any web server
- ✅ No dependencies to update

---

## 📁 File Structure

```
dinar.fotocopy/
├── index.html              # Main website file
├── app.js                  # Core JavaScript functionality
├── enhanced-features.js    # Additional features (calculator, upload)
├── logo-dinar.jpg          # Official DINAR logo
├── logo-dinar.svg          # SVG version (backup)
├── logo.png                # Old logo (not used)
│
├── package.json            # NPM configuration
├── start-server.bat        # Windows batch script to start server
├── start-server.ps1        # PowerShell script to start server
│
├── README.md               # Project overview
├── QUICK-START.md          # Quick start guide
├── CARA-MENJALANKAN-SERVER.md  # Server guide (Bahasa Indonesia)
├── CHANGELOG.md            # Version history
├── HANDOFF.md              # This file - handoff documentation
│
├── prd.md                  # Product Requirements Document
└── stitch_dinar_fotocopy_web_app/  # Design references
    ├── code.html
    ├── DESIGN.md
    └── screen.png
```

---

## 🚀 Setup & Installation

### Prerequisites
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **Web Browser** (Chrome, Firefox, Edge, Safari)
- **Text Editor** (VS Code, Notepad++, Sublime Text)

### Installation Steps

1. **Extract/Clone Project**
   ```bash
   # Pastikan folder sudah ada di:
   C:\ai\Project\dinar.fotocopy
   ```

2. **No Dependencies to Install**
   - Project ini menggunakan CDN untuk semua library
   - Tidak perlu menjalankan `npm install`
   - Langsung bisa dijalankan!

---

## ▶️ Running the Website

### Method 1: Using NPM Script (Recommended)
```bash
npm start
```
Website akan terbuka di: `http://localhost:3000`

### Method 2: Using Batch File (Windows)
Double-click file: `start-server.bat`

### Method 3: Manual Command
```bash
npx serve -l 3000
```

### Method 4: PowerShell
```powershell
.\start-server.ps1
```

### Stopping the Server
- Press `Ctrl + C` di terminal
- Atau tutup terminal window

---

## 📞 Contact Information

### DINAR Fotocopy
- **WhatsApp**: 0851-7691-3138 (Link: https://wa.me/6285176913138)
- **Email**: dinarapriliani9@gmail.com
- **Jam Operasional**: Senin-Minggu, 08:00-20:00 WIB
- **Jenis Usaha**: Fotocopy Rumahan dengan Printer Epson

### Owner/Admin
- **Nama**: Dinar Apriliani
- **Kontak**: Sama seperti di atas

---

## 🎨 Design System

### Color Palette

| Color Name | Hex Code | Usage |
|-----------|----------|-------|
| Primary | `#a4c9ff` | Accent text, buttons |
| Primary Container | `#0078d7` | Button backgrounds, logo bg |
| Secondary | `#7ada95` | Success states, badges |
| Secondary Container | `#00753b` | WhatsApp button |
| Tertiary | `#ffb5a0` | Highlights |
| Surface | `#0d1322` | Background |
| Surface Container | `#191f2f` | Cards |
| On Surface | `#dde2f7` | Text |
| On Surface Variant | `#c0c7d4` | Secondary text |

### Typography
- **Font Family**: Plus Jakarta Sans
- **Weights**: 400 (Regular), 600 (Semibold), 700 (Bold), 800 (Extrabold)

### Logo
- **File**: `logo-dinar.jpg`
- **Design**: DN letters dengan kaca pembesar emas
- **Background**: Gradient biru (`#0078d7` to `#005a9e`)
- **Blend Mode**: `mix-blend-mode: lighten`
- **Size**: 
  - Header: `h-16` (64px)
  - Footer: `h-14` (56px)

### Icons
- **Library**: Material Symbols Outlined
- **Style**: Outlined
- **Size**: 18-26px

---

## 📝 Content Management

### How to Update Prices

1. Open `index.html`
2. Find section with id `price-grid`
3. Update text in `<strong>` tags:

```html
<span class="flex justify-between">
  <span>Per lembar:</span> 
  <strong class="text-on-surface">Rp 200</strong>  <!-- Update here -->
</span>
```

### How to Update Contact Info

1. **WhatsApp Number**:
   - Find: `https://wa.me/6285176913138`
   - Find: `0851-7691-3138`
   - Replace with new number

2. **Email**:
   - Find: `dinarapriliani9@gmail.com`
   - Replace with new email

3. **Operating Hours**:
   - Find: `Senin-Minggu: 08.00-20.00`
   - Update as needed

### How to Add New Products

1. Copy existing product card from `index.html`
2. Update:
   - Product name
   - Price
   - Category (`data-category="fotocopy|atk|jilid"`)
   - Image URL (Unsplash or local image)
   - Description
3. Paste inside `<div id="price-grid">`

### How to Change Logo

1. Replace `logo-dinar.jpg` with new logo file
2. Keep filename `logo-dinar.jpg` OR
3. Update filename in `index.html`:
   - Find: `<img src="logo-dinar.jpg"`
   - Replace with: `<img src="new-logo.jpg"`

---

## 🌐 Deployment Guide

### Option 1: Netlify (Free, Easiest)

1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up / Log in
3. Drag & drop the entire `dinar.fotocopy` folder
4. Get free subdomain: `dinar-fotocopy.netlify.app`
5. Optional: Connect custom domain

**Deploy Command**: Not needed (static site)

### Option 2: Vercel (Free)

1. Go to [vercel.com](https://vercel.com/)
2. Sign up / Log in
3. Import project
4. Deploy automatically

### Option 3: GitHub Pages (Free)

1. Create GitHub account
2. Create repository: `dinar-fotocopy`
3. Upload all files
4. Go to Settings > Pages
5. Select branch: `main`
6. Get URL: `username.github.io/dinar-fotocopy`

### Option 4: Traditional Web Hosting

1. Get hosting (Niagahoster, Hostinger, Rumahweb, dll)
2. Upload via FTP/cPanel File Manager:
   - `index.html`
   - `app.js`
   - `enhanced-features.js`
   - `logo-dinar.jpg`
3. Access via domain

### Custom Domain Setup

If you have a custom domain (e.g., `dinarfotocopy.com`):

1. Buy domain from domain registrar
2. Point DNS to hosting:
   - **A Record**: Point to hosting IP
   - **CNAME**: Point to hosting domain
3. Wait 1-24 hours for propagation

---

## 🔧 Maintenance & Support

### Regular Maintenance Tasks

#### Monthly
- ✅ Check all links working
- ✅ Test WhatsApp button
- ✅ Verify contact information
- ✅ Update prices if changed

#### Quarterly
- ✅ Update product photos
- ✅ Add new testimonials
- ✅ Refresh FAQ based on customer questions

#### Yearly
- ✅ Design refresh (if needed)
- ✅ Add new features based on feedback

### Common Issues & Solutions

#### Issue: Website not loading
**Solution**: 
- Check if server is running (`npm start`)
- Check browser console for errors (F12)
- Clear browser cache (Ctrl+F5)

#### Issue: Images not showing
**Solution**:
- Check image file exists in folder
- Check image filename in HTML matches actual file
- Check Unsplash URLs still working

#### Issue: WhatsApp button not working
**Solution**:
- Verify number format: `6285176913138` (62 + number without 0)
- Check link: `https://wa.me/6285176913138`

#### Issue: Calculator not calculating
**Solution**:
- Check browser console (F12) for JavaScript errors
- Verify `app.js` and `enhanced-features.js` are loaded
- Clear cache and reload

### Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully supported |
| Firefox | 88+ | ✅ Fully supported |
| Safari | 14+ | ✅ Fully supported |
| Edge | 90+ | ✅ Fully supported |
| IE11 | - | ❌ Not supported |

### Performance Tips

1. **Optimize Images**:
   - Compress `logo-dinar.jpg` with TinyPNG
   - Use WebP format for better compression
   - Max file size: 200KB per image

2. **Enable Caching** (if using web hosting):
   ```apache
   # .htaccess
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType text/javascript "access plus 1 month"
   </IfModule>
   ```

3. **Use CDN** (already implemented):
   - Tailwind CSS via CDN
   - Google Fonts via CDN
   - Material Icons via CDN

---

## 📊 Analytics Setup (Optional)

### Google Analytics

Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your Google Analytics ID.

### Facebook Pixel

Add before `</head>` in `index.html`:

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

## 🔐 Security Checklist

- ✅ No sensitive data in source code
- ✅ No API keys exposed
- ✅ HTTPS recommended for production
- ✅ No SQL injection risk (static site)
- ✅ No XSS risk (no user input stored)
- ✅ Contact form sends via WhatsApp (secure)

---

## 📱 Mobile Responsiveness

Website fully responsive for:
- ✅ Desktop (1920px+)
- ✅ Laptop (1366px - 1920px)
- ✅ Tablet (768px - 1366px)
- ✅ Mobile (320px - 768px)

Test on:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)

---

## 🎓 Training Materials

### For Owner/Admin

**Basic Tasks You Can Do**:
1. Start website: Double-click `start-server.bat`
2. Update prices: Edit numbers in `index.html`
3. Change contact info: Search & replace in `index.html`
4. Add photos: Replace image URLs

**Advanced Tasks** (Need developer):
1. Add new features
2. Redesign layout
3. Add payment gateway
4. Database integration

### Video Tutorials (Recommended to Create)
1. How to start the website
2. How to update prices
3. How to change contact information
4. How to deploy to hosting

---

## 📞 Support Contact

For technical support or modifications:
- **Developer**: [Your Contact Info]
- **Project Repository**: [GitHub URL if applicable]
- **Documentation**: This file (HANDOFF.md)

---

## 📄 License & Credits

### Project License
- **Type**: Commercial project for DINAR Fotocopy
- **Usage**: Exclusive to DINAR Fotocopy business

### Third-Party Credits
- **Tailwind CSS**: MIT License
- **Google Fonts**: SIL Open Font License
- **Material Symbols**: Apache License 2.0
- **Unsplash Images**: Free to use under Unsplash License

### Image Sources
All product images sourced from [Unsplash.com](https://unsplash.com/) - free high-quality photos.

---

## ✅ Final Checklist

### Pre-Handoff
- [x] All features implemented
- [x] All pages tested
- [x] Mobile responsive verified
- [x] Contact information correct
- [x] Logo updated with blue background
- [x] Prices accurate
- [x] WhatsApp integration working
- [x] Documentation complete

### Post-Handoff
- [ ] Client training completed
- [ ] Deployed to production hosting
- [ ] Custom domain connected (if applicable)
- [ ] Analytics setup (if requested)
- [ ] Backup files saved
- [ ] Support plan established

---

## 🎉 Congratulations!

Website DINAR Fotocopy sudah siap untuk production! 

**Live at**: `http://localhost:3000` (development)  
**To Deploy**: Follow [Deployment Guide](#deployment-guide) above

Untuk pertanyaan atau support, silakan hubungi developer atau lihat dokumentasi lengkap di folder project.

---

**Document Version**: 1.0.0  
**Last Updated**: 22 Oktober 2026  
**Status**: ✅ Ready for Production

---

*Made with ❤️ for DINAR Fotocopy*
