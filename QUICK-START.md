# 🚀 Quick Start Guide - DINAR Fotocopy Web App

Panduan cepat untuk menggunakan dan menguji semua fitur web app.

---

## 📱 Cara Membuka Web App

### Windows
```powershell
# Dari PowerShell
Start-Process chrome "c:\ai\Project\dinar.fotocopy\index.html"

# Atau double-click file index.html di File Explorer
```

### Manual
1. Buka folder `c:\ai\Project\dinar.fotocopy\`
2. Double-click file **index.html**
3. Web app terbuka di browser default

---

## 🎯 Testing Checklist

### ✅ 1. Hero & Promo Section
- [ ] Lihat hero section dengan 3 value cards
- [ ] Klik tombol "Lihat Daftar Harga" → scroll smooth
- [ ] Klik tombol "Upload File Sekarang" → scroll ke upload section

### ✅ 2. Paket Bundling (BARU!)
- [ ] Lihat 4 paket promo di section kedua
- [ ] Klik "Pilih Paket Skripsi" → notifikasi muncul
- [ ] Scroll otomatis ke upload section

### ✅ 3. Daftar Harga
- [ ] Klik tab filter: Semua, Dokumen, Warna, Finishing
- [ ] Cards terfilter sesuai kategori
- [ ] Lihat 8 layanan dengan harga bertingkat
- [ ] Klik button "Pilih Layanan" → scroll ke kalkulator

### ✅ 4. Kalkulator Harga
- [ ] Ubah jenis layanan → harga update
- [ ] Ubah ukuran & jenis kertas → total berubah
- [ ] Input jumlah halaman & salinan
- [ ] Centang "Duplex" → total lembar berkurang
- [ ] Klik "Hitung Total Biaya" → lihat breakdown detail
- [ ] Test dengan >100 lembar → diskon otomatis

### ✅ 5. Upload File
- [ ] **Drag & Drop**: Drag file PDF ke zona upload
- [ ] **Browse**: Klik button "Pilih File" → pilih file
- [ ] Upload multiple files (max 10)
- [ ] Test validasi: upload file >25MB → error
- [ ] Test validasi: upload file .txt → error
- [ ] Lihat file list dengan estimasi halaman

### ✅ 6. Preview PDF (BARU!)
- [ ] Upload file PDF
- [ ] Klik icon 👁️ (visibility) di file list
- [ ] Modal preview muncul dengan iframe
- [ ] Scroll dalam preview
- [ ] Klik "Tutup" untuk close modal

### ✅ 7. Opsi Cetak
- [ ] Ubah warna: Hitam Putih / Full Color
- [ ] Pilih ukuran kertas: A4, F4, Qto, A3
- [ ] Pilih jenis kertas
- [ ] Ubah jumlah salinan
- [ ] Centang "Duplex" (bolak-balik)
- [ ] Centang "Jilid" → dropdown muncul
- [ ] Pilih jenis jilid: Lakban / Hard Cover / Spiral
- [ ] Tulis catatan khusus
- [ ] Lihat total estimasi update real-time

### ✅ 8. Submit Order
- [ ] Isi nama lengkap
- [ ] Isi nomor WhatsApp
- [ ] Klik "Kirim Pesanan"
- [ ] Modal success muncul dengan kode pesanan (DNR-2026-XXXXX)
- [ ] Simpan kode pesanan
- [ ] Klik "Chat via WhatsApp" → buka WA
- [ ] Klik "Tutup" → form reset

### ✅ 9. Lacak Pesanan (BARU!)
- [ ] Klik tombol "Lacak Pesanan" di pojok kanan bawah
- [ ] Input kode pesanan (dari step 8)
- [ ] Input nomor WhatsApp
- [ ] Klik "Lacak Pesanan"
- [ ] Lihat detail pesanan (status, file, estimasi)

### ✅ 10. Riwayat Pesanan (BARU!)
- [ ] Klik icon 🕐 (history) di header
- [ ] Lihat daftar semua pesanan
- [ ] Lihat detail: kode, tanggal, status, harga
- [ ] Klik "Pesan Ulang" (placeholder)
- [ ] Klik "Hapus Semua Riwayat" → konfirmasi

### ✅ 11. Testimonial & FAQ
- [ ] Scroll ke section Testimonial
- [ ] Lihat 3 ulasan pelanggan dengan rating
- [ ] Scroll ke section FAQ
- [ ] Klik setiap pertanyaan → expand answer
- [ ] Lihat smooth animation expand/collapse

### ✅ 12. Admin Panel (BARU!)
- [ ] Tekan **Ctrl+Shift+A** di keyboard
- [ ] Modal login muncul
- [ ] Input password: `admin123` atau `dinar2026`
- [ ] Klik "Login"
- [ ] Lihat dashboard dengan statistik:
  - Total pesanan
  - Total revenue
  - Pesanan hari ini
- [ ] Scroll ke daftar pesanan
- [ ] Ubah status pesanan via dropdown
- [ ] Notifikasi "Status diubah" muncul

### ✅ 13. Navigation & UX
- [ ] Klik menu header: Beranda, Daftar Harga, Kalkulator, Upload
- [ ] Smooth scroll ke section
- [ ] Test responsive: Resize browser → layout adapt
- [ ] Test mobile view (F12 → Toggle device toolbar)
- [ ] Lihat animations saat upload file (fade-in)
- [ ] Hover cards → shadow & lift effect

---

## 🎨 Visual Testing

### Color Palette
- **Primary** (blue #a4c9ff): Button utama, links, highlights
- **Secondary** (green #7ada95): Success states, status siap
- **Tertiary** (coral #ffb5a0): Discounts, special offers
- **Background** (dark #0d1322): Base surface

### Typography
- **Display**: Hero headline (48px, bold)
- **Headline**: Section titles (32px)
- **Body**: Content text (14-16px)
- **Labels**: Uppercase tracking (11-12px)

### Spacing
- Consistent padding: 1rem, 1.5rem, 2rem
- Gap between cards: 1rem (mobile), 1.5rem (desktop)
- Section padding: 3rem (mobile), 5rem (desktop)

---

## 🔧 Feature Shortcuts

### User Features
| Feature | Action |
|---------|--------|
| Filter harga | Klik tab di section Daftar Harga |
| Preview PDF | Upload PDF → klik icon 👁️ |
| Lacak pesanan | Klik button floating di pojok kanan bawah |
| Riwayat | Klik icon 🕐 di header |
| Smooth scroll | Klik link menu header |

### Admin Features
| Feature | Shortcut |
|---------|----------|
| Login admin | **Ctrl+Shift+A** |
| Password | `admin123` atau `dinar2026` |
| Update status | Dropdown di daftar pesanan |

---

## 📊 Test Data

### Sample Orders
Buat beberapa pesanan test dengan data berbeda:

**Order 1: Simple**
- File: 1 PDF, 10 halaman
- Opsi: B/W, A4, HVS 80g, 1 copy
- Estimasi: ~Rp 1.500

**Order 2: Skripsi**
- File: 1 PDF, 100 halaman
- Opsi: Color (halaman depan), A4, HVS 80g, 3 copies, Hard Cover
- Estimasi: ~Rp 180.000

**Order 3: Bulk**
- File: 3 PDFs, total 200 halaman
- Opsi: B/W, A4, HVS 70g, 1 copy, Duplex, Jilid Lakban
- Estimasi: ~Rp 15.000

### Sample Phone Numbers
- 08123456789
- 081234567890
- 0812-3456-7890

---

## 🐛 Common Issues & Solutions

### Issue: File tidak bisa diupload
**Solution**: 
- Pastikan format: PDF, DOCX, DOC, JPG, PNG
- Maksimal 25MB per file
- Maksimal 10 files per order

### Issue: Kalkulator tidak hitung
**Solution**:
- Isi semua field (layanan, halaman, salinan)
- Klik button "Hitung Total Biaya"
- Nilai harus angka valid

### Issue: Lacak pesanan tidak ditemukan
**Solution**:
- Cek kode pesanan (format: DNR-2026-00123)
- Cek nomor WhatsApp sama dengan saat order
- Case-sensitive untuk kode pesanan

### Issue: Admin panel tidak muncul
**Solution**:
- Tekan **Ctrl+Shift+A** (bukan Alt)
- Pastikan tidak ada modal lain terbuka
- Refresh page dan coba lagi

---

## 💡 Pro Tips

1. **Bookmark Kode Pesanan**: Copy kode pesanan ke notepad untuk testing
2. **Test Multiple Orders**: Buat 3-5 orders untuk lihat admin panel lengkap
3. **Clear LocalStorage**: Buka DevTools (F12) → Console → `localStorage.clear()` untuk reset
4. **Mobile Testing**: F12 → Toggle device toolbar → Test di berbagai ukuran
5. **Screenshot**: Gunakan snipping tool untuk dokumentasi
6. **Network Tab**: Monitor request (saat ini semua lokal, nanti akan ada API calls)

---

## 📸 Screenshot Locations

Ambil screenshot untuk dokumentasi:

1. **Hero Section** - Full width dengan 3 value cards
2. **Paket Bundling** - 4 cards promo
3. **Daftar Harga** - Grid 8 layanan
4. **Kalkulator** - Form + hasil estimasi
5. **Upload Zone** - Dengan file list
6. **Preview PDF** - Modal preview
7. **Success Modal** - Dengan kode pesanan
8. **Lacak Pesanan** - Modal tracking
9. **Admin Dashboard** - Statistik + list pesanan
10. **Mobile View** - Responsive di HP

---

## ✅ Success Criteria

Web app dianggap berhasil jika:

- [x] Semua fitur berjalan tanpa error
- [x] UI responsive di mobile & desktop
- [x] Upload & preview file working
- [x] Kalkulator hitung dengan benar
- [x] Order tersimpan ke localStorage
- [x] Admin panel bisa update status
- [x] Smooth animations & transitions
- [x] No console errors (cek F12)

---

## 📞 Next Steps

### Setelah Testing Lokal:
1. ✅ **Dokumentasi** - Screenshot semua fitur
2. 🔜 **Setup Supabase** - Database + storage
3. 🔜 **Fase 2** - Implement chat & real-time status
4. 🔜 **Deploy** - Host di Vercel/Netlify
5. 🔜 **Domain** - Setup custom domain

### Backend Integration:
```javascript
// Will be needed for Fase 2:
- Supabase project
- Database schema
- Storage bucket (for files)
- Real-time subscriptions
- Authentication
```

---

**Status**: ✅ Ready for Testing
**Version**: 1.1.0 Enhanced
**Date**: 2026-10-22

Selamat testing! 🎉
