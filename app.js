// DINAR Fotocopy Web App - JavaScript
// Fase 1: Daftar Harga & Upload File

// Global State
let uploadedFiles = [];
let currentEstimate = 0;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeFilterTabs();
  initializeCalculator();
  initializeFileUpload();
  initializePrintOptions();
});

// ========== DAFTAR HARGA - Filter Tabs ==========
function initializeFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  const items = document.querySelectorAll('.price-item');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const category = this.dataset.category;
      
      // Update active tab
      tabs.forEach(t => {
        t.classList.remove('bg-primary', 'text-on-primary');
        t.classList.add('text-on-surface-variant');
      });
      this.classList.add('bg-primary', 'text-on-primary');
      this.classList.remove('text-on-surface-variant');
      
      // Filter items
      items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function selectService(serviceName, basePrice) {
  // Scroll to calculator
  document.getElementById('kalkulator').scrollIntoView({ behavior: 'smooth' });
  
  // Set service in calculator
  const select = document.getElementById('calc-service');
  select.value = basePrice;
  
  // Show notification
  showNotification(`Layanan "${serviceName}" telah dipilih. Sesuaikan opsi di kalkulator.`, 'success');
}

// ========== KALKULATOR HARGA ==========
function initializeCalculator() {
  const inputs = ['calc-service', 'calc-size', 'calc-paper', 'calc-pages', 'calc-copies', 'calc-duplex'];
  
  inputs.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('change', calculatePrice);
      element.addEventListener('input', calculatePrice);
    }
  });
}

function calculatePrice() {
  const basePrice = parseInt(document.getElementById('calc-service').value);
  const sizeMultiplier = parseFloat(document.getElementById('calc-size').value);
  const paperMultiplier = parseFloat(document.getElementById('calc-paper').value);
  const pages = parseInt(document.getElementById('calc-pages').value) || 0;
  const copies = parseInt(document.getElementById('calc-copies').value) || 1;
  const isDuplex = document.getElementById('calc-duplex').checked;
  
  // Calculate total sheets
  let totalSheets = pages * copies;
  
  // Duplex (bolak-balik) = harga dikali 2
  let duplexMultiplier = isDuplex ? 2 : 1;
  
  // Apply simple volume discount for fotocopy services
  let finalPrice = basePrice;
  if (basePrice < 1000) { // Only fotocopy services (Rp 500)
    if (totalSheets >= 10) {
      finalPrice = basePrice * 0.75; // 25% discount for 10+ sheets
    }
  }
  
  // Calculate total with duplex consideration
  const total = Math.round(finalPrice * totalSheets * sizeMultiplier * paperMultiplier * duplexMultiplier);
  
  // Update display
  document.getElementById('calc-result').textContent = formatCurrency(total);
  document.getElementById('detail-service').textContent = document.getElementById('calc-service').options[document.getElementById('calc-service').selectedIndex].text;
  document.getElementById('detail-pages').textContent = `${pages} halaman`;
  document.getElementById('detail-copies').textContent = `${copies}x`;
  document.getElementById('detail-total').textContent = `${totalSheets} lembar${isDuplex ? ' (bolak-balik x2)' : ''}`;
}

// ========== UPLOAD FILE ==========
function initializeFileUpload() {
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');
  
  // Drag and drop handlers
  dropZone.addEventListener('dragover', function(e) {
    e.preventDefault();
    this.classList.add('border-secondary');
  });
  
  dropZone.addEventListener('dragleave', function(e) {
    e.preventDefault();
    this.classList.remove('border-secondary');
  });
  
  dropZone.addEventListener('drop', function(e) {
    e.preventDefault();
    this.classList.remove('border-secondary');
    const files = e.dataTransfer.files;
    handleFiles(files);
  });
  
  // File input handler
  fileInput.addEventListener('change', function(e) {
    handleFiles(this.files);
  });
}

function handleFiles(files) {
  const maxFiles = 10;
  const maxSize = 25 * 1024 * 1024; // 25 MB
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'];
  
  // Check file count
  if (uploadedFiles.length + files.length > maxFiles) {
    showNotification(`Maksimal ${maxFiles} file per pesanan`, 'error');
    return;
  }
  
  // Process each file
  Array.from(files).forEach((file, index) => {
    // Validate file type
    if (!allowedTypes.includes(file.type)) {
      showNotification(`File "${file.name}" format tidak didukung`, 'error');
      return;
    }
    
    // Validate file size
    if (file.size > maxSize) {
      showNotification(`File "${file.name}" terlalu besar (max 25 MB)`, 'error');
      return;
    }
    
    // Add to uploaded files
    const fileObj = {
      id: Date.now() + index,
      file: file,
      name: file.name,
      size: file.size,
      type: file.type,
      pages: estimatePages(file)
    };
    
    uploadedFiles.push(fileObj);
    addFileToList(fileObj);
  });
  
  // Update UI
  updateOrderSummary();
  
  // Show print options if files uploaded
  if (uploadedFiles.length > 0) {
    document.getElementById('print-options').classList.remove('hidden');
    document.getElementById('submit-order').disabled = false;
    document.getElementById('submit-order').classList.remove('bg-surface-container-high', 'text-outline', 'cursor-not-allowed');
    document.getElementById('submit-order').classList.add('bg-secondary-container', 'hover:bg-secondary', 'text-on-secondary-container', 'hover:text-on-secondary', 'cursor-pointer');
  }
}

function estimatePages(file) {
  // Simple estimation based on file size
  // For PDF: ~50KB per page, for images: 1 page, for docs: ~20KB per page
  if (file.type === 'application/pdf') {
    return Math.max(1, Math.ceil(file.size / (50 * 1024)));
  } else if (file.type.includes('image')) {
    return 1;
  } else {
    return Math.max(1, Math.ceil(file.size / (20 * 1024)));
  }
}

function addFileToList(fileObj) {
  const fileList = document.getElementById('file-list');
  
  const fileItem = document.createElement('div');
  fileItem.className = 'bg-surface-container p-4 flex items-center justify-between gap-4 animate-fade-in';
  fileItem.id = `file-${fileObj.id}`;
  
  fileItem.innerHTML = `
    <div class="flex items-center gap-3 flex-1">
      <div class="w-10 h-10 bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-[20px]">${getFileIcon(fileObj.type)}</span>
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-bold text-on-surface truncate">${fileObj.name}</p>
        <p class="text-xs text-on-surface-variant">~${fileObj.pages} halaman • ${formatFileSize(fileObj.size)}</p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      ${fileObj.type === 'application/pdf' ? `
        <button onclick="previewFile(${fileObj.id})" class="text-primary hover:text-on-primary transition-colors" title="Preview">
          <span class="material-symbols-outlined text-[20px]">visibility</span>
        </button>
      ` : ''}
      <span class="bg-secondary-container text-on-secondary-container px-2 py-1 text-xs uppercase font-bold">Siap</span>
      <button onclick="removeFile(${fileObj.id})" class="text-error hover:text-on-error transition-colors">
        <span class="material-symbols-outlined text-[20px]">delete</span>
      </button>
    </div>
  `;
  
  fileList.appendChild(fileItem);
}

function removeFile(fileId) {
  // Remove from array
  uploadedFiles = uploadedFiles.filter(f => f.id !== fileId);
  
  // Remove from DOM
  const fileElement = document.getElementById(`file-${fileId}`);
  if (fileElement) {
    fileElement.remove();
  }
  
  // Update UI
  updateOrderSummary();
  
  // Hide options if no files
  if (uploadedFiles.length === 0) {
    document.getElementById('print-options').classList.add('hidden');
    document.getElementById('submit-order').disabled = true;
    document.getElementById('submit-order').classList.add('bg-surface-container-high', 'text-outline', 'cursor-not-allowed');
    document.getElementById('submit-order').classList.remove('bg-secondary-container', 'hover:bg-secondary', 'text-on-secondary-container', 'hover:text-on-secondary', 'cursor-pointer');
  }
  
  showNotification('File berhasil dihapus', 'success');
}

function getFileIcon(mimeType) {
  if (mimeType === 'application/pdf') return 'picture_as_pdf';
  if (mimeType.includes('word')) return 'description';
  if (mimeType.includes('image')) return 'image';
  return 'draft';
}

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// ========== PRINT OPTIONS ==========
function initializePrintOptions() {
  // Binding checkbox toggle
  const bindingCheckbox = document.getElementById('print-binding');
  const bindingOptions = document.getElementById('binding-options');
  
  if (bindingCheckbox) {
    bindingCheckbox.addEventListener('change', function() {
      if (this.checked) {
        bindingOptions.classList.remove('hidden');
      } else {
        bindingOptions.classList.add('hidden');
      }
      updateOrderSummary();
    });
  }
  
  // Update estimate on option change
  const optionInputs = ['print-color', 'print-size', 'print-paper', 'print-copies', 'print-duplex', 'binding-type'];
  optionInputs.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('change', updateOrderSummary);
    }
  });
}

function updateOrderSummary() {
  const totalFiles = uploadedFiles.length;
  const totalPages = uploadedFiles.reduce((sum, file) => sum + file.pages, 0);
  
  // Update file count and pages
  document.getElementById('order-files').textContent = `${totalFiles} file`;
  document.getElementById('order-pages').textContent = totalPages;
  
  if (totalFiles === 0) {
    document.getElementById('order-status').textContent = 'Belum ada file';
    document.getElementById('order-status').className = 'text-outline';
    document.getElementById('order-total').textContent = 'Rp 0';
    return;
  }
  
  document.getElementById('order-status').textContent = 'Siap dipesan';
  document.getElementById('order-status').className = 'text-secondary font-bold';
  
  // Calculate estimate
  const isColor = document.getElementById('print-color')?.value === 'color';
  const copies = parseInt(document.getElementById('print-copies')?.value) || 1;
  const isDuplex = document.getElementById('print-duplex')?.checked;
  const hasBinding = document.getElementById('print-binding')?.checked;
  const bindingType = document.getElementById('binding-type')?.value;
  
  // Base price per page (adjusted for home printing)
  let pricePerPage = isColor ? 2000 : 500; // HVS: 500 B/W, 2000 Color
  
  // Calculate total sheets
  let totalSheets = totalPages * copies;
  
  // Duplex (bolak-balik) = harga dikali 2
  let duplexMultiplier = isDuplex ? 2 : 1;
  
  // Apply simple volume discount for fotocopy
  if (!isColor && totalSheets >= 10) {
    pricePerPage = 375; // Discount 25% for bulk (500 * 0.75)
  }
  
  let estimate = Math.round(totalSheets * pricePerPage * duplexMultiplier);
  
  // Add binding cost (updated prices)
  if (hasBinding) {
    const bindingPrice = parseInt(bindingType) || 0; // Value is now direct price: 3500 or 4000
    estimate += bindingPrice * copies;
  }
  
  currentEstimate = estimate;
  document.getElementById('order-total').textContent = formatCurrency(estimate);
}

// ========== SUBMIT ORDER ==========
function submitOrder() {
  // Validate inputs
  const name = document.getElementById('order-name').value.trim();
  const phone = document.getElementById('order-phone').value.trim();
  
  if (!name || !phone) {
    showNotification('Mohon isi nama dan nomor WhatsApp', 'error');
    return;
  }
  
  if (uploadedFiles.length === 0) {
    showNotification('Mohon upload minimal 1 file', 'error');
    return;
  }
  
  // Generate order code
  const orderCode = generateOrderCode();
  
  // Collect order data
  const orderData = {
    code: orderCode,
    name: name,
    phone: phone,
    files: uploadedFiles.map(f => ({ name: f.name, pages: f.pages })),
    options: {
      color: document.getElementById('print-color').value,
      size: document.getElementById('print-size').value,
      paper: document.getElementById('print-paper').value,
      copies: parseInt(document.getElementById('print-copies').value),
      duplex: document.getElementById('print-duplex').checked,
      binding: document.getElementById('print-binding').checked ? document.getElementById('binding-type').value : null,
      notes: document.getElementById('print-notes').value
    },
    estimate: currentEstimate,
    timestamp: new Date().toISOString()
  };
  
  // In production, this would send to backend
  console.log('Order submitted:', orderData);
  
  // Save to localStorage for demo
  saveOrder(orderData);
  
  // Show success modal
  showOrderSuccess(orderData);
}

function generateOrderCode() {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 99999).toString().padStart(5, '0');
  return `DNR-${year}-${random}`;
}

function saveOrder(orderData) {
  const orders = JSON.parse(localStorage.getItem('dinarOrders') || '[]');
  orders.push(orderData);
  localStorage.setItem('dinarOrders', JSON.stringify(orders));
}

function showOrderSuccess(orderData) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-surface-container-lowest/90 backdrop-blur-sm flex items-center justify-center z-50 p-6';
  modal.innerHTML = `
    <div class="bg-surface-container max-w-lg w-full p-8 space-y-6">
      <div class="text-center">
        <div class="w-16 h-16 bg-secondary-container text-on-secondary-container flex items-center justify-center mx-auto mb-4">
          <span class="material-symbols-outlined text-[40px]">check_circle</span>
        </div>
        <h2 class="text-2xl font-bold text-on-surface uppercase">Pesanan Berhasil Dikirim!</h2>
        <p class="text-sm text-on-surface-variant mt-2">Terima kasih ${orderData.name}, pesanan Anda sedang kami proses</p>
      </div>
      
      <div class="bg-surface-container-high p-6 space-y-3">
        <div class="text-center">
          <span class="text-xs uppercase tracking-wider text-on-surface-variant">Kode Pesanan</span>
          <p class="text-3xl font-extrabold text-primary mt-1">${orderData.code}</p>
          <p class="text-xs text-on-surface-variant mt-2">Simpan kode ini untuk tracking pesanan</p>
        </div>
        
        <div class="border-t border-outline-variant pt-3 space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-on-surface-variant">Total File:</span>
            <span class="text-on-surface font-bold">${orderData.files.length} file</span>
          </div>
          <div class="flex justify-between">
            <span class="text-on-surface-variant">Total Halaman:</span>
            <span class="text-on-surface font-bold">${orderData.files.reduce((sum, f) => sum + f.pages, 0)} halaman</span>
          </div>
          <div class="flex justify-between">
            <span class="text-on-surface-variant">Estimasi Biaya:</span>
            <span class="text-secondary font-bold text-lg">${formatCurrency(orderData.estimate)}</span>
          </div>
        </div>
      </div>
      
      <div class="bg-primary-container/20 border border-primary-container p-4">
        <div class="flex items-start gap-2">
          <span class="material-symbols-outlined text-primary text-[20px]">info</span>
          <div class="text-xs text-on-surface">
            <p class="font-bold mb-1">Langkah Selanjutnya:</p>
            <ol class="list-decimal list-inside space-y-1">
              <li>Kami akan hubungi via WhatsApp dalam 5 menit</li>
              <li>Konfirmasi final & pembayaran saat pengambilan</li>
              <li>Estimasi selesai: 12-20 menit</li>
            </ol>
          </div>
        </div>
      </div>
      
      <div class="flex flex-col gap-3">
        <a href="https://wa.me/6281234567890?text=Halo%20DINAR,%20saya%20baru%20pesan%20dengan%20kode%20${orderData.code}" target="_blank" class="w-full bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-on-secondary py-3 text-xs font-bold uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2">
          <span class="material-symbols-outlined text-[20px]">chat</span>
          <span>Chat via WhatsApp</span>
        </a>
        <button onclick="closeModal(this)" class="w-full bg-surface-container-high hover:bg-surface-bright text-on-surface py-3 text-xs font-bold uppercase tracking-wider transition-all">
          Tutup
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Reset form
  uploadedFiles = [];
  document.getElementById('file-list').innerHTML = '';
  document.getElementById('print-options').classList.add('hidden');
  document.getElementById('order-name').value = '';
  document.getElementById('order-phone').value = '';
  document.getElementById('print-notes').value = '';
  updateOrderSummary();
}

function closeModal(button) {
  const modal = button.closest('.fixed');
  if (modal) {
    modal.remove();
  }
}

// ========== UTILITIES ==========
function formatCurrency(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  const colors = {
    success: 'bg-secondary-container text-on-secondary-container',
    error: 'bg-error text-on-error',
    info: 'bg-primary-container text-on-primary-container'
  };
  
  notification.className = `fixed top-24 right-6 ${colors[type]} px-6 py-3 shadow-lg z-50 flex items-center gap-2 text-sm font-bold`;
  notification.innerHTML = `
    <span class="material-symbols-outlined text-[20px]">${type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info'}</span>
    <span>${message}</span>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.transition = 'opacity 0.3s';
    notification.style.opacity = '0';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ========== FILE PREVIEW ==========
function previewFile(fileId) {
  const fileObj = uploadedFiles.find(f => f.id === fileId);
  if (!fileObj) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-surface-container-lowest/95 backdrop-blur-sm flex items-center justify-center z-50 p-6';
    modal.innerHTML = `
      <div class="bg-surface-container max-w-4xl w-full h-[90vh] flex flex-col">
        <div class="p-4 border-b border-outline-variant flex items-center justify-between">
          <div>
            <h3 class="text-lg font-bold text-on-surface">${fileObj.name}</h3>
            <p class="text-xs text-on-surface-variant">Preview File • ~${fileObj.pages} halaman</p>
          </div>
          <button onclick="this.closest('.fixed').remove()" class="text-on-surface hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>
        <div class="flex-1 overflow-auto p-4 bg-surface-container-low">
          <iframe src="${e.target.result}" class="w-full h-full border-0 bg-white"></iframe>
        </div>
        <div class="p-4 border-t border-outline-variant flex gap-2 justify-end">
          <button onclick="this.closest('.fixed').remove()" class="bg-surface-container-high hover:bg-surface-bright text-on-surface px-4 py-2 text-xs uppercase font-bold transition-all">
            Tutup
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  };
  reader.readAsDataURL(fileObj.file);
}

// ========== ANIMATIONS & POLISH ==========
// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out;
  }
  
  .hover-lift {
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .hover-lift:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  /* Product Image Styles */
  .price-item img {
    transition: transform 0.3s ease;
  }
  
  .price-item:hover img {
    transform: scale(1.05);
  }
  
  .price-item {
    transition: all 0.2s ease;
  }
  
  .price-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
`;
document.head.appendChild(style);


// ============================================
// IMAGE LIGHTBOX FUNCTIONS
// ============================================

/**
 * Open lightbox modal with image
 * @param {string} src - Image source URL
 * @param {string} alt - Image alt text
 */
function openLightbox(src, alt) {
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add('active');
  
  // Prevent body scroll when lightbox is open
  document.body.style.overflow = 'hidden';
}

/**
 * Close lightbox modal
 * @param {Event} event - Click event
 */
function closeLightbox(event) {
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  
  // Only close if clicking on backdrop or close button, not on image
  if (event.target === lightbox || event.target.classList.contains('image-lightbox-close')) {
    lightbox.classList.remove('active');
    
    // Re-enable body scroll
    document.body.style.overflow = 'auto';
    
    // Clear image source after animation
    setTimeout(() => {
      lightboxImage.src = '';
    }, 300);
  }
}

// Close lightbox on ESC key press
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const lightbox = document.getElementById('imageLightbox');
    if (lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
      
      setTimeout(() => {
        document.getElementById('lightboxImage').src = '';
      }, 300);
    }
  }
});

console.log('✅ Image Lightbox initialized - Click any product image to zoom!');
