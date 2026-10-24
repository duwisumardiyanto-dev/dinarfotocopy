# 📍 Cara Update Google Maps di Website DINAR Fotocopy

## Metode 1: Menggunakan Alamat Lengkap (Paling Mudah)

### Langkah-langkah:

1. **Buka Google Maps**: https://www.google.com/maps
2. **Cari alamat toko** DINAR Fotocopy
3. **Klik "Share" atau "Bagikan"**
4. **Pilih tab "Embed a map"** atau "Sematkan peta"
5. **Copy kode HTML** yang diberikan
6. **Paste kode tersebut** di `index.html` menggantikan iframe yang ada

### Contoh Kode yang Perlu Diganti:

Cari di `index.html` bagian:
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
  width="100%" 
  height="100%" 
  ...>
</iframe>
```

Ganti hanya bagian `src="..."` dengan link embed dari Google Maps.

---

## Metode 2: Menggunakan Koordinat GPS

### Jika Anda punya koordinat GPS (Latitude & Longitude):

**Format:**
- Latitude: `-6.2088` (contoh: Jakarta)
- Longitude: `106.8456` (contoh: Jakarta)

### Cara Update:

1. Buka `index.html`
2. Cari bagian Google Maps iframe
3. Ganti link embed dengan format ini:

```html
<iframe 
  src="https://maps.google.com/maps?q=LATITUDE,LONGITUDE&hl=id&z=16&output=embed"
  width="100%" 
  height="100%" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy">
</iframe>
```

**Ganti:**
- `LATITUDE` dengan koordinat latitude Anda
- `LONGITUDE` dengan koordinat longitude Anda

**Contoh:**
```html
<iframe 
  src="https://maps.google.com/maps?q=-6.2088,106.8456&hl=id&z=16&output=embed"
  ...>
</iframe>
```

---

## Metode 3: Cara Mendapatkan Koordinat Toko

### Dari Google Maps:

1. **Buka Google Maps**: https://www.google.com/maps
2. **Cari lokasi toko** atau klik di titik lokasi toko
3. **Klik kanan** pada pin merah
4. **Copy koordinat** yang muncul (format: -6.2088, 106.8456)

### Dari HP Android/iPhone:

1. Buka **Google Maps App**
2. **Tahan/tap** pada lokasi toko
3. **Pin merah** akan muncul
4. **Koordinat** muncul di bagian bawah layar
5. **Tap koordinat** untuk copy

---

## Metode 4: Menggunakan Link Google Maps Langsung

Jika Anda punya link Google Maps (misalnya: `https://goo.gl/maps/xxxxx`):

1. Buka link tersebut di browser
2. Klik tombol **"Share"** atau **"Bagikan"**
3. Pilih **"Embed a map"**
4. Copy kode HTML
5. Paste ke `index.html`

---

## 🎯 Contoh Lengkap Update Maps

### Sebelum (Placeholder):
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.8456!3d-6.2088!..."
  width="100%" 
  height="100%" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy">
</iframe>
```

### Sesudah (Koordinat Asli):
```html
<iframe 
  src="https://maps.google.com/maps?q=-6.2088,106.8456&hl=id&z=17&output=embed"
  width="100%" 
  height="100%" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy">
</iframe>
```

---

## 📝 Informasi yang Dibutuhkan

Tolong berikan salah satu dari ini:

1. **Alamat lengkap toko:**
   ```
   Contoh:
   Jl. Raya Kebon Jeruk No. 123
   Jakarta Barat, DKI Jakarta 11530
   ```

2. **Koordinat GPS:**
   ```
   Latitude: -6.2088
   Longitude: 106.8456
   ```

3. **Link Google Maps:**
   ```
   https://goo.gl/maps/xxxxx
   atau
   https://www.google.com/maps/place/xxxxx
   ```

---

## ⚙️ Pengaturan Zoom Level

Di parameter `&z=16`, angka menunjukkan zoom level:
- `z=10` - Sangat zoom out (seluruh kota)
- `z=15` - Medium zoom (beberapa blok)
- `z=17` - Zoom in (detail jalan)
- `z=20` - Sangat zoom in (detail bangunan)

**Recommended**: `z=16` atau `z=17`

---

## 🔧 Troubleshooting

### Maps tidak muncul?
- Pastikan koneksi internet aktif
- Cek apakah link embed benar
- Pastikan tidak ada typo di koordinat

### Maps muncul tapi lokasi salah?
- Periksa koordinat latitude & longitude
- Pastikan tidak tertukar (latitude dulu, baru longitude)
- Koordinat latitude untuk Indonesia biasanya negatif (-)

### Ingin ganti bahasa maps?
Ganti parameter `&hl=id` dengan:
- `&hl=id` - Bahasa Indonesia
- `&hl=en` - English

---

## 📞 Butuh Bantuan?

Jika kesulitan update maps, kirimkan:
1. Alamat lengkap toko, atau
2. Koordinat GPS, atau
3. Link Google Maps toko

Nanti akan dibantu untuk update!

---

**File ini dibuat**: 22 Oktober 2026  
**Untuk**: DINAR Fotocopy Website
