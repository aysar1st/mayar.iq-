const products = [
    { id: 1, name: "حذاء لويس فيتون - ملكي", price: 45000, img: "https://via.placeholder.com/300x300/121212/c5a059?text=Shoes+1" },
    { id: 2, name: "حقيبة يد كلاسيك", price: 65000, img: "https://via.placeholder.com/300x300/121212/c5a059?text=Bag+1" },
    { id: 3, name: "حذاء رياضي ذهبي", price: 50000, img: "https://via.placeholder.com/300x300/121212/c5a059?text=Shoes+2" }
];

let cart = [];

function init() {
    const grid = document.getElementById('product-list');
    grid.innerHTML = products.map((p, index) => `
        <div class="product-card ${index % 2 === 0 ? 'left-slide' : 'right-slide'}" id="p-${p.id}">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p class="price">${p.price.toLocaleString()} د.ع</p>
            <button class="btn" onclick="addToCart(${p.id})">أضف للسلة</button>
        </div>
    `).join('');
    
    // تفعيل حركة الظهور عند السكرول
    window.addEventListener('scroll', reveal);
    reveal();
}

function reveal() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        const windowHeight = window.innerHeight;
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) card.classList.add('reveal');
    });
}

function addToCart(id) {
    const p = products.find(item => item.id === id);
    cart.push(p);
    updateCart();
    document.getElementById('side-cart').classList.add('open');
}

function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;
    const container = document.getElementById('cart-items');
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span style="color:var(--gold)">${item.price.toLocaleString()}</span>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total-price').innerText = total.toLocaleString() + " د.ع";
}

function toggleCart() {
    document.getElementById('side-cart').classList.toggle('open');
}

function openCheckout() {
    if(cart.length === 0) return alert("السلة فارغة!");
    document.getElementById('order-modal').style.display = 'flex';
}

function finishOrder() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    if(!name || !phone) return alert("كمل المعلومات يا بطل");

    const itemsStr = cart.map(i => i.name).join(', ');
    const total = document.getElementById('total-price').innerText;
    const msg = `طلب جديد:\nالاسم: ${name}\nالرقم: ${phone}\nالمنتجات: ${itemsStr}\nالمجموع: ${total}`;
    
    window.open(`https://wa.me/9647XXXXXXXX?text=${encodeURIComponent(msg)}`);
}

window.onload = init;

