# 📝 Changelog - DINAR Fotocopy Web App

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-10-22 - ENHANCED ✨

### ✅ Added (Polish Features)
- **Paket Bundling Promo** - 4 paket hemat dengan harga spesial
  - Paket Skripsi Kilat (Rp 149.000)
  - Paket Diktat & Modul (Rp 150/hal)
  - Paket UMKM Brosur (Rp 265.000)
  - Paket Event Kampus (Rp 225.000)
  
- **PDF Preview** - Pratinjau file PDF langsung di browser dengan iframe
  
- **Order Tracking System**
  - Lacak pesanan dengan kode + nomor WhatsApp
  - Floating button di pojok kanan bawah
  - Modal tracking interaktif
  
- **Order History**
  - Riwayat semua pesanan tersimpan di localStorage
  - Button history di header
  - Fitur "Pesan Ulang" (placeholder)
  - Opsi hapus semua riwayat
  
- **Admin Panel** (Simple)
  - Login dengan password: `admin123` atau `dinar2026`
  - Dashboard dengan statistik (total pesanan, revenue, hari ini)
  - Daftar pesanan lengkap dengan detail
  - Update status pesanan (Diterima → Selesai)
  - Shortcut: Ctrl+Shift+A
  
- **UI/UX Enhancements**
  - Testimonial section dengan 3 ulasan pelanggan
  - FAQ section dengan 6 pertanyaan umum
  - Smooth animations (fade-in, hover effects)
  - Preview button untuk file PDF
  - Better visual feedback
  
- **New Files**
  - `enhanced-features.js` - File terpisah untuk fitur tambahan
  - `README.md` - Dokumentasi lengkap
  - `CHANGELOG.md` - Tracking perubahan

### 🔧 Improved
- File upload: Tambah button preview untuk PDF
- Order summary: Lebih detail dan informatif
- Navigation: Smooth scroll ke semua anchor links
- Error handling: Pesan error lebih jelas
- Code organization: Pisah core & enhanced features

### 🎨 Design
- CSS animations untuk fade-in effects
- Hover lift effects untuk cards
- Better spacing dan layout
- Consistent color usage
- Enhanced typography hierarchy

---

## [1.0.0] - 2026-10-22 - INITIAL RELEASE 🚀

### ✅ Fase 1 - Core Features

#### Daftar Harga Cetak
- Katalog 8+ layanan lengkap
- Filter kategori interaktif (Semua, Dokumen, Warna, Finishing)
- Harga bertingkat volume
- Button "Pilih Layanan" ke kalkulator

#### Kalkulator Estimasi Biaya
- Input: Layanan, ukuran kertas, jenis kertas, halaman, salinan
- Checkbox: Duplex (bolak-balik)
- Real-time calculation
- Diskon otomatis untuk volume >50 dan >100 lembar
- Display detail breakdown

#### Upload File Cetak
- Drag & drop zone
- Multi-file upload (max 10 files)
- Validasi format (PDF, DOCX, DOC, JPG, PNG)
- Validasi ukuran (max 25MB per file)
- Estimasi halaman otomatis
- File list dengan preview info
- Delete file individual

#### Opsi Cetak
- Warna: Hitam Putih / Full Color
- Ukuran kertas: A4, F4, Qto, A3
- Jenis kertas: HVS 70/80/100gsm, Art Paper 150gsm
- Jumlah salinan
- Duplex (bolak-balik)
- Jilid: Lakban, Hard Cover, Spiral
- Catatan khusus (textarea)

#### Order System
- Form kontak: Nama + WhatsApp
- Generate kode pesanan unik (DNR-YYYY-XXXXX)
- Estimasi biaya real-time
- Modal success dengan kode pesanan
- Link langsung ke WhatsApp
- Save ke localStorage

#### UI/UX
- Metro Design System
- Dark theme with primary/secondary/tertiary colors
- Plus Jakarta Sans typography
- Material Symbols icons
- Fully responsive (mobile-first)
- Smooth scrolling
- Toast notifications
- Loading states

### 📂 Files Structure
```
├── index.html       # Main page
├── app.js          # Core JavaScript
├── prd.md          # Product Requirements
└── stitch_dinar_fotocopy_web_app/
    ├── code.html    # Design reference
    ├── DESIGN.md    # Design system
    └── screen.png   # Screenshot
```

### 🎨 Design System
- **Colors**: Primary (blue), Secondary (green), Tertiary (coral)
- **Typography**: Plus Jakarta Sans
- **Layout**: Metro tiles, sharp corners
- **Grid**: Responsive 2/4/12 columns
- **Icons**: Material Symbols Outlined

### ⚡ Tech Stack
- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript
- LocalStorage
- No backend (local testing)

---

## [Planned] - Future Versions

### [2.0.0] - Fase 2 (TBD)
- [ ] Chat system dengan toko
- [ ] Real-time order status
- [ ] WebSocket integration
- [ ] Backend setup (Supabase)
- [ ] File upload to cloud storage
- [ ] Web push notifications

### [3.0.0] - Fase 3 (TBD)
- [ ] User registration & login
- [ ] Profile management
- [ ] Saved preferences
- [ ] Permanent order history
- [ ] Email verification

### [4.0.0] - Fase 4 (TBD)
- [ ] Payment gateway (Midtrans)
- [ ] Email notifications
- [ ] WhatsApp Business API
- [ ] Google Maps integration
- [ ] Analytics dashboard

---

## Version Naming Convention

- **Major** (X.0.0): New phase implementation
- **Minor** (1.X.0): New features, enhancements
- **Patch** (1.0.X): Bug fixes, small improvements

## Emoji Legend

- ✅ Added
- 🔧 Improved
- 🐛 Fixed
- 🚀 Released
- 💥 Breaking Change
- 🎨 Design
- ⚡ Performance
- 📝 Documentation

---

**Latest Version**: 1.1.0 Enhanced ✨
**Status**: Ready for local testing
**Next Milestone**: Backend integration (Supabase)
