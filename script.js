// Emoji fallback mapping
const emojiFallbacks = {
    "😀": "wajah tersenyum",
    "😃": "wajah tersenyum lebar",
    "😄": "wajah tersenyum dengan mata tersenyum",
    "😁": "wajah berseri dengan mata berseri",
    "😆": "wajah tersenyum lebar dengan mata tertutup",
    "😅": "wajah tersenyum dengan keringat",
    "🤣": "tertawa terbahak-bahak",
    "😂": "wajah dengan air mata bahagia",
    "🙂": "wajah sedikit tersenyum",
    "🙃": "wajah terbalik",
    "😉": "wajah mengedip",
    "😊": "wajah tersenyum dengan mata tersenyum",
    "😇": "wajah tersenyum dengan halo",
    "🥰": "wajah tersenyum dengan hati",
    "😍": "wajah tersenyum dengan mata hati",
    "🤩": "wajah berseri dengan bintang",
    "😘": "wajah meniup ciuman",
    "😗": "wajah mencium",
    "☺️": "wajah tersenyum",
    "😚": "wajah mencium dengan mata tertutup",
    "😙": "wajah mencium dengan mata tersenyum",
    "🥲": "wajah tersenyum dengan air mata",
    "😋": "wajah menikmati makanan lezat",
    "😛": "wajah dengan lidah terjulur",
    "😜": "wajah mengedip dengan lidah terjulur",
    "🤪": "wajah konyol",
    "😝": "wajah dengan mata terpicing dan lidah terjulur",
    "🤑": "wajah dengan mulut uang",
    "🤗": "wajah memeluk",
    "🤭": "wajah dengan tangan menutup mulut",
    "🤫": "wajah bersuara sss",
    "🤔": "wajah berpikir",
    "🤐": "wajah dengan mulut terkunci",
    "🤨": "wajah dengan alis terangkat",
    "😐": "wajah netral",
    "😑": "wajah tanpa ekspresi",
    "😶": "wajah tanpa mulut",
    "😏": "wajah tersenyum sinis",
    "😒": "wajah tidak antusias",
    "🙄": "wajah dengan mata melirik",
    "😬": "wajah meringis",
    "🤥": "wajah berbohong",
    "😌": "wajah lega",
    "😔": "wajah sedih",
    "😪": "wajah mengantuk",
    "🤤": "wajah ngiler",
    "😴": "wajah tidur",
    "😷": "wajah dengan masker",
    "🤒": "wajah dengan termometer",
    "🤕": "wajah dengan perban",
    "🤢": "wajah mual",
    "🤮": "wajah muntah",
    "🤧": "wajah bersin",
    "🥵": "wajah kepanasan",
    "🥶": "wajah kedinginan",
    "🥴": "wajah pusing",
    "😵": "wajah pusing",
    "🤯": "wajah meledak",
    "🤠": "wajah koboi",
    "🥳": "wajah pesta",
    "🥸": "wajah menyamar",
    "😎": "wajah tersenyum dengan kacamata hitam",
    "🤓": "wajah kutu buku",
    "🧐": "wajah dengan monokel",
    "😕": "wajah bingung",
    "😟": "wajah khawatir",
    "🙁": "wajah sedikit cemberut",
    "☹️": "wajah cemberut",
    "😮": "wajah dengan mulut terbuka",
    "😯": "wajah terkejut",
    "😲": "wajah tertegun",
    "😳": "wajah memerah",
    "🥺": "wajah memohon",
    "😦": "wajah cemberut dengan mulut terbuka",
    "😧": "wajah kesakitan",
    "😨": "wajah ketakutan",
    "😰": "wajah cemas dengan keringat",
    "😥": "wajah kecewa tapi lega",
    "😢": "wajah menangis",
    "😭": "wajah menangis keras",
    "😱": "wajah berteriak ketakutan",
    "😖": "wajah kesal",
    "😣": "wajah gigih",
    "😞": "wajah kecewa",
    "😓": "wajah lelah dengan keringat",
    "😩": "wajah lelah",
    "😫": "wajah lelah",
    "🥱": "wajah menguap",
    "😤": "wajah dengan uap dari hidung",
    "😡": "wajah cemberut",
    "😠": "wajah marah",
    "🤬": "wajah dengan simbol di mulut",
    "😈": "wajah tersenyum dengan tanduk",
    "👿": "wajah marah dengan tanduk",
    "💀": "tengkorak",
    "☠️": "tengkorak dan tulang bersilang",
    "💩": "tumpukan kotoran",
    "🤡": "wajah badut",
    "👹": "ogre",
    "👺": "goblin",
    "👻": "hantu",
    "👽": "alien",
    "👾": "monster alien",
    "🤖": "wajah robot",
    "😺": "kucing tersenyum",
    "😸": "kucing tersenyum dengan mata tersenyum",
    "😹": "kucing dengan air mata bahagia",
    "😻": "kucing tersenyum dengan mata hati",
    "😼": "kucing dengan senyum sinis",
    "😽": "kucing mencium",
    "🙀": "kucing terkejut",
    "😿": "kucing menangis",
    "😾": "kucing cemberut",
    // Tambahkan lebih banyak mapping emoji di sini sesuai kebutuhan
};

document.addEventListener('DOMContentLoaded', async function() {
    // Elemen DOM
    const logo = document.getElementById('logo');
    const emojiList1 = document.getElementById('emojiList1');
    const emojiList2 = document.getElementById('emojiList2');
    const categories1 = document.getElementById('categories1');
    const categories2 = document.getElementById('categories2');
    const searchEmoji1 = document.getElementById('searchEmoji1');
    const searchEmoji2 = document.getElementById('searchEmoji2');
    const shuffleEmoji1 = document.getElementById('shuffleEmoji1');
    const shuffleEmoji2 = document.getElementById('shuffleEmoji2');
    const clearEmoji1 = document.getElementById('clearEmoji1');
    const clearEmoji2 = document.getElementById('clearEmoji2');
    const selectedEmoji1 = document.getElementById('selectedEmoji1');
    const selectedEmoji2 = document.getElementById('selectedEmoji2');
    const browseEmoji1 = document.getElementById('browseEmoji1');
    const browseEmoji2 = document.getElementById('browseEmoji2');
    const generateBtn = document.getElementById('generateBtn');
    const emojiPreview = document.getElementById('emojiPreview');
    const resultCanvas = document.getElementById('resultCanvas');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const success = document.getElementById('success');
    const downloadBtn = document.getElementById('downloadBtn');
    const copyBtn = document.getElementById('copyBtn');
    const shareBtn = document.getElementById('shareBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsPanel = document.getElementById('settingsPanel');
    const closeSettings = document.getElementById('closeSettings');
    const themeToggle = document.getElementById('themeToggle');
    const soundToggle = document.getElementById('soundToggle');
    const vibrationToggle = document.getElementById('vibrationToggle');
    const animationToggle = document.getElementById('animationToggle');
    const primaryColorPicker = document.getElementById('primaryColorPicker');
    const secondaryColorPicker = document.getElementById('secondaryColorPicker');
    const backgroundColorPicker = document.getElementById('backgroundColorPicker');
    const primaryColorPreview = document.getElementById('primaryColorPreview');
    const secondaryColorPreview = document.getElementById('secondaryColorPreview');
    const backgroundColorPreview = document.getElementById('backgroundColorPreview');
    const fontSelect = document.getElementById('fontSelect');
    
    // Sound elements
    const clickSound = document.getElementById('clickSound');
    const successSound = document.getElementById('successSound');
    const errorSound = document.getElementById('errorSound');

    // Variabel state
    let selectedEmoji1Value = '';
    let selectedEmoji2Value = '';
    let emojiData = null;
    let allEmojis = [];
    let currentCategory1 = 'all';
    let currentCategory2 = 'all';
    let currentImageData = null;
    let supportedEmojis = [];

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

    // Set random logo
    function setRandomLogo() {
        const emojis = ['🥴', '😍', '😂', '🥰', '😎', '🤩', '😜', '🤪', '🤑', '🤯'];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        logo.textContent = randomEmoji;
        logo.setAttribute('aria-label', emojiFallbacks[randomEmoji] || 'emoji acak');
    }

    // Cek dukungan emoji
    function isEmojiSupported(emoji) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.height = 1;
        ctx.clearRect(0, 0, 1, 1);
        ctx.fillText(emoji, 0, 1);
        return ctx.getImageData(0, 0, 1, 1).data[3] > 0;
    }

    // Dapatkan fallback text untuk emoji
    function getEmojiFallback(emoji) {
        return emojiFallbacks[emoji] || emoji;
    }

    // Load emoji data dari Emoji Mart
    async function loadEmojiData() {
        try {
            // Coba gunakan cache jika tersedia
            const cachedEmojiData = localStorage.getItem('emojiData');
            const cacheTimestamp = localStorage.getItem('emojiDataTimestamp');
            const now = Date.now();
            
            if (cachedEmojiData && cacheTimestamp && (now - cacheTimestamp < 7 * 24 * 60 * 60 * 1000)) {
                // Gunakan data cache jika masih fresh (kurang dari 7 hari)
                emojiData = JSON.parse(cachedEmojiData);
            } else {
                // Fetch data baru
                const response = await fetch('https://cdn.jsdelivr.net/npm/@emoji-mart/data');
                emojiData = await response.json();
                
                // Simpan ke cache
                localStorage.setItem('emojiData', JSON.stringify(emojiData));
                localStorage.setItem('emojiDataTimestamp', now.toString());
            }
            
            // Proses data emoji
            processEmojiData();
            
            // Render kategori
            renderCategories(categories1, 1);
            renderCategories(categories2, 2);
            
            // Render emoji
            renderEmojiGrid(emojiList1, allEmojis, 1);
            renderEmojiGrid(emojiList2, allEmojis, 2);
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
        allBtn.setAttribute('aria-label', 'Semua kategori');
        allBtn.addEventListener('click', () => filterByCategory('all', gridNumber));
        container.appendChild(allBtn);
        
        // Tambahkan kategori lainnya
        emojiData.categories.forEach(category => {
            const categoryBtn = document.createElement('button');
            categoryBtn.className = 'category-btn';
            categoryBtn.innerHTML = `<i class="${categoryIcons[category.id] || 'fas fa-question'}"></i> ${category.name}`;
            categoryBtn.setAttribute('aria-label', `Kategori ${category.name}`);
            categoryBtn.addEventListener('click', () => filterByCategory(category.id, gridNumber));
            container.appendChild(categoryBtn);
        });
    }

    // Filter emoji berdasarkan kategori
    function filterByCategory(categoryId, gridNumber) {
        // Update active button
        const container = gridNumber === 1 ? categories1 : categories2;
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
        renderEmojiGrid(gridNumber === 1 ? emojiList1 : emojiList2, filteredEmojis, gridNumber);
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
            const isEmojiSupportedInBrowser = isEmojiSupported(emoji.native);
            
            const emojiItem = document.createElement('div');
            emojiItem.className = `emoji-item ${isSupported ? '' : 'unsupported'}`;
            
            if (!isSupported) {
                emojiItem.title = 'Emoji ini tidak didukung untuk di-mix';
                emojiItem.setAttribute('aria-label', `Emoji ${emoji.name} tidak didukung untuk di-mix`);
            } else {
                emojiItem.title = emoji.name;
                emojiItem.setAttribute('aria-label', `Emoji ${emoji.name}`);
            }
            
            // Tambahkan emoji dan fallback text jika tidak didukung
            if (isEmojiSupportedInBrowser) {
                emojiItem.textContent = emoji.native;
            } else {
                const fallbackSpan = document.createElement('span');
                fallbackSpan.className = 'emoji-fallback';
                fallbackSpan.textContent = getEmojiFallback(emoji.native);
                
                emojiItem.textContent = '❓'; // Placeholder untuk emoji yang tidak didukung
                emojiItem.appendChild(fallbackSpan);
                emojiItem.classList.add('unsupported');
            }
            
            if (isSupported && isEmojiSupportedInBrowser) {
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
        playSound(clickSound);
        
        if (gridNumber === 1) {
            // Pastikan emoji tidak sama dengan emoji kedua
            if (emoji === selectedEmoji2Value) {
                showError('Emoji pertama dan kedua tidak boleh sama');
                if (vibrationToggle.checked && 'vibrate' in navigator) {
                    try {
                        navigator.vibrate(200);
                    } catch (e) {
                        console.log('Vibration not supported');
                    }
                }
                return;
            }
            
            selectedEmoji1Value = emoji;
            selectedEmoji1.innerHTML = `<span class="${animationToggle.checked ? 'animated-emoji' : ''}" aria-label="${getEmojiFallback(emoji)}">${emoji}</span>`;
            browseEmoji1.style.display = 'inline-flex';
            
            // Update highlight
            const emojiItems = emojiList1.querySelectorAll('.emoji-item');
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
                if (vibrationToggle.checked && 'vibrate' in navigator) {
                    try {
                        navigator.vibrate(200);
                    } catch (e) {
                        console.log('Vibration not supported');
                    }
                }
                return;
            }
            
            selectedEmoji2Value = emoji;
            selectedEmoji2.innerHTML = `<span class="${animationToggle.checked ? 'animated-emoji' : ''}" aria-label="${getEmojiFallback(emoji)}">${emoji}</span>`;
            browseEmoji2.style.display = 'inline-flex';
            
            // Update highlight
            const emojiItems = emojiList2.querySelectorAll('.emoji-item');
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
        playSound(clickSound);
        
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
        playSound(clickSound);
        
        if (gridNumber === 1) {
            selectedEmoji1Value = '';
            selectedEmoji1.textContent = 'Pilih emoji pertama';
            browseEmoji1.style.display = 'none';
            
            // Hapus highlight
            const emojiItems = emojiList1.querySelectorAll('.emoji-item');
            emojiItems.forEach(item => {
                item.classList.remove('selected');
            });
        } else {
            selectedEmoji2Value = '';
            selectedEmoji2.textContent = 'Pilih emoji kedua';
            browseEmoji2.style.display = 'none';
            
            // Hapus highlight
            const emojiItems = emojiList2.querySelectorAll('.emoji-item');
            emojiItems.forEach(item => {
                item.classList.remove('selected');
            });
        }
        
        updatePreview();
    }

    // Update preview
    function updatePreview() {
        if (selectedEmoji1Value && selectedEmoji2Value) {
            emojiPreview.innerHTML = `
                <span class="${animationToggle.checked ? 'animated-emoji' : ''}" aria-label="${getEmojiFallback(selectedEmoji1Value)}">${selectedEmoji1Value}</span>
                <span>+</span>
                <span class="${animationToggle.checked ? 'animated-emoji' : ''}" aria-label="${getEmojiFallback(selectedEmoji2Value)}">${selectedEmoji2Value}</span>
            `;
        } else {
            emojiPreview.textContent = '';
        }
    }

    // Cari emoji
    function setupSearch(inputElement, gridNumber) {
        let timeout = null;
        
        inputElement.addEventListener('input', () => {
            clearTimeout(timeout);
            
            timeout = setTimeout(() => {
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
                
                renderEmojiGrid(gridNumber === 1 ? emojiList1 : emojiList2, filteredEmojis, gridNumber);
            }, 300); // Debounce 300ms
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
                const ctx = resultCanvas.getContext('2d');
                const img = new Image();
                img.crossOrigin = "Anonymous";
                
                img.onload = function() {
                    // Clear canvas
                    ctx.clearRect(0, 0, resultCanvas.width, resultCanvas.height);
                    
                    // Draw image to canvas
                    ctx.drawImage(img, 0, 0, resultCanvas.width, resultCanvas.height);
                    
                    // Simpan data gambar
                    currentImageData = resultCanvas.toDataURL('image/png');
                    
                    // Tampilkan canvas
                    resultCanvas.style.display = 'block';
                    
                    // Aktifkan tombol unduh, salin, dan bagikan
                    downloadBtn.disabled = false;
                    copyBtn.disabled = false;
                    shareBtn.disabled = false;
                    
                    hideLoading();
                    playSound(successSound);
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
            playSound(errorSound);
            showError('Gagal membuat emoji mix: ' + err.message);
        }
    }

    // Unduh gambar
    function downloadImage() {
        if (!currentImageData) return;
        
        const a = document.createElement('a');
        a.href = currentImageData;
        a.download = `mergemoji-${selectedEmoji1Value}-${selectedEmoji2Value}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        playSound(successSound);
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
            
            playSound(successSound);
            showSuccess('Gambar berhasil disalin ke clipboard!');
        } catch (err) {
            playSound(errorSound);
            showError('Gagal menyalin gambar: ' + err.message);
            
            // Fallback untuk browser yang tidak mendukung Clipboard API
            if (err.name === 'DataError' || err.name === 'NotAllowedError') {
                showError('Browser tidak mendukung penyalinan gambar. Silakan gunakan tombol unduh.');
            }
        }
    }

    // Bagikan gambar
    async function shareImage() {
        if (!currentImageData) return;
        
        try {
            // Convert data URL to blob
            const response = await fetch(currentImageData);
            const blob = await response.blob();
            
            // Create file from blob
            const file = new File([blob], `mergemoji-${selectedEmoji1Value}-${selectedEmoji2Value}.png`, { type: 'image/png' });
            
            // Check if Web Share API is supported
            if (navigator.share && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: 'MergeMoji - Hasil Mix Emoji',
                    text: `Lihasil mix emoji ${selectedEmoji1Value} dan ${selectedEmoji2Value} yang saya buat!`,
                    files: [file]
                });
                
                playSound(successSound);
                showSuccess('Gambar berhasil dibagikan!');
            } else {
                // Fallback: copy link to clipboard
                await navigator.clipboard.writeText(window.location.href);
                playSound(successSound);
                showSuccess('Link berhasil disalin ke clipboard! Silakan bagikan secara manual.');
            }
        } catch (err) {
            console.error('Error sharing:', err);
            playSound(errorSound);
            
            if (err.name !== 'AbortError') {
                showError('Gagal membagikan gambar: ' + err.message);
            }
        }
    }

    // Browse hasil mix untuk emoji tertentu
    function browseMixResults(emoji, gridNumber) {
        // Untuk demo, kita akan mencari kombinasi yang populer dengan emoji ini
        playSound(clickSound);
        showSuccess(`Mencari hasil mix untuk ${emoji}...`);
        
        // Dalam implementasi nyata, ini akan membuka halaman atau panel dengan hasil mix
    }

    // Pengaturan tema
    function setupThemeToggle() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.body.classList.add('dark-theme');
            themeToggle.checked = true;
        }
        
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
            }
        });
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                if (e.matches) {
                    document.body.classList.add('dark-theme');
                    themeToggle.checked = true;
                } else {
                    document.body.classList.remove('dark-theme');
                    themeToggle.checked = false;
                }
            }
        });
    }

    // Pengaturan warna kustom
    function setupColorPickers() {
        // Load saved colors
        const savedPrimaryColor = localStorage.getItem('primaryColor');
        if (savedPrimaryColor) {
            primaryColorPicker.value = savedPrimaryColor;
            primaryColorPreview.style.backgroundColor = savedPrimaryColor;
            document.documentElement.style.setProperty('--primary', savedPrimaryColor);
        }
        
        const savedSecondaryColor = localStorage.getItem('secondaryColor');
        if (savedSecondaryColor) {
            secondaryColorPicker.value = savedSecondaryColor;
            secondaryColorPreview.style.backgroundColor = savedSecondaryColor;
            document.documentElement.style.setProperty('--secondary', savedSecondaryColor);
        }
        
        const savedBackgroundColor = localStorage.getItem('backgroundColor');
        if (savedBackgroundColor) {
            backgroundColorPicker.value = savedBackgroundColor;
            backgroundColorPreview.style.backgroundColor = savedBackgroundColor;
            document.documentElement.style.setProperty('--background', savedBackgroundColor);
        }
        
        // Add event listeners
        primaryColorPicker.addEventListener('input', (e) => {
            const color = e.target.value;
            primaryColorPreview.style.backgroundColor = color;
            document.documentElement.style.setProperty('--primary', color);
            localStorage.setItem('primaryColor', color);
        });
        
        secondaryColorPicker.addEventListener('input', (e) => {
            const color = e.target.value;
            secondaryColorPreview.style.backgroundColor = color;
            document.documentElement.style.setProperty('--secondary', color);
            localStorage.setItem('secondaryColor', color);
        });
        
        backgroundColorPicker.addEventListener('input', (e) => {
            const color = e.target.value;
            backgroundColorPreview.style.backgroundColor = color;
            document.documentElement.style.setProperty('--background', color);
            localStorage.setItem('backgroundColor', color);
        });
    }

    // Pengaturan font
    function setupFontSelect() {
        const savedFont = localStorage.getItem('font');
        if (savedFont) {
            fontSelect.value = savedFont;
            document.body.style.fontFamily = savedFont;
            
            // Load Poppins font if selected
            if (savedFont.includes('Poppins')) {
                loadPoppinsFont();
            }
        }
        
        fontSelect.addEventListener('change', () => {
            document.body.style.fontFamily = fontSelect.value;
            localStorage.setItem('font', fontSelect.value);
            
            // Load Poppins font if selected
            if (fontSelect.value.includes('Poppins')) {
                loadPoppinsFont();
            }
        });
    }
    
    // Load Poppins font from Google Fonts
    function loadPoppinsFont() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap';
        document.head.appendChild(link);
        
        // Add class to body for font-specific styles
        document.body.classList.add('font-poppins');
    }

    // Toggle pengaturan
    function setupSettingsPanel() {
        settingsBtn.addEventListener('click', () => {
            settingsPanel.classList.toggle('active');
            playSound(clickSound);
        });
        
        closeSettings.addEventListener('click', () => {
            settingsPanel.classList.remove('active');
            playSound(clickSound);
        });
        
        // Tutup panel settings ketika klik di luar
        document.addEventListener('click', (e) => {
            if (!settingsPanel.contains(e.target) && e.target !== settingsBtn) {
                settingsPanel.classList.remove('active');
            }
        });
    }

    // Play sound effect
    function playSound(soundElement) {
        if (soundToggle.checked) {
            soundElement.currentTime = 0;
            soundElement.play().catch(e => console.log("Audio play failed:", e));
        }
    }

    // Fungsi bantuan UI
    function showLoading() {
        loading.style.display = 'block';
        resultCanvas.style.display = 'none';
    }

    function hideLoading() {
        loading.style.display = 'none';
    }

    function showError(message) {
        error.textContent = message;
        error.style.display = 'block';
        success.style.display = 'none';
    }

    function hideError() {
        error.style.display = 'none';
    }

    function showSuccess(message) {
        success.textContent = message;
        success.style.display = 'block';
        error.style.display = 'none';
    }

    function hideSuccess() {
        success.style.display = 'none';
    }

    // Setup event listeners
    function setupEventListeners() {
        // Shuffle buttons
        shuffleEmoji1.addEventListener('click', () => shuffleEmoji(1));
        shuffleEmoji2.addEventListener('click', () => shuffleEmoji(2));
        
        // Clear buttons
        clearEmoji1.addEventListener('click', () => clearEmoji(1));
        clearEmoji2.addEventListener('click', () => clearEmoji(2));
        
        // Browse buttons
        browseEmoji1.addEventListener('click', () => browseMixResults(selectedEmoji1Value, 1));
        browseEmoji2.addEventListener('click', () => browseMixResults(selectedEmoji2Value, 2));
        
        // Search inputs
        setupSearch(searchEmoji1, 1);
        setupSearch(searchEmoji2, 2);
        
        // Generate button
        generateBtn.addEventListener('click', generateEmojiMix);
        
        // Download, copy and share buttons
        downloadBtn.addEventListener('click', downloadImage);
        copyBtn.addEventListener('click', copyImageToClipboard);
        shareBtn.addEventListener('click', shareImage);
        
        // Settings toggles
        setupThemeToggle();
        setupColorPickers();
        setupFontSelect();
        setupSettingsPanel();
        
        // Load saved sound preference
        const savedSound = localStorage.getItem('sound');
        if (savedSound !== null) {
            soundToggle.checked = savedSound === 'true';
        }
        
        soundToggle.addEventListener('change', () => {
            localStorage.setItem('sound', soundToggle.checked);
        });
        
        // Load saved vibration preference
        const savedVibration = localStorage.getItem('vibration');
        if (savedVibration !== null) {
            vibrationToggle.checked = savedVibration === 'true';
        }
        
        vibrationToggle.addEventListener('change', () => {
            localStorage.setItem('vibration', vibrationToggle.checked);
        });
        
        // Load saved animation preference
        const savedAnimation = localStorage.getItem('animation');
        if (savedAnimation !== null) {
            animationToggle.checked = savedAnimation === 'true';
        }
        
        animationToggle.addEventListener('change', () => {
            localStorage.setItem('animation', animationToggle.checked);
            
            // Update animation state for selected emojis
            if (selectedEmoji1Value) {
                selectedEmoji1.innerHTML = `<span class="${animationToggle.checked ? 'animated-emoji' : ''}">${selectedEmoji1Value}</span>`;
            }
            if (selectedEmoji2Value) {
                selectedEmoji2.innerHTML = `<span class="${animationToggle.checked ? 'animated-emoji' : ''}">${selectedEmoji2Value}</span>`;
            }
            updatePreview();
        });
    }

    // Inisialisasi aplikasi
    setRandomLogo();
    await loadEmojiData();
    setupEventListeners();
    
    // Set interval untuk mengubah logo secara berkala
    setInterval(setRandomLogo, 10000);
});
