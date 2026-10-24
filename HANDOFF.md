# 📦 HANDOFF DOCUMENTATION - DINAR Fotocopy Website

**Project Name**: DINAR Fotocopy & ATK Web App  
**Client**: DINAR Fotocopy (Fotocopy Rumahan)  
**Version**: 2.0.0  
**Date**: 22 Oktober 2026  
**Status**: ✅ Production Ready  
**Repository**: https://github.com/duwisumardiyanto-dev/dinarfotocopy

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Version History](#version-history)
3. [Features](#features)
4. [Technology Stack](#technology-stack)
4. [File Structure](#file-structure)
5. [Setup & Installation](#setup--installation)
6. [Running the Website](#running-the-website)
7. [Contact Information](#contact-information)
8. [Design System](#design-system)
9. [Content Management](#content-management)
10. [Deployment Guide](#deployment-guide)
11. [Maintenance & Support](#maintenance--support)

---

## 📅 Version History

### Version 2.0.0 (22 Oktober 2026) - Current
**Major Updates:**
- ✨ **Fullscreen Edge-to-Edge Layout** - Semua section sekarang fullwidth tanpa jarak kanan-kiri untuk tampilan lebih megah
- 🎬 **Hero Animated Background** - Background perpustakaan dengan efek zoom-out 20 detik, opacity 60-70%
- 🔍 **Image Lightbox** - Klik foto produk untuk melihat detail lebih besar (zoom view)
- 🗺️ **Google Maps Integration** - Embedded map di hero section dengan koordinat toko
- ⏰ **24 Jam Operation** - Updated semua informasi jam buka menjadi non-stop
- 🎨 **Logo Enhancement** - Sharp rendering, seamless blue background, increased size
- 💰 **Updated Pricing** - Semua harga diperbarui sesuai real pricing:
  - Fotocopy: Rp 200 → Rp 500
  - Print: Disesuaikan dengan kertas (HVS/Foto)
  - Jilid: Kecil Rp 3.500, Besar Rp 4.000
- 🛍️ **Custom Products** - Added Buku Custom, Kalender Custom, Gantungan Kunci Custom
- 📦 **Product Updates**:
  - Laminasi → Cetak Foto
  - Kertas HVS → Kalender Custom
  - ATK Lainnya → Gantungan Kunci Custom
- 🧮 **Calculator Enhancement** - Duplex pricing fixed (x2 bukan hemat), jilid options updated
- 📤 **Upload Form Update** - Simplified options (A4/F4, HVS/Foto only)
- 🐙 **GitHub Repository** - Project uploaded to https://github.com/duwisumardiyanto-dev/dinarfotocopy

### Version 1.0.0 (Initial Release)
**Initial Features:**
- Basic hero section
- Product catalog with 8 items
- Price calculator
- Upload file form
- Testimonials & FAQ
- Contact footer
- Metro Material Design dark theme

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

### 1. **Hero Section with Animated Background**
- **Fullscreen edge-to-edge layout** - Background memenuhi seluruh lebar layar
- **Animated zoom-out effect** - Background perpustakaan dengan efek zoom 20 detik
- **Opacity optimized** - 60-70% opacity untuk gambar lebih terlihat
- Logo DINAR dengan background biru seamless
- Tagline: "Fotocopy & ATK - Pelayanan Ramah"
- Value propositions: Hemat, Dekat, Lengkap
- **Google Maps Integration** - Embedded map dengan koordinat toko (-6.1438080, 106.7409066)
- Call-to-action buttons
- **24 Jam Operation** - Informasi buka non-stop
- Grid foto produk dan layanan dengan cards biru tema

### 2. **Katalog Harga dengan Image Lightbox**
- **Filter Kategori**: All, Fotocopy & Print, ATK, Custom
- **8 Produk dengan foto real**:
  1. **Fotocopy Hitam Putih** - Rp 500/lembar (A4/F4)
  2. **Print Warna** - HVS A4 Rp 2.000, F4 Rp 2.500, Kertas Foto Rp 8.000
  3. **Jilid Lakban** - Kecil Rp 3.500, Besar Rp 4.000
  4. **Cetak Foto** - Pas foto (2x3, 3x4, 4x6) Rp 5.000, 10R Rp 9.000 (free ganti background)
  5. **Pulpen & Pensil** - Gel Rp 3.000, Pencil Rp 2.000
  6. **Buku Tulis Custom** - 30 lembar Rp 8.000
  7. **Kalender Custom** - Kulkas Rp 20.000, Duduk Rp 25.000 (glossy/doff)
  8. **Gantungan Kunci Custom** - Rp 5.000
- **Image Lightbox** - Klik foto produk untuk zoom view
- **Hover effects** - Scale dan shadow pada cards

### 3. **Kalkulator Harga Real-time**
- Pilih jenis layanan (Fotocopy B/W, Print Warna)
- Pilih ukuran kertas (A4, F4) - disederhanakan
- Pilih jenis kertas (HVS, Kertas Foto) - disederhanakan
- Input jumlah halaman & salinan
- **Opsi Duplex (Bolak-balik)** - Harga x2 (bukan hemat kertas)
- **Opsi Jilid** - Lakban Kecil Rp 3.500, Besar Rp 4.000
- Estimasi biaya real-time dengan breakdown detail
- Tombol order via WhatsApp dengan data pre-filled

### 4. **Upload File Form**
- Drag & drop area untuk upload file
- Support multiple file formats (PDF, DOC, DOCX, JPG, PNG)
- **Opsi cetak disesuaikan**: A4/F4, HVS/Kertas Foto, Bolak-balik (x2)
- **Opsi jilid**: Lakban Kecil/Besar
- Catatan tambahan untuk instruksi khusus
- Langsung kirim ke WhatsApp dengan attachment info

### 5. **Testimoni**
- 3 testimoni dari pelanggan (tetangga, ibu RT, mahasiswa)
- Avatar dan rating bintang

### 6. **FAQ**
- 6 pertanyaan umum dengan jawaban
- **Jam operasional: 24 Jam Non-Stop**
- Cara order, ATK tersedia, pembayaran, layanan antar
- Custom products info (Buku, Kalender, Gantungan Kunci)

### 7. **Footer Fullscreen**
- Logo DINAR dengan background biru seamless (h-16, sharp rendering)
- Informasi kontak lengkap (WhatsApp, Email)
- **Alamat dengan Google Maps link**
- Link navigasi
- **Buka 24 Jam info**
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
- ✅ **Fullscreen edge-to-edge layout** for modern look
- ✅ **Animated hero background** for visual appeal

---

## 📁 File Structure

```
dinar.fotocopy/
├── index.html              # Main website file (fullscreen layout)
├── app.js                  # Core JavaScript functionality
├── enhanced-features.js    # Additional features (calculator, upload, lightbox)
├── logo-dinar.jpg          # Official DINAR logo (with blue gradient bg)
├── logo-dinar.svg          # SVG version (backup)
├── logo.png                # Old logo (not used)
├── hero-bg.jpg             # Hero section animated background
│
├── foto-fotocopy-bw.jpg    # Product: Fotocopy Hitam Putih
├── foto-print-warna.jpg    # Product: Print Warna
├── foto-jilid-lakban.jpg   # Product: Jilid Lakban
├── foto-cetak-foto.jpg     # Product: Cetak Foto
├── foto-pulpen.jpg         # Product: Pulpen & Pensil
├── foto-buku-custom.jpg    # Product: Buku Tulis Custom
├── foto-kalender-custom.jpg # Product: Kalender Custom
├── foto-gantungan-kunci.jpg # Product: Gantungan Kunci Custom
│
├── package.json            # NPM configuration
├── start-server.bat        # Windows batch script to start server
├── start-server.ps1        # PowerShell script to start server
│
├── .gitignore              # Git ignore file
├── README.md               # Project overview (GitHub README)
├── QUICK-START.md          # Quick start guide
├── CARA-MENJALANKAN-SERVER.md  # Server guide (Bahasa Indonesia)
├── CARA-UPDATE-MAPS.md     # Google Maps update guide
├── CARA-UPLOAD-GITHUB.md   # GitHub upload guide
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
- **Lokasi**: Jakarta Barat (Koordinat: -6.1438080, 106.7409066)
- **Jam Operasional**: **24 Jam Non-Stop Setiap Hari**
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
- **Background**: Gradient biru seamless (matches website theme)
- **CSS Class**: `logo-sharp` for crisp rendering
- **Rendering**: `image-rendering: crisp-edges`, contrast & brightness enhanced
- **Size**: 
  - Header: `h-20` (80px)
  - Footer: `h-16` (64px)

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

### Option 3: GitHub Pages (Free) - **CURRENT DEPLOYMENT**

**Repository**: https://github.com/duwisumardiyanto-dev/dinarfotocopy

1. ✅ Repository already created
2. ✅ Files already pushed to GitHub
3. Go to Settings > Pages
4. Select branch: `main`
5. Save
6. Get URL: `duwisumardiyanto-dev.github.io/dinarfotocopy`

**Current Status**: Repository live, ready to enable GitHub Pages

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

**GitHub Repository**: https://github.com/duwisumardiyanto-dev/dinarfotocopy  
**Owner**: duwisumardiyanto-dev  
**Last Updated**: 22 Oktober 2026

For technical support or modifications:
- **Repository Issues**: Create issue on GitHub
- **DINAR Fotocopy Contact**: 0851-7691-3138 / dinarapriliani9@gmail.com
- **Documentation**: This file (HANDOFF.md)

### Git Configuration (Important)
Project ini menggunakan **local git config** untuk akun `duwisumardiyanto`:
```bash
# Cek config project ini
git config user.name    # duwisumardiyanto
git config user.email   # duwisumardiyanto@gmail.com

# Config global tetap: Birud / duwikachek@gmail.com
```

**Untuk update & push**:
```bash
git add .
git commit -m "Update: deskripsi"
git push
```

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
- **Product Images**: Real photos uploaded by client
  - `foto-fotocopy-bw.jpg` (Fotocopy hitam putih)
  - `foto-print-warna.jpg` (Print warna)
  - `foto-jilid-lakban.jpg` (Jilid lakban)
  - `foto-cetak-foto.jpg` (Cetak foto)
  - `foto-pulpen.jpg` (Pulpen & pensil)
  - `foto-buku-custom.jpg` (Buku tulis custom)
  - `foto-kalender-custom.jpg` (Kalender custom)
  - `foto-gantungan-kunci.jpg` (Gantungan kunci custom)
- **Hero Background**: `hero-bg.jpg` (Library/books image from Unsplash)
- **Other Images**: Sourced from [Unsplash.com](https://unsplash.com/) - free high-quality photos

---

## ✅ Final Checklist

### Pre-Handoff
- [x] All features implemented
- [x] All pages tested
- [x] Mobile responsive verified
- [x] Contact information correct
- [x] Logo updated with blue seamless background
- [x] Prices accurate (updated to real pricing)
- [x] WhatsApp integration working
- [x] Documentation complete
- [x] **Fullscreen layout implemented**
- [x] **Hero animated background added**
- [x] **Image lightbox working**
- [x] **Google Maps integrated**
- [x] **24-hour operation info updated**
- [x] **Custom products added** (Buku, Kalender, Gantungan Kunci)
- [x] **GitHub repository created and pushed**

### Post-Handoff
- [ ] Client training completed
- [ ] Deployed to GitHub Pages (https://duwisumardiyanto-dev.github.io/dinarfotocopy)
- [ ] Custom domain connected (if applicable)
- [ ] Analytics setup (if requested)
- [ ] Backup files saved
- [ ] Support plan established
- [ ] **Real product photos replaced** (currently using placeholder photos)

---

## 🎉 Congratulations!

Website DINAR Fotocopy sudah siap untuk production! 

**Live at**: `http://localhost:3000` (development)  
**GitHub**: https://github.com/duwisumardiyanto-dev/dinarfotocopy  
**To Deploy**: Enable GitHub Pages di repository settings

Untuk pertanyaan atau support, silakan hubungi via GitHub Issues atau kontak DINAR Fotocopy.

---

**Document Version**: 2.0.0  
**Last Updated**: 22 Oktober 2026  
**Status**: ✅ Ready for Production  
**GitHub**: https://github.com/duwisumardiyanto-dev/dinarfotocopy

---

*Made with ❤️ for DINAR Fotocopy*
