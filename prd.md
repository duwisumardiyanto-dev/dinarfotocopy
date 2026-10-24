# PRD — DINAR Fotocopy Online

| | |
|---|---|
| **Produk** | DINAR Fotocopy Online (web app) |
| **Status** | Perencanaan |
| **Versi dokumen** | 0.1 (draft) |
| **Platform** | Web app responsif (mobile-first) |

---

## 1. Ringkasan

DINAR Fotocopy Online adalah web app yang memungkinkan pelanggan memesan layanan fotocopy dan cetak dari rumah: melihat harga, mengunggah file, mengatur opsi cetak, berkomunikasi dengan toko, serta memantau status pesanan sampai siap diambil.

## 2. Latar Belakang & Masalah

Pemesanan cetak di toko fotocopy konvensional umumnya masih manual:

- Pelanggan harus datang atau bertanya lewat chat pribadi hanya untuk tahu harga.
- File dikirim lewat WhatsApp/email sehingga mudah tercecer dan format sering berubah.
- Spesifikasi cetak (ukuran, warna, jilid, jumlah) sering salah dipahami.
- Pelanggan tidak tahu kapan pesanan selesai, sehingga harus bolak-balik menanyakan.
- Pemilik toko kesulitan mengelola antrean dan riwayat pesanan.

## 3. Tujuan & Metrik Keberhasilan

| Tujuan | Metrik | Target awal (asumsi) |
|---|---|---|
| Mempermudah pemesanan cetak | Persentase pesanan yang masuk lewat web app | ≥ 50% dalam 3 bulan setelah rilis |
| Mengurangi kesalahan spesifikasi | Pesanan yang perlu revisi/klarifikasi | < 10% |
| Mengurangi pertanyaan berulang | Chat bertanya harga/status | Turun ≥ 40% |
| Meningkatkan loyalitas | Pelanggan yang memesan ulang | ≥ 30% pelanggan terdaftar |

> Target di atas adalah asumsi awal dan perlu divalidasi bersama pemilik toko.

## 4. Target Pengguna

**Pelanggan (utama)** — pelajar, mahasiswa, pekerja kantoran, dan warga sekitar yang butuh cetak dokumen, tugas, skripsi, formulir, atau banyak salinan dengan cepat.

**Admin/Pemilik toko (sekunder)** — mengelola harga, menerima pesanan, membalas chat, dan memperbarui status pesanan.

## 5. Ruang Lingkup per Fase

| Fase | Fitur | Tujuan fase |
|---|---|---|
| **Fase 1** | Daftar Harga Cetak, Upload File Cetak | Pelanggan bisa melihat harga dan mengirim file untuk dicetak |
| **Fase 2** | Chat dengan Toko, Status Pesanan | Komunikasi dua arah dan transparansi proses |
| **Fase 3** | Masuk & Akun | Identitas pelanggan, riwayat tersimpan |
| **Fase 4** | Notifikasi | Pemberitahuan proaktif dan pengingat |

> Catatan: pada Fase 1–2, pemesanan dapat dilakukan sebagai tamu (tanpa akun) menggunakan nama dan nomor WhatsApp. Akun penuh hadir di Fase 3. *(Asumsi — lihat Pertanyaan Terbuka.)*

---

## 6. Kebutuhan Fitur

### 6.1 Daftar Harga Cetak — Fase 1

**Deskripsi:** halaman informasi layanan dan harga yang selalu terbaru.

**Sub fitur**

1. **Katalog Layanan** — daftar layanan (fotocopy, print hitam-putih/warna, jilid, laminating, scan, dll.) beserta deskripsi singkat.
2. **Estimasi Biaya** — kalkulator: pilih layanan, ukuran kertas, jumlah halaman, dan jumlah salinan → total estimasi.
3. **Paket Hemat** — paket bundling atau harga grosir (mis. cetak + jilid).
4. **Harga Finishing & Tambahan** — jilid, laminating, potong, dll. *(sub fitur ke-4 diasumsikan; di diagram tertulis "Lihat semua (4)")*

**Kebutuhan fungsional**

- Daftar harga dikelola admin tanpa perlu mengubah kode.
- Harga ditampilkan dalam Rupiah, dengan tingkat harga bertahap (mis. 1–10 lembar, 11–100, 100+).
- Estimasi biaya dihitung real-time di sisi klien dan konsisten dengan perhitungan server.
- Disclaimer bahwa estimasi dapat berubah setelah file diperiksa toko.

**Kriteria penerimaan**

- Pelanggan dapat melihat semua layanan dan harga tanpa login.
- Estimasi biaya berubah seketika saat opsi diubah.
- Perubahan harga oleh admin tampil di web maksimal 1 menit.

---

### 6.2 Upload File Cetak — Fase 1

**Deskripsi:** alur utama pemesanan — dari memilih file hingga pesanan terkirim ke toko.

**Sub fitur**

1. **Pilih File** — unggah satu atau beberapa file (PDF, DOC/DOCX, JPG/PNG, dan format umum lainnya) dengan drag & drop atau pemilih file.
2. **Pratinjau File** — tampilan halaman file, jumlah halaman terdeteksi otomatis.
3. **Atur Opsi Cetak** — warna/hitam-putih, ukuran kertas, jenis kertas, bolak-balik, jumlah salinan, orientasi, jilid, catatan khusus.
4. **Konfirmasi Pesanan** — ringkasan, total estimasi, metode pengambilan, lalu kirim. *(sub fitur ke-4 diasumsikan)*

**Kebutuhan fungsional**

- Batas ukuran file dan jumlah file per pesanan (usulan: 25 MB per file, 10 file per pesanan).
- Validasi format dan peringatan bila file korup atau terlalu besar.
- Setiap file memiliki opsi cetak tersendiri atau opsi dapat diterapkan ke semua file.
- Pesanan menghasilkan kode unik (mis. `DNR-2026-00123`).
- Admin menerima pesanan beserta file dan dapat mengunduhnya.
- File disimpan aman dan dihapus otomatis setelah periode tertentu (usulan: 30 hari setelah pesanan selesai).

**Kriteria penerimaan**

- Pelanggan dapat menyelesaikan pesanan dalam < 3 menit untuk 1 file.
- Total harga pada konfirmasi sesuai daftar harga.
- Pesanan yang terkirim muncul di panel admin.

---

### 6.3 Chat dengan Toko — Fase 2

**Deskripsi:** saluran komunikasi langsung antara pelanggan dan toko, terkait pesanan maupun pertanyaan umum.

**Sub fitur**

1. **Kirim Pesan** — teks dan lampiran (gambar/file kecil).
2. **Balasan Cepat** — template pertanyaan untuk pelanggan (mis. "Apakah sudah selesai?") dan template jawaban untuk admin.
3. **Riwayat Percakapan** — percakapan tersimpan dan dapat dibuka kembali.

**Kebutuhan fungsional**

- Percakapan dapat dikaitkan dengan pesanan tertentu.
- Indikator terkirim/terbaca.
- Admin dapat melihat daftar percakapan belum dibalas.
- Jam operasional toko ditampilkan; di luar jam, tampil pesan otomatis.

**Kriteria penerimaan**

- Pesan sampai ke penerima dalam beberapa detik.
- Riwayat chat tetap ada setelah halaman dimuat ulang.

---

### 6.4 Status Pesanan — Fase 2

**Deskripsi:** transparansi proses pesanan dari diterima hingga diambil.

**Sub fitur**

1. **Lacak Status** — lacak lewat kode pesanan; alur status: *Diterima → Diperiksa → Dicetak → Siap Diambil → Selesai* (plus *Dibatalkan*).
2. **Riwayat Pesanan** — daftar pesanan sebelumnya beserta detailnya.
3. **Ulangi Pesanan** — pesan ulang dengan file dan opsi yang sama dalam sekali klik.

**Kebutuhan fungsional**

- Admin memperbarui status dari panel admin; setiap perubahan tercatat dengan waktu.
- Pelanggan tamu dapat melacak dengan kode pesanan + nomor WhatsApp.
- "Ulangi Pesanan" menggunakan harga terbaru, bukan harga lama.

**Kriteria penerimaan**

- Status di sisi pelanggan sinkron dengan panel admin.
- Pesanan lama dapat diulang tanpa mengunggah ulang file (selama file masih tersimpan).

---

### 6.5 Masuk & Akun — Fase 3

**Deskripsi:** identitas pelanggan agar data, riwayat, dan preferensi tersimpan.

**Sub fitur**

1. **Daftar Akun** — pendaftaran dengan email atau nomor telepon.
2. **Masuk & Keluar** — autentikasi aman, opsi lupa kata sandi / OTP.
3. **Atur Profil** — nama, kontak, preferensi cetak bawaan.

**Kebutuhan fungsional**

- Pesanan dan chat tamu sebelumnya dapat ditautkan ke akun baru (bila nomor cocok).
- Kata sandi disimpan ter-hash; sesi dikelola dengan aman.
- Pelanggan dapat menghapus akun dan datanya.

**Kriteria penerimaan**

- Pendaftaran dan masuk selesai dalam < 1 menit.
- Riwayat pesanan hanya dapat diakses pemilik akun.

---

### 6.6 Notifikasi — Fase 4

**Deskripsi:** pemberitahuan proaktif agar pelanggan tidak perlu mengecek manual.

**Sub fitur**

1. **Kabar Pesanan Selesai** — notifikasi saat status menjadi *Siap Diambil*.
2. **Pengingat Ambil** — pengingat bila pesanan belum diambil setelah waktu tertentu.
3. **Atur Jenis Notifikasi** — pelanggan memilih jenis dan saluran notifikasi.

**Kebutuhan fungsional**

- Saluran yang dipertimbangkan: web push, email, dan/atau WhatsApp (ditentukan kemudian).
- Pengingat tidak lebih dari batas frekuensi yang ditentukan (mis. maksimal 2 kali per pesanan).
- Pelanggan dapat menonaktifkan tiap jenis notifikasi.

**Kriteria penerimaan**

- Notifikasi terkirim maksimal 1 menit setelah status berubah.
- Preferensi notifikasi dihormati.

---

## 7. Panel Admin (pendukung)

Diagram belum mencakup sisi toko, tetapi diperlukan agar fitur di atas berfungsi:

- Kelola daftar harga dan paket.
- Terima, lihat, dan unduh file pesanan.
- Ubah status pesanan.
- Balas chat pelanggan.
- Lihat riwayat dan rekap pesanan sederhana.

## 8. Kebutuhan Non-Fungsional

- **Performa:** halaman utama termuat < 3 detik di jaringan seluler 4G; unggah file mendukung progres dan pemulihan bila terputus.
- **Keamanan & privasi:** koneksi HTTPS; file pelanggan bersifat privat; akses file hanya untuk pemilik pesanan dan admin; penghapusan otomatis sesuai kebijakan retensi.
- **Kompatibilitas:** browser modern (Chrome, Safari, Firefox, Edge) di ponsel dan desktop.
- **Aksesibilitas:** kontras teks memadai, ukuran sentuh nyaman, bahasa Indonesia sederhana.
- **Ketersediaan:** target uptime 99% pada jam operasional toko.
- **Skalabilitas:** mampu menangani lonjakan pesanan (musim tugas/ujian/skripsi).

## 9. Alur Pengguna Utama

1. Pelanggan membuka web → melihat **Daftar Harga**.
2. Menekan **Upload File** → memilih file → melihat pratinjau.
3. Mengatur opsi cetak → melihat estimasi biaya → mengonfirmasi pesanan.
4. Menerima kode pesanan → memantau **Status Pesanan**.
5. Bila ada pertanyaan, **Chat dengan Toko**.
6. Mendapat **Notifikasi** saat siap → mengambil dan membayar di toko.

## 10. Asumsi & Batasan

- Pembayaran dilakukan di toko saat pengambilan; pembayaran online di luar cakupan awal.
- Pengambilan dilakukan di toko; pengiriman/antar tidak termasuk.
- Satu toko (DINAR) dengan satu tim admin.
- Bahasa antarmuka: Bahasa Indonesia.

## 11. Di Luar Cakupan (saat ini)

- Pembayaran online / dompet digital
- Pengiriman atau kurir
- Aplikasi mobile native
- Multi-cabang
- Editor dokumen di dalam aplikasi

## 12. Risiko

| Risiko | Dampak | Mitigasi |
|---|---|---|
| File besar atau format tidak umum | Gagal cetak/tampilan berbeda | Batas ukuran, pratinjau, konversi ke PDF |
| Admin kewalahan membalas chat | Pelanggan kecewa | Balasan cepat, jam operasional jelas |
| Pelanggan kurang melek digital | Adopsi rendah | Alur sederhana, panduan singkat, bantuan via chat |
| Kebocoran data file | Kehilangan kepercayaan | Akses privat, retensi terbatas, HTTPS |

## 13. Pertanyaan Terbuka

1. Apakah pemesanan sebagai tamu (tanpa akun) diperbolehkan di Fase 1–2?
2. Format file apa saja yang wajib didukung, dan berapa batas ukurannya?
3. Saluran notifikasi mana yang dipilih (web push, email, WhatsApp)?
4. Berapa lama file pelanggan boleh disimpan?
5. Siapa yang mengelola harga dan pesanan sehari-hari (satu atau beberapa admin)?
6. Apakah perlu fitur pembayaran online di fase berikutnya?
7. Apa 4 sub fitur lengkap untuk Daftar Harga Cetak dan Upload File Cetak (diagram hanya menampilkan 3 dari 4)?

## 14. Ringkasan Peta Jalan

| Fase | Fokus | Hasil |
|---|---|---|
| 1 | Harga & upload | Pesanan pertama bisa masuk lewat web |
| 2 | Chat & status | Komunikasi dan pelacakan transparan |
| 3 | Akun | Riwayat dan data pelanggan tersimpan |
| 4 | Notifikasi | Pelanggan diberi kabar otomatis |
