// Ikon untuk setiap kategori
const categoryIcons = {
    'all': 'fas fa-border-all',
    'smileys_emotion': 'fas fa-smile',
    'people_body': 'fas fa-user',
    'animals_nature': 'fas fa-leaf',
    'food_drink': 'fas fa-utensils',
    'travel_places': 'fas fa-plane',
    'activities': 'fas fa-basketball-ball',
    'objects': 'fas fa-lightbulb',
    'symbols': 'fas fa-heart',
    'flags': 'fas fa-flag'
};

// Variabel state
let selectedEmoji1Value = '';
let selectedEmoji2Value = '';
let emojiData = null;
let allEmojis = [];
let currentCategory1 = 'all';
let currentCategory2 = 'all';
let currentImageData = null;
let supportedEmojis = [];

// Set random logo
function setRandomLogo() {
    const emojis = ['🥴', '😍', '😂', '🥰', '😎', '🤩', '😜', '🤪', '🤑', '🤯'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    document.getElementById('logo').textContent = randomEmoji;
}

// Load emoji data dari Emoji Mart
async function loadEmojiData() {
    try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@emoji-mart/data');
        emojiData = await response.json();
        
        // Proses data emoji
        processEmojiData();
        
        // Render kategori
        renderCategories(document.getElementById('categories1'), 1);
        renderCategories(document.getElementById('categories2'), 2);
        
        // Render emoji
        renderEmojiGrid(document.getElementById('emojiList1'), allEmojis, 1);
        renderEmojiGrid(document.getElementById('emojiList2'), allEmojis, 2);
    } catch (error) {
        console.error('Gagal memuat data emoji:', error);
        showError('Gagal memuat data emoji. Silakan refresh halaman.');
    }
}

// Proses data emoji
function processEmojiData() {
    if (!emojiData || !emojiData.categories || !emojiData.emojis) return;
    
    // Ekstrak semua emoji
    allEmojis = [];
    for (const key in emojiData.emojis) {
        if (emojiData.emojis.hasOwnProperty(key)) {
            const emoji = emojiData.emojis[key];
            allEmojis.push({
                id: emoji.id,
                name: emoji.name,
                native: emoji.skins[0].native,
                unified: emoji.unified,
                keywords: emoji.keywords || [],
                category: getCategoryName(emoji.category),
                shortcodes: emoji.shortcodes || []
            });
        }
    }
    
    // Daftar emoji yang didukung (contoh)
    supportedEmojis = allEmojis.filter(emoji => 
        !['flags', 'symbols'].includes(emoji.category)
    ).map(emoji => emoji.native);
}

// Dapatkan nama kategori berdasarkan ID
function getCategoryName(categoryId) {
    if (!emojiData.categories) return 'other';
    
    const category = emojiData.categories.find(cat => cat.id === categoryId);
    return category ? category.id : 'other';
}

// Render kategori
function renderCategories(container, gridNumber) {
    if (!emojiData.categories) return;
    
    // Tambahkan kategori "All"
    const allBtn = document.createElement('button');
    allBtn.className = 'category-btn active';
    allBtn.innerHTML = `<i class="${categoryIcons['all']}"></i> All`;
    allBtn.addEventListener('click', () => filterByCategory('all', gridNumber));
    container.appendChild(allBtn);
    
    // Tambahkan kategori lainnya
    emojiData.categories.forEach(category => {
        const categoryBtn = document.createElement('button');
        categoryBtn.className = 'category-btn';
        categoryBtn.innerHTML = `<i class="${categoryIcons[category.id] || 'fas fa-question'}"></i> ${category.name}`;
        categoryBtn.addEventListener('click', () => filterByCategory(category.id, gridNumber));
        container.appendChild(categoryBtn);
    });
}

// Filter emoji berdasarkan kategori
function filterByCategory(categoryId, gridNumber) {
    // Update active button
    const container = gridNumber === 1 ? document.getElementById('categories1') : document.getElementById('categories2');
    const buttons = container.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = Array.from(buttons).find(btn => 
        (categoryId === 'all' && btn.querySelector('i').className === categoryIcons['all']) || 
        btn.textContent.includes(emojiData.categories.find(c => c.id === categoryId)?.name)
    );
    
    if (activeBtn) activeBtn.classList.add('active');
    
    // Filter emoji
    let filteredEmojis = [];
    if (categoryId === 'all') {
        filteredEmojis = allEmojis;
    } else {
        const categoryName = getCategoryName(categoryId);
        filteredEmojis = allEmojis.filter(emoji => emoji.category === categoryName);
    }
    
    // Simpan kategori aktif
    if (gridNumber === 1) {
        currentCategory1 = categoryId;
    } else {
        currentCategory2 = categoryId;
    }
    
    // Render emoji
    renderEmojiGrid(gridNumber === 1 ? document.getElementById('emojiList1') : document.getElementById('emojiList2'), filteredEmojis, gridNumber);
}

// Render emoji grid
function renderEmojiGrid(container, emojis, gridNumber) {
    container.innerHTML = '';
    
    if (emojis.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'Tidak ada hasil yang ditemukan';
        container.appendChild(noResults);
        return;
    }
    
    emojis.forEach(emoji => {
        const isSupported = supportedEmojis.includes(emoji.native);
        
        const emojiItem = document.createElement('div');
        emojiItem.className = `emoji-item ${isSupported ? '' : 'unsupported'}`;
        if (!isSupported) {
            emojiItem.title = 'Emoji ini tidak didukung untuk di-mix';
        } else {
            emojiItem.title = emoji.name;
        }
        emojiItem.textContent = emoji.native;
        
        if (isSupported) {
            emojiItem.addEventListener('click', () => selectEmoji(emoji.native, gridNumber));
        }
        
        // Highlight jika sudah dipilih
        if ((gridNumber === 1 && emoji.native === selectedEmoji1Value) || 
            (gridNumber === 2 && emoji.native === selectedEmoji2Value)) {
            emojiItem.classList.add('selected');
        }
        
        container.appendChild(emojiItem);
    });
}

// Pilih emoji
function selectEmoji(emoji, gridNumber) {
    playSound(document.getElementById('clickSound'));
    
    if (gridNumber === 1) {
        // Pastikan emoji tidak sama dengan emoji kedua
        if (emoji === selectedEmoji2Value) {
            showError('Emoji pertama dan kedua tidak boleh sama');
            if (document.getElementById('vibrationToggle').checked) {
                document.querySelector('.emoji-selector-container').classList.add('vibrate');
                setTimeout(() => {
                    document.querySelector('.emoji-selector-container').classList.remove('vibrate');
                }, 300);
            }
            return;
        }
        
        selectedEmoji1Value = emoji;
        document.getElementById('selectedEmoji1').innerHTML = `<span class="${document.getElementById('animationToggle').checked ? 'animated-emoji' : ''}">${emoji}</span>`;
        document.getElementById('browseEmoji1').style.display = 'inline-flex';
        
        // Update highlight
        const emojiItems = document.getElementById('emojiList1').querySelectorAll('.emoji-item');
        emojiItems.forEach(item => {
            item.classList.remove('selected');
            if (item.textContent === emoji) {
                item.classList.add('selected');
            }
        });
    } else {
        // Pastikan emoji tidak sama dengan emoji pertama
        if (emoji === selectedEmoji1Value) {
            showError('Emoji pertama dan kedua tidak boleh sama');
            if (document.getElementById('vibrationToggle').checked) {
                document.querySelector('.emoji-selector-container').classList.add('vibrate');
                setTimeout(() => {
                    document.querySelector('.emoji-selector-container').classList.remove('vibrate');
                }, 300);
            }
            return;
        }
        
        selectedEmoji2Value = emoji;
        document.getElementById('selectedEmoji2').innerHTML = `<span class="${document.getElementById('animationToggle').checked ? 'animated-emoji' : ''}">${emoji}</span>`;
        document.getElementById('browseEmoji2').style.display = 'inline-flex';
        
        // Update highlight
        const emojiItems = document.getElementById('emojiList2').querySelectorAll('.emoji-item');
        emojiItems.forEach(item => {
            item.classList.remove('selected');
            if (item.textContent === emoji) {
                item.classList.add('selected');
            }
        });
    }
    
    updatePreview();
    hideError();
}

// Acak emoji
function shuffleEmoji(gridNumber) {
    playSound(document.getElementById('clickSound'));
    
    let availableEmojis = allEmojis.filter(emoji => {
        const isSupported = supportedEmojis.includes(emoji.native);
        if (!isSupported) return false;
        
        if (gridNumber === 1) {
            return emoji.native !== selectedEmoji2Value;
        } else {
            return emoji.native !== selectedEmoji1Value;
        }
    });
    
    if (availableEmojis.length === 0) {
        showError('Tidak ada emoji lain yang tersedia');
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * availableEmojis.length);
    selectEmoji(availableEmojis[randomIndex].native, gridNumber);
}

// Hapus emoji
function clearEmoji(gridNumber) {
    playSound(document.getElementById('clickSound'));
    
    if (gridNumber === 1) {
        selectedEmoji1Value = '';
        document.getElementById('selectedEmoji1').textContent = 'Pilih emoji pertama';
        document.getElementById('browseEmoji1').style.display = 'none';
        
        // Hapus highlight
        const emojiItems = document.getElementById('emojiList1').querySelectorAll('.emoji-item');
        emojiItems.forEach(item => {
            item.classList.remove('selected');
        });
    } else {
        selectedEmoji2Value = '';
        document.getElementById('selectedEmoji2').textContent = 'Pilih emoji kedua';
        document.getElementById('browseEmoji2').style.display = 'none';
        
        // Hapus highlight
        const emojiItems = document.getElementById('emojiList2').querySelectorAll('.emoji-item');
        emojiItems.forEach(item => {
            item.classList.remove('selected');
        });
    }
    
    updatePreview();
}

// Update preview
function updatePreview() {
    if (selectedEmoji1Value && selectedEmoji2Value) {
        document.getElementById('emojiPreview').textContent = `${selectedEmoji1Value} + ${selectedEmoji2Value}`;
    } else {
        document.getElementById('emojiPreview').textContent = '';
    }
}

// Cari emoji
function setupSearch(inputElement, gridNumber) {
    inputElement.addEventListener('input', () => {
        const searchTerm = inputElement.value.toLowerCase();
        
        let filteredEmojis = [];
        if (searchTerm === '') {
            // Jika pencarian kosong, tampilkan berdasarkan kategori
            const categoryId = gridNumber === 1 ? currentCategory1 : currentCategory2;
            if (categoryId === 'all') {
                filteredEmojis = allEmojis;
            } else {
                const categoryName = getCategoryName(categoryId);
                filteredEmojis = allEmojis.filter(emoji => emoji.category === categoryName);
            }
        } else {
            // Filter berdasarkan kata kunci, nama, atau kode unified
            filteredEmojis = allEmojis.filter(emoji => {
                return emoji.name.toLowerCase().includes(searchTerm) || 
                       emoji.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm)) ||
                       emoji.unified.toLowerCase().includes(searchTerm);
            });
        }
        
        renderEmojiGrid(gridNumber === 1 ? document.getElementById('emojiList1') : document.getElementById('emojiList2'), filteredEmojis, gridNumber);
    });
}

// Generate emoji mix
async function generateEmojiMix() {
    if (!selectedEmoji1Value || !selectedEmoji2Value) {
        showError('Pilih dua emoji untuk digabungkan');
        return;
    }
    
    try {
        showLoading();
        hideError();
        hideSuccess();
        
        // Encode emoji menggunakan native representation
        const encodedEmoji1 = encodeURIComponent(selectedEmoji1Value);
        const encodedEmoji2 = encodeURIComponent(selectedEmoji2Value);
        
        // Panggil API Google Tenor
        const response = await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodedEmoji1}_${encodedEmoji2}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
            const imageUrl = data.results[0].url;
            
            // Load gambar ke canvas
            const ctx = document.getElementById('resultCanvas').getContext('2d');
            const img = new Image();
            img.crossOrigin = "Anonymous";
            
            img.onload = function() {
                // Clear canvas
                ctx.clearRect(0, 0, document.getElementById('resultCanvas').width, document.getElementById('resultCanvas').height);
                
                // Draw image to canvas
                ctx.drawImage(img, 0, 0, document.getElementById('resultCanvas').width, document.getElementById('resultCanvas').height);
                
                // Simpan data gambar
                currentImageData = document.getElementById('resultCanvas').toDataURL('image/png');
                
                // Tampilkan canvas
                document.getElementById('resultCanvas').style.display = 'block';
                
                // Aktifkan tombol unduh dan salin
                document.getElementById('downloadBtn').disabled = false;
                document.getElementById('copyBtn').disabled = false;
                
                hideLoading();
                playSound(document.getElementById('successSound'));
                showSuccess('Emoji mix berhasil dibuat!');
            };
            
            img.onerror = function() {
                throw new Error('Gagal memuat gambar');
            };
            
            img.src = imageUrl;
        } else {
            throw new Error('Tidak ada hasil yang ditemukan untuk kombinasi emoji ini');
        }
    } catch (err) {
        hideLoading();
        playSound(document.getElementById('errorSound'));
        showError('Gagal membuat emoji mix: ' + err.message);
    }
}

// Unduh gambar
function downloadImage() {
    if (!currentImageData) return;
    
    const a = document.createElement('a');
    a.href = currentImageData;
    a.download = `emoji-mix-${selectedEmoji1Value}-${selectedEmoji2Value}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    playSound(document.getElementById('successSound'));
    showSuccess('Gambar berhasil diunduh!');
}

// Salin gambar ke clipboard
async function copyImageToClipboard() {
    if (!currentImageData) return;
    
    try {
        // Convert data URL to blob
        const response = await fetch(currentImageData);
        const blob = await response.blob();
        
        // Copy to clipboard
        await navigator.clipboard.write([
            new ClipboardItem({
                [blob.type]: blob
            })
        ]);
        
        playSound(document.getElementById('successSound'));
        showSuccess('Gambar berhasil disalin ke clipboard!');
    } catch (err) {
        playSound(document.getElementById('errorSound'));
        showError('Gagal menyalin gambar: ' + err.message);
    }
}

// Browse hasil mix untuk emoji tertentu
function browseMixResults(emoji, gridNumber) {
    // Untuk demo, kita akan mencari kombinasi yang populer dengan emoji ini
    playSound(document.getElementById('clickSound'));
    showSuccess(`Mencari hasil mix untuk ${emoji}...`);
    
    // Dalam implementasi nyata, ini akan membuka halaman atau panel dengan hasil mix
}

// Pengaturan tema
function setupThemeToggle() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('themeToggle').checked = true;
    }
    
    document.getElementById('themeToggle').addEventListener('change', () => {
        if (document.getElementById('themeToggle').checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Pengaturan warna kustom
function setupColorPickers() {
    // Load saved colors
    const savedPrimaryColor = localStorage.getItem('primaryColor');
    if (savedPrimaryColor) {
        document.getElementById('primaryColorPicker').value = savedPrimaryColor;
        document.getElementById('primaryColorPreview').style.backgroundColor = savedPrimaryColor;
        document.documentElement.style.setProperty('--primary', savedPrimaryColor);
    }
    
    const savedSecondaryColor = localStorage.getItem('secondaryColor');
    if (savedSecondaryColor) {
        document.getElementById('secondaryColorPicker').value = savedSecondaryColor;
        document.getElementById('secondaryColorPreview').style.backgroundColor = savedSecondaryColor;
        document.documentElement.style.setProperty('--secondary', savedSecondaryColor);
    }
    
    const savedBackgroundColor = localStorage.getItem('backgroundColor');
    if (savedBackgroundColor) {
        document.getElementById('backgroundColorPicker').value = savedBackgroundColor;
        document.getElementById('backgroundColorPreview').style.backgroundColor = savedBackgroundColor;
        document.documentElement.style.setProperty('--background', savedBackgroundColor);
    }
    
    // Add event listeners
    document.getElementById('primaryColorPicker').addEventListener('input', (e) => {
        const color = e.target.value;
        document.getElementById('primaryColorPreview').style.backgroundColor = color;
        document.documentElement.style.setProperty('--primary', color);
        localStorage.setItem('primaryColor', color);
    });
    
    document.getElementById('secondaryColorPicker').addEventListener('input', (e) => {
        const color = e.target.value;
        document.getElementById('secondaryColorPreview').style.backgroundColor = color;
        document.documentElement.style.setProperty('--secondary', color);
        localStorage.setItem('secondaryColor', color);
    });
    
    document.getElementById('backgroundColorPicker').addEventListener('input', (e) => {
        const color = e.target.value;
        document.getElementById('backgroundColorPreview').style.backgroundColor = color;
        document.documentElement.style.setProperty('--background', color);
        localStorage.setItem('backgroundColor', color);
    });
}

// Pengaturan font
function setupFontSelect() {
    const savedFont = localStorage.getItem('font');
    if (savedFont) {
        document.getElementById('fontSelect').value = savedFont;
        document.body.style.fontFamily = savedFont;
    }
    
    document.getElementById('fontSelect').addEventListener('change', () => {
        document.body.style.fontFamily = document.getElementById('fontSelect').value;
        localStorage.setItem('font', document.getElementById('fontSelect').value);
    });
}

// Toggle pengaturan
function setupSettingsPanel() {
    document.getElementById('settingsBtn').addEventListener('click', () => {
        document.getElementById('settingsPanel').classList.toggle('active');
        playSound(document.getElementById('clickSound'));
    });
    
    document.getElementById('closeSettings').addEventListener('click', () => {
        document.getElementById('settingsPanel').classList.remove('active');
        playSound(document.getElementById('clickSound'));
    });
    
    // Tutup panel settings ketika klik di luar
    document.addEventListener('click', (e) => {
        if (!document.getElementById('settingsPanel').contains(e.target) && e.target !== document.getElementById('settingsBtn')) {
            document.getElementById('settingsPanel').classList.remove('active');
        }
    });
}

// Play sound effect
function playSound(soundElement) {
    if (document.getElementById('soundToggle').checked) {
        soundElement.currentTime = 0;
        soundElement.play().catch(e => console.log("Audio play failed:", e));
    }
}

// Fungsi bantuan UI
function showLoading() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('resultCanvas').style.display = 'none';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

function showError(message) {
    document.getElementById('error').textContent = message;
    document.getElementById('error').style.display = 'block';
    document.getElementById('success').style.display = 'none';
}

function hideError() {
    document.getElementById('error').style.display = 'none';
}

function showSuccess(message) {
    document.getElementById('success').textContent = message;
    document.getElementById('success').style.display = 'block';
    document.getElementById('error').style.display = 'none';
}

function hideSuccess() {
    document.getElementById('success').style.display = 'none';
}

// Setup event listeners
function setupEventListeners() {
    // Shuffle buttons
    document.getElementById('shuffleEmoji1').addEventListener('click', () => shuffleEmoji(1));
    document.getElementById('shuffleEmoji2').addEventListener('click', () => shuffleEmoji(2));
    
    // Clear buttons
    document.getElementById('clearEmoji1').addEventListener('click', () => clearEmoji(1));
    document.getElementById('clearEmoji2').addEventListener('click', () => clearEmoji(2));
    
    // Browse buttons
    document.getElementById('browseEmoji1').addEventListener('click', () => browseMixResults(selectedEmoji1Value, 1));
    document.getElementById('browseEmoji2').addEventListener('click', () => browseMixResults(selectedEmoji2Value, 2));
    
    // Search inputs
    setupSearch(document.getElementById('searchEmoji1'), 1);
    setupSearch(document.getElementById('searchEmoji2'), 2);
    
    // Generate button
    document.getElementById('generateBtn').addEventListener('click', generateEmojiMix);
    
    // Download and copy buttons
    document.getElementById('downloadBtn').addEventListener('click', downloadImage);
    document.getElementById('copyBtn').addEventListener('click', copyImageToClipboard);
    
    // Settings toggles
    setupThemeToggle();
    setupColorPickers();
    setupFontSelect();
    setupSettingsPanel();
    
    // Load saved sound preference
    const savedSound = localStorage.getItem('sound');
    if (savedSound !== null) {
        document.getElementById('soundToggle').checked = savedSound === 'true';
    }
    
    document.getElementById('soundToggle').addEventListener('change', () => {
        localStorage.setItem('sound', document.getElementById('soundToggle').checked);
    });
    
    // Load saved vibration preference
    const savedVibration = localStorage.getItem('vibration');
    if (savedVibration !== null) {
        document.getElementById('vibrationToggle').checked = savedVibration === 'true';
    }
    
    document.getElementById('vibrationToggle').addEventListener('change', () => {
        localStorage.setItem('vibration', document.getElementById('vibrationToggle').checked);
    });
    
    // Load saved animation preference
    const savedAnimation = localStorage.getItem('animation');
    if (savedAnimation !== null) {
        document.getElementById('animationToggle').checked = savedAnimation === 'true';
    }
    
    document.getElementById('animationToggle').addEventListener('change', () => {
        localStorage.setItem('animation', document.getElementById('animationToggle').checked);
    });
}

// Inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', async function() {
    setRandomLogo();
    await loadEmojiData();
    setupEventListeners();
});
