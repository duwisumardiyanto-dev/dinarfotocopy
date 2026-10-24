# 🚀 Cara Menjalankan Localhost Server

Panduan lengkap berbagai cara menjalankan DINAR Fotocopy web app di localhost.

---

## 🎯 **Metode Paling Mudah (REKOMENDASI)**

### **Cara 1: Double-Click File .bat** ⭐ TERMUDAH
```
1. Buka folder project: c:\ai\Project\dinar.fotocopy\
2. Double-click file: start-server.bat
3. Terminal otomatis terbuka dan server running
4. Akses: http://localhost:3000
```

### **Cara 2: Dari Terminal PowerShell**
```powershell
cd c:\ai\Project\dinar.fotocopy
.\start-server.ps1
```

### **Cara 3: Menggunakan npm (Setelah package.json dibuat)**
```powershell
cd c:\ai\Project\dinar.fotocopy
npm start
# ATAU
npm run dev
```

---

## 📝 **Perintah Terminal Lengkap**

### **PowerShell (Windows)**

#### Start Server:
```powershell
# Cara 1: Dengan npx (tanpa install)
cd c:\ai\Project\dinar.fotocopy
npx serve -l 3000

# Cara 2: Dengan npm script
cd c:\ai\Project\dinar.fotocopy
npm start

# Cara 3: Dengan PowerShell script
cd c:\ai\Project\dinar.fotocopy
.\start-server.ps1

# Cara 4: Custom port
npx serve -l 8080
```

#### Buka Browser Otomatis:
```powershell
# Start server dan buka browser
cd c:\ai\Project\dinar.fotocopy
npx serve -l 3000 & Start-Process http://localhost:3000
```

#### Stop Server:
```powershell
# Tekan Ctrl+C di terminal
# Atau tutup terminal window
```

---

## 🔧 **Shortcut & Alias**

### **Buat Alias di PowerShell Profile**

1. Buka PowerShell profile:
```powershell
notepad $PROFILE
```

2. Tambahkan alias ini:
```powershell
# DINAR Fotocopy Shortcuts
function Start-DinarServer {
    Set-Location "c:\ai\Project\dinar.fotocopy"
    npx serve -l 3000
}
Set-Alias dinar Start-DinarServer

function Open-DinarBrowser {
    Start-Process http://localhost:3000
}
Set-Alias dinar-open Open-DinarBrowser
```

3. Save dan restart PowerShell

4. Sekarang cukup ketik:
```powershell
dinar          # Start server
dinar-open     # Buka browser
```

---

## 📂 **Dari VS Code**

### **Metode 1: Integrated Terminal**
```
1. Buka folder project di VS Code
2. Terminal → New Terminal (Ctrl+`)
3. Ketik: npm start
4. Akses: http://localhost:3000
```

### **Metode 2: Live Server Extension**
```
1. Install extension: Live Server (Ritwick Dey)
2. Klik kanan index.html
3. Pilih: "Open with Live Server"
4. Otomatis buka di http://127.0.0.1:5500
```

### **Metode 3: Tasks (otomatis)**
Buat file `.vscode/tasks.json`:
```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Start DINAR Server",
            "type": "shell",
            "command": "npm start",
            "problemMatcher": [],
            "presentation": {
                "reveal": "always",
                "panel": "new"
            }
        }
    ]
}
```

Jalankan: Terminal → Run Task → Start DINAR Server

---

## 🌐 **Berbagai Port Options**

```powershell
# Port 3000 (default)
npx serve -l 3000
# http://localhost:3000

# Port 8080
npx serve -l 8080
# http://localhost:8080

# Port 5000
npx serve -l 5000
# http://localhost:5000

# Random available port
npx serve
# Port akan dipilih otomatis
```

---

## 📱 **Akses dari Device Lain**

### **Cara Cek IP Address Lokal:**
```powershell
# PowerShell
ipconfig | findstr IPv4

# Hasilnya seperti:
# IPv4 Address. . . . . . . . . . . : 192.168.1.15
```

### **Akses dari HP/Tablet:**
1. Pastikan device di WiFi yang sama
2. Server harus running di laptop
3. Buka browser di HP
4. Ketik: `http://192.168.1.15:3000`
   (ganti dengan IP laptop Anda)

---

## 🔑 **Cheat Sheet - Copy Paste Langsung**

### **Quick Start (Copy ini):**
```powershell
cd c:\ai\Project\dinar.fotocopy ; npx serve -l 3000
```

### **Start + Auto Open Browser:**
```powershell
cd c:\ai\Project\dinar.fotocopy ; npx serve -l 3000 & Start-Process http://localhost:3000
```

### **Start di Background:**
```powershell
cd c:\ai\Project\dinar.fotocopy ; Start-Process powershell -ArgumentList "npx serve -l 3000" -NoNewWindow
```

---

## 🛠️ **Troubleshooting**

### **Problem: Port sudah digunakan**
```
Error: Port 3000 is already in use
```

**Solution:**
```powershell
# Gunakan port lain
npx serve -l 8080

# ATAU matikan proses yang pakai port 3000
netstat -ano | findstr :3000
# Lihat PID, lalu:
taskkill /PID <PID_NUMBER> /F
```

### **Problem: npx tidak dikenali**
```
npx : The term 'npx' is not recognized...
```

**Solution:**
```powershell
# Install/Update Node.js
# Download dari: https://nodejs.org
# Restart terminal setelah install
```

### **Problem: Script tidak bisa dijalankan**
```
cannot be loaded because running scripts is disabled
```

**Solution:**
```powershell
# Jalankan sebagai Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Lalu coba lagi
.\start-server.ps1
```

---

## 🎯 **Best Practices**

### **Development Workflow:**
```
1. Buka VS Code → Open folder project
2. Terminal → npm start (atau .\start-server.bat)
3. Browser otomatis buka http://localhost:3000
4. Edit code → Save → Refresh browser
5. Test features
6. Ctrl+C untuk stop server saat selesai
```

### **Multiple Terminals:**
```powershell
# Terminal 1: Server
cd c:\ai\Project\dinar.fotocopy
npm start

# Terminal 2: Git commands, file operations, dll
cd c:\ai\Project\dinar.fotocopy
git status
```

---

## 📋 **Quick Command Reference**

| Perintah | Fungsi |
|----------|--------|
| `npm start` | Start server port 3000 |
| `npm run dev` | Sama dengan npm start |
| `npx serve -l 3000` | Start tanpa package.json |
| `.\start-server.bat` | Double-click untuk start |
| `.\start-server.ps1` | PowerShell script |
| `Ctrl+C` | Stop server |
| `Start-Process http://localhost:3000` | Buka browser |

---

## 🎨 **Custom Server Options**

### **Dengan Auto-Open Browser:**
```powershell
npx serve -l 3000 --open
```

### **Dengan Specific Browser:**
```powershell
# Chrome
start chrome http://localhost:3000

# Firefox
start firefox http://localhost:3000

# Edge
start msedge http://localhost:3000
```

### **Silent Mode (No Logo):**
```powershell
npx serve -l 3000 --no-clipboard
```

---

## 💾 **Save Shortcuts di Desktop**

### **Buat Shortcut Start Server:**
1. Klik kanan Desktop → New → Shortcut
2. Location: `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -File "c:\ai\Project\dinar.fotocopy\start-server.ps1"`
3. Name: "DINAR Server"
4. Double-click untuk start!

### **Buat Shortcut Open Localhost:**
1. Klik kanan Desktop → New → Shortcut
2. Location: `http://localhost:3000`
3. Name: "DINAR Web App"
4. Klik untuk buka di browser

---

## 🚀 **Pro Tips**

1. **Bookmark URL**: Bookmark `http://localhost:3000` di browser
2. **Multiple Ports**: Jalankan di port berbeda untuk test comparison
3. **Network Share**: Share IP address ke tim untuk demo
4. **Auto Start**: Tambahkan ke Windows Startup jika perlu
5. **Terminal Persistent**: Gunakan Windows Terminal untuk better experience

---

## ✅ **Kesimpulan**

**Cara Tercepat:**
```powershell
# Dari PowerShell
cd c:\ai\Project\dinar.fotocopy
npm start

# ATAU double-click file:
start-server.bat
```

**URL Akses:**
- Local: `http://localhost:3000`
- Network: `http://192.168.1.15:3000` (sesuaikan IP Anda)

**Stop Server:**
- Tekan `Ctrl+C` di terminal

---

**Sekarang Anda sudah tahu semua cara! 🎉**

Pilih yang paling nyaman untuk workflow Anda.
