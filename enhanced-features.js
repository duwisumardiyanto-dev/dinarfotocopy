// DINAR Fotocopy - Enhanced Features (Home Business Edition)
// Fokus: Fotocopy rumahan, Print Epson, dan ATK

// ========== REMOVED: PAKET BUNDLING (tidak relevan untuk usaha rumahan) ==========
// Paket bundling dihilangkan karena fokus pada layanan per item

function initPackages() {
  // Disabled for home business version
  // const container = document.getElementById('packages-container');
  // if (!container) return;
  console.log('Package bundling disabled for home business edition');
}

function selectPackage(packageId) {
  showNotification('Silakan pilih layanan individual dari katalog', 'info');
}

// ========== PDF PREVIEW ==========
function enablePDFPreview() {
  // Add PDF.js library dynamically if needed
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
  script.onload = () => {
    console.log('PDF.js loaded');
  };
  document.head.appendChild(script);
}

function previewPDF(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const modal = createPreviewModal(file.name, e.target.result);
    document.body.appendChild(modal);
  };
  reader.readAsDataURL(file);
}

function createPreviewModal(fileName, dataUrl) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-surface-container-lowest/95 backdrop-blur-sm flex items-center justify-center z-50 p-6';
  modal.innerHTML = `
    <div class="bg-surface-container max-w-4xl w-full h-[90vh] flex flex-col">
      <div class="p-4 border-b border-outline-variant flex items-center justify-between">
        <div>
          <h3 class="text-lg font-bold text-on-surface">${fileName}</h3>
          <p class="text-xs text-on-surface-variant">Preview File</p>
        </div>
        <button onclick="this.closest('.fixed').remove()" class="text-on-surface hover:text-primary">
          <span class="material-symbols-outlined text-[24px]">close</span>
        </button>
      </div>
      <div class="flex-1 overflow-auto p-4">
        <iframe src="${dataUrl}" class="w-full h-full border-0"></iframe>
      </div>
      <div class="p-4 border-t border-outline-variant flex gap-2 justify-end">
        <button onclick="this.closest('.fixed').remove()" class="bg-surface-container-high hover:bg-surface-bright text-on-surface px-4 py-2 text-xs uppercase font-bold">
          Tutup
        </button>
      </div>
    </div>
  `;
  return modal;
}

// ========== ORDER TRACKING ==========
function initOrderTracking() {
  // Add tracking section to page if needed
  const trackingBtn = document.createElement('button');
  trackingBtn.innerHTML = `
    <span class="material-symbols-outlined">search</span>
    <span>Lacak Pesanan</span>
  `;
  trackingBtn.className = 'fixed bottom-6 right-6 bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg z-40';
  trackingBtn.onclick = showTrackingModal;
  document.body.appendChild(trackingBtn);
}

function showTrackingModal() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-surface-container-lowest/90 backdrop-blur-sm flex items-center justify-center z-50 p-6';
  modal.innerHTML = `
    <div class="bg-surface-container max-w-md w-full p-6 space-y-6">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold text-on-surface uppercase">Lacak Pesanan</h2>
        <button onclick="this.closest('.fixed').remove()" class="text-on-surface hover:text-primary">
          <span class="material-symbols-outlined text-[24px]">close</span>
        </button>
      </div>
      
      <div class="space-y-4">
        <div>
          <label class="block text-xs uppercase tracking-wider font-bold text-on-surface-variant mb-2">Kode Pesanan</label>
          <input type="text" id="track-code" placeholder="DNR-2026-00123" class="w-full bg-surface-container-high border border-outline-variant text-on-surface p-3 text-sm uppercase"/>
        </div>
        
        <div>
          <label class="block text-xs uppercase tracking-wider font-bold text-on-surface-variant mb-2">Nomor WhatsApp</label>
          <input type="tel" id="track-phone" placeholder="08123456789" class="w-full bg-surface-container-high border border-outline-variant text-on-surface p-3 text-sm"/>
        </div>
        
        <button onclick="trackOrder()" class="w-full bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary py-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2">
          <span class="material-symbols-outlined text-[20px]">search</span>
          <span>Lacak Pesanan</span>
        </button>
      </div>
      
      <div id="tracking-result" class="hidden"></div>
    </div>
  `;
  document.body.appendChild(modal);
}

function trackOrder() {
  const code = document.getElementById('track-code').value.trim().toUpperCase();
  const phone = document.getElementById('track-phone').value.trim();
  
  if (!code || !phone) {
    showNotification('Mohon isi kode pesanan dan nomor WhatsApp', 'error');
    return;
  }
  
  // Get from localStorage
  const orders = JSON.parse(localStorage.getItem('dinarOrders') || '[]');
  const order = orders.find(o => o.code === code && o.phone === phone);
  
  const resultDiv = document.getElementById('tracking-result');
  
  if (!order) {
    resultDiv.className = 'bg-error/20 border border-error p-4';
    resultDiv.innerHTML = `
      <div class="flex items-center gap-2 text-error">
        <span class="material-symbols-outlined">error</span>
        <span class="font-bold">Pesanan tidak ditemukan</span>
      </div>
      <p class="text-xs text-on-surface-variant mt-2">Periksa kembali kode pesanan dan nomor WhatsApp Anda</p>
    `;
  } else {
    resultDiv.className = 'bg-surface-container-high p-4 space-y-4';
    resultDiv.innerHTML = `
      <div class="text-center">
        <span class="text-xs uppercase tracking-wider text-on-surface-variant">Pesanan</span>
        <p class="text-2xl font-extrabold text-primary">${order.code}</p>
      </div>
      
      <div class="space-y-2 text-sm">
        <div class="flex justify-between">
          <span class="text-on-surface-variant">Nama:</span>
          <span class="text-on-surface font-bold">${order.name}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-on-surface-variant">Total File:</span>
          <span class="text-on-surface font-bold">${order.files.length} file</span>
        </div>
        <div class="flex justify-between">
          <span class="text-on-surface-variant">Estimasi:</span>
          <span class="text-secondary font-bold">${formatCurrency(order.estimate)}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-on-surface-variant">Status:</span>
          <span class="text-on-surface font-bold">${order.status || 'Diterima'}</span>
        </div>
      </div>
      
      <div class="bg-secondary-container/20 border border-secondary-container p-3">
        <p class="text-xs text-on-surface">
          <strong>Status:</strong> Pesanan Anda sedang diproses. Estimasi selesai dalam 12-20 menit.
        </p>
      </div>
    `;
  }
  
  resultDiv.classList.remove('hidden');
}

// ========== ORDER HISTORY ==========
function showOrderHistory() {
  const orders = JSON.parse(localStorage.getItem('dinarOrders') || '[]');
  
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-surface-container-lowest/90 backdrop-blur-sm flex items-center justify-center z-50 p-6 overflow-auto';
  modal.innerHTML = `
    <div class="bg-surface-container max-w-4xl w-full p-6 space-y-6 my-6">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold text-on-surface uppercase">Riwayat Pesanan</h2>
        <button onclick="this.closest('.fixed').remove()" class="text-on-surface hover:text-primary">
          <span class="material-symbols-outlined text-[24px]">close</span>
        </button>
      </div>
      
      ${orders.length === 0 ? `
        <div class="text-center py-12">
          <span class="material-symbols-outlined text-[60px] text-outline">receipt_long</span>
          <p class="text-on-surface-variant mt-4">Belum ada riwayat pesanan</p>
        </div>
      ` : `
        <div class="space-y-3">
          ${orders.reverse().map(order => `
            <div class="bg-surface-container-high p-4 hover:bg-surface-bright transition-all">
              <div class="flex items-start justify-between gap-4">
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-2">
                    <span class="text-lg font-bold text-primary">${order.code}</span>
                    <span class="text-xs px-2 py-1 bg-secondary-container text-on-secondary-container uppercase font-bold">
                      ${order.status || 'Diterima'}
                    </span>
                  </div>
                  <p class="text-sm text-on-surface">${order.name} • ${order.files.length} file</p>
                  <p class="text-xs text-on-surface-variant mt-1">
                    ${new Date(order.timestamp).toLocaleString('id-ID')}
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-xl font-bold text-secondary">${formatCurrency(order.estimate)}</p>
                  <button onclick="reorderByCode('${order.code}')" class="text-xs text-primary hover:underline mt-2">
                    Pesan Ulang
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `}
      
      ${orders.length > 0 ? `
        <button onclick="clearAllOrders()" class="w-full bg-error/20 hover:bg-error/30 text-error py-2 text-xs uppercase font-bold">
          Hapus Semua Riwayat
        </button>
      ` : ''}
    </div>
  `;
  document.body.appendChild(modal);
}

function reorderByCode(code) {
  const orders = JSON.parse(localStorage.getItem('dinarOrders') || '[]');
  const order = orders.find(o => o.code === code);
  
  if (order) {
    showNotification('Fitur pesan ulang akan diimplementasi dengan backend', 'info');
    // In production: restore order options and scroll to upload
  }
}

function clearAllOrders() {
  if (confirm('Yakin ingin menghapus semua riwayat pesanan?')) {
    localStorage.removeItem('dinarOrders');
    showNotification('Riwayat pesanan berhasil dihapus', 'success');
    document.querySelector('.fixed').remove();
  }
}

// ========== ADMIN PANEL ==========
function initAdminPanel() {
  // Add admin access button (hidden, accessible via special URL or shortcut)
  document.addEventListener('keydown', (e) => {
    // Ctrl+Shift+A to open admin
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
      showAdminLogin();
    }
  });
}

function showAdminLogin() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-surface-container-lowest/90 backdrop-blur-sm flex items-center justify-center z-50 p-6';
  modal.innerHTML = `
    <div class="bg-surface-container max-w-md w-full p-6 space-y-6">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold text-on-surface uppercase">Admin Panel</h2>
        <button onclick="this.closest('.fixed').remove()" class="text-on-surface hover:text-primary">
          <span class="material-symbols-outlined text-[24px]">close</span>
        </button>
      </div>
      
      <div class="space-y-4">
        <div>
          <label class="block text-xs uppercase tracking-wider font-bold text-on-surface-variant mb-2">Password Admin</label>
          <input type="password" id="admin-password" placeholder="••••••••" class="w-full bg-surface-container-high border border-outline-variant text-on-surface p-3 text-sm"/>
        </div>
        
        <button onclick="loginAdmin()" class="w-full bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary py-3 text-xs font-bold uppercase tracking-wider transition-all">
          Login
        </button>
        
        <p class="text-xs text-on-surface-variant text-center">
          Password default: <code class="bg-surface-container-high px-2 py-1">admin123</code>
        </p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function loginAdmin() {
  const password = document.getElementById('admin-password').value;
  
  // Simple password check (in production, use proper authentication)
  if (password === 'admin123' || password === 'dinar2026') {
    document.querySelector('.fixed').remove();
    showAdminDashboard();
  } else {
    showNotification('Password salah!', 'error');
  }
}

function showAdminDashboard() {
  const orders = JSON.parse(localStorage.getItem('dinarOrders') || '[]');
  
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-surface-container-lowest/90 backdrop-blur-sm flex items-center justify-center z-50 p-6 overflow-auto';
  modal.innerHTML = `
    <div class="bg-surface-container max-w-6xl w-full p-6 space-y-6 my-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold text-on-surface uppercase">Admin Dashboard</h2>
          <p class="text-sm text-on-surface-variant">Kelola pesanan masuk</p>
        </div>
        <button onclick="this.closest('.fixed').remove()" class="text-on-surface hover:text-primary">
          <span class="material-symbols-outlined text-[24px]">close</span>
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-primary-container p-4">
          <p class="text-xs uppercase text-on-primary-container/70">Total Pesanan</p>
          <p class="text-3xl font-extrabold text-on-primary-container">${orders.length}</p>
        </div>
        <div class="bg-secondary-container p-4">
          <p class="text-xs uppercase text-on-secondary-container/70">Total Revenue</p>
          <p class="text-3xl font-extrabold text-on-secondary-container">
            ${formatCurrency(orders.reduce((sum, o) => sum + o.estimate, 0))}
          </p>
        </div>
        <div class="bg-tertiary-container p-4">
          <p class="text-xs uppercase text-on-tertiary-container/70">Hari Ini</p>
          <p class="text-3xl font-extrabold text-on-tertiary-container">
            ${orders.filter(o => new Date(o.timestamp).toDateString() === new Date().toDateString()).length}
          </p>
        </div>
      </div>
      
      <div class="bg-surface-container-high p-4">
        <h3 class="text-lg font-bold text-on-surface uppercase mb-4">Daftar Pesanan</h3>
        
        ${orders.length === 0 ? `
          <p class="text-center text-on-surface-variant py-8">Belum ada pesanan masuk</p>
        ` : `
          <div class="space-y-2">
            ${orders.reverse().map((order, index) => `
              <div class="bg-surface-container p-4 hover:bg-surface-bright transition-all">
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                      <span class="text-sm font-mono text-primary">${order.code}</span>
                      <select onchange="updateOrderStatus('${order.code}', this.value)" class="text-xs px-2 py-1 bg-surface-container-high border border-outline-variant text-on-surface">
                        <option value="Diterima" ${!order.status || order.status === 'Diterima' ? 'selected' : ''}>Diterima</option>
                        <option value="Diperiksa" ${order.status === 'Diperiksa' ? 'selected' : ''}>Diperiksa</option>
                        <option value="Dicetak" ${order.status === 'Dicetak' ? 'selected' : ''}>Dicetak</option>
                        <option value="Siap Diambil" ${order.status === 'Siap Diambil' ? 'selected' : ''}>Siap Diambil</option>
                        <option value="Selesai" ${order.status === 'Selesai' ? 'selected' : ''}>Selesai</option>
                      </select>
                    </div>
                    <p class="text-sm text-on-surface"><strong>${order.name}</strong> • ${order.phone}</p>
                    <p class="text-xs text-on-surface-variant mt-1">
                      ${order.files.length} file • ${order.files.reduce((sum, f) => sum + f.pages, 0)} halaman • 
                      ${order.options.color === 'color' ? 'Warna' : 'B/W'} • 
                      ${order.options.copies}x ${order.options.duplex ? 'Duplex' : ''} 
                      ${order.options.binding ? `• Jilid ${order.options.binding}` : ''}
                    </p>
                    ${order.options.notes ? `
                      <p class="text-xs text-on-surface-variant mt-2 italic">"${order.options.notes}"</p>
                    ` : ''}
                  </div>
                  <div class="text-right">
                    <p class="text-lg font-bold text-secondary">${formatCurrency(order.estimate)}</p>
                    <p class="text-xs text-on-surface-variant">${new Date(order.timestamp).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' })}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function updateOrderStatus(code, newStatus) {
  const orders = JSON.parse(localStorage.getItem('dinarOrders') || '[]');
  const orderIndex = orders.findIndex(o => o.code === code);
  
  if (orderIndex !== -1) {
    orders[orderIndex].status = newStatus;
    orders[orderIndex].statusUpdatedAt = new Date().toISOString();
    localStorage.setItem('dinarOrders', JSON.stringify(orders));
    showNotification(`Status pesanan ${code} diubah menjadi "${newStatus}"`, 'success');
  }
}

// ========== INITIALIZE ALL ENHANCED FEATURES ==========
document.addEventListener('DOMContentLoaded', function() {
  initPackages();
  initOrderTracking();
  initAdminPanel();
  
  // Add order history button to header
  const historyBtn = document.createElement('button');
  historyBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">history</span>';
  historyBtn.className = 'w-8 h-8 rounded-full bg-surface-container-high hover:bg-surface-bright flex items-center justify-center transition-all';
  historyBtn.title = 'Riwayat Pesanan';
  historyBtn.onclick = showOrderHistory;
  
  const headerActions = document.querySelector('header .flex.items-center.gap-4');
  if (headerActions) {
    headerActions.insertBefore(historyBtn, headerActions.lastElementChild);
  }
  
  console.log('✅ Enhanced features loaded!');
  console.log('🔑 Admin Panel: Press Ctrl+Shift+A (Password: admin123)');
});
