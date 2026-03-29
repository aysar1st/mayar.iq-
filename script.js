// بيانات المنتجات (Static Data) - يمكنك تعديلها هنا
const productsData = [
    { id: 1, name: "لوحة مفاتيح ميكانيكية", price: "45$", img: "https://via.placeholder.com/300" },
    { id: 2, name: "ماوس ألعاب لاسلكي", price: "30$", img: "https://via.placeholder.com/300" },
    { id: 3, name: "سماعات محيطية", price: "60$", img: "https://via.placeholder.com/300" },
    { id: 4, name: "شاحن لاسلكي سريع", price: "25$", img: "https://via.placeholder.com/300" },
    { id: 5, name: "حقيبة لابتوب عصرية", price: "55$", img: "https://via.placeholder.com/300" }
];

// جلب العناصر
const productList = document.getElementById('product-list');
const cartCount = document.getElementById('cart-count');
let currentCartItems = 0;

// عرض المنتجات في الـ Grid
function loadProducts() {
    productsData.forEach((product, index) => {
        // إنشاء عنصر الـ Card
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p class="price">${product.price}</p>
            <button onclick="addToCart(${product.id})" class="btn-primary">إضافة للسلة</button>
        `;
        
        // إضافة الكارت للـ Grid
        productList.appendChild(card);
        
        // تطبيق أنيميشن الظهور المتتالي (Sequential Animation)
        setTimeout(() => {
            card.classList.add('show-card');
        }, index * 100); // كل كارت يظهر بعد 100ms من اللي قبله
    });
}

// وظيفة إضافة منتج للسلة
function addToCart(productId) {
    currentCartItems++;
    cartCount.innerText = currentCartItems;
    
    // أنيميشن صغير على أيقونة السلة
    cartCount.style.animation = 'scaleUp 0.3s ease-in-out';
    setTimeout(() => { cartCount.style.animation = ''; }, 300);
}

// تشغيل الوظيفة عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', loadProducts);

// أنيميشن صغير لأيقونة السلة في الـ CSS (إضافة برمجية)
const style = document.createElement('style');
style.innerHTML = `
@keyframes scaleUp {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); }
}
`;
document.head.appendChild(style);
