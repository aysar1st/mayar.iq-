const products = [
    { id: 1, name: "حذاء كلاسيك ذهبي", price: "45,000", desc: "جلد طبيعي فاخر مناسب للمناسبات الرسمية", img: "shoes1.jpg" },
    { id: 2, name: "حقيبة يد ملكية", price: "65,000", desc: "تصميم عصري مع مساحة داخلية واسعة", img: "bag1.jpg" },
];

const productGrid = document.getElementById('product-list');

function displayProducts() {
    productGrid.innerHTML = products.map(p => `
        <div class="product-card" onclick="openProduct(${p.id})">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price-tag">${p.price} د.ع</p>
            <p>اضغط للتفاصيل</p>
        </div>
    `).join('');
}

// نافذة تفاصيل المنتج
function openProduct(id) {
    const p = products.find(item => item.id === id);
    const modalHtml = `
        <div id="productModal" class="modal" style="display:flex">
            <div class="modal-content">
                <span onclick="closeModal()" style="cursor:pointer; float:left">✖</span>
                <img src="${p.img}">
                <h2>${p.name}</h2>
                <p>${p.desc}</p>
                <p class="price-tag">${p.price} د.ع</p>
                <button class="btn-order" onclick="sendToWhatsApp('${p.name}')">طلب عبر واتساب</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeModal() {
    const modal = document.getElementById('productModal');
    if(modal) modal.remove();
}

function sendToWhatsApp(productName) {
    const phone = "9647XXXXXXXX"; // رقمك هنا
    const msg = `مرحباً متجر ميار، أريد طلب: ${productName}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}

window.onload = displayProducts;
