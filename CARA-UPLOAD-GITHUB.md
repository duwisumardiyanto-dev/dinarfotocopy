# 📤 Cara Upload Project ke GitHub

## Langkah 1: Buat Repository Baru di GitHub

1. Buka browser dan pergi ke: **https://github.com**
2. Login dengan akun GitHub Anda
3. Klik tombol **"+"** di pojok kanan atas → pilih **"New repository"**
4. Isi form repository:
   - **Repository name:** `dinar-fotocopy-website` (atau nama lain yang Anda inginkan)
   - **Description:** `Website fotocopy & ATK DINAR Fotocopy - Buka 24 Jam`
   - **Public** atau **Private** (pilih sesuai kebutuhan)
   - ❌ **JANGAN centang** "Initialize this repository with a README" (sudah ada README.md)
5. Klik tombol **"Create repository"**

## Langkah 2: Salin URL Repository

Setelah repository dibuat, Anda akan melihat halaman setup. Salin URL repository, contoh:
```
https://github.com/username/dinar-fotocopy-website.git
```

## Langkah 3: Upload dari Command Line

Buka **PowerShell** atau **Command Prompt** di folder project ini, lalu jalankan:

```bash
# Tambahkan remote repository (ganti URL dengan URL Anda)
git remote add origin https://github.com/username/dinar-fotocopy-website.git

# Push ke GitHub
git push -u origin main
```

**Ganti `username` dan `dinar-fotocopy-website` dengan URL repository Anda!**

### Jika Diminta Login:

Git akan meminta kredensial GitHub:
- **Username:** username GitHub Anda
- **Password:** gunakan **Personal Access Token** (bukan password biasa)

#### Cara Membuat Personal Access Token:

1. Pergi ke: **https://github.com/settings/tokens**
2. Klik **"Generate new token"** → **"Generate new token (classic)"**
3. Centang minimal: **repo** (full control)
4. Klik **"Generate token"**
5. **COPY token** yang muncul (hanya muncul sekali!)
6. Gunakan token ini sebagai password saat git push

## Langkah 4: Verifikasi

Setelah push berhasil, refresh halaman repository di browser. Anda akan melihat semua file sudah terupload!

## 🔄 Update Project di Kemudian Hari

Jika Anda melakukan perubahan pada project:

```bash
# Stage perubahan
git add .

# Commit dengan pesan
git commit -m "Update: deskripsi perubahan"

# Push ke GitHub
git push
```

## 📱 Alternatif: Upload Manual via Web

Jika tidak familiar dengan command line:

1. Buat repository baru di GitHub (Langkah 1)
2. Di halaman repository, klik **"uploading an existing file"**
3. Drag & drop semua file dari folder project
4. Klik **"Commit changes"**

**Note:** Metode ini lebih lambat untuk project besar, tapi lebih mudah untuk pemula.

## ❓ Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin <URL_BARU>
```

### Error: "failed to push"
```bash
# Pull dulu jika ada konflik
git pull origin main --allow-unrelated-histories

# Lalu push lagi
git push -u origin main
```

### Branch "master" vs "main"
Jika GitHub Anda menggunakan `master` bukan `main`:
```bash
git branch -M main
git push -u origin main
```

## ✅ Selesai!

Project DINAR Fotocopy Anda sekarang sudah tersimpan di GitHub! 🎉

Repository Link: **https://github.com/username/dinar-fotocopy-website**

---

**Need Help?** Contact support atau dokumentasi GitHub:
https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github
