const products = [
    { id: 1, name: "حذاء كلاسيك ذهبي", price: "45,000", desc: "جلد طبيعي فاخر بنقشة ملوكية.", img: "URL_IMAGE_HERE" },
    { id: 2, name: "حقيبة يد ملكية", price: "65,000", desc: "حقيبة سهرة مع قفل ذهبي مميز.", img: "URL_IMAGE_HERE" }
];

let selectedProduct = null;

function displayProducts() {
    const grid = document.getElementById('product-list');
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <div>
                <h3 style="color:var(--gold)">${p.name}</h3>
                <p class="price-tag">${p.price} د.ع</p>
            </div>
            <button class="btn-detail" onclick="showDetails(${p.id})">التفاصيل</button>
        </div>
    `).join('');
}

function showDetails(id) {
    selectedProduct = products.find(p => p.id === id);
    alert(`تفاصيل المنتج: ${selectedProduct.name}\n\n${selectedProduct.desc}\n\nالسعر: ${selectedProduct.price} د.ع\n\n(سأفتح لك السلة الآن)`);
    openCart();
}

function openCart() {
    document.getElementById('cart-modal').style.display = 'block';
}

function sendOrder() {
    const name = document.getElementById('u_name').value;
    const phone = document.getElementById('u_phone').value;
    const address = document.getElementById('u_addr').value;

    if(!name || !phone) return alert("يرجى ملء الاسم والرقم");

    const whatsappNumber = "9647XXXXXXXX"; // حط رقمك هنا
    const message = `طلب جديد من متجر ميار:\n\nالمنتج: ${selectedProduct.name}\nالسعر: ${selectedProduct.price}\n---\nالزبون: ${name}\nالرقم: ${phone}\nالعنوان: ${address}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`);
}

window.onload = displayProducts;
