// 建立一個購物車陣列儲存商品
const cart = [];

// 取得所有加入購物車按鈕，並綁定點擊事件
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', event => {
    const productCard = event.target.closest('.product-card');
    const id = productCard.getAttribute('data-id');
    const name = productCard.getAttribute('data-name');
    const price = parseInt(productCard.getAttribute('data-price'));

    addToCart({ id, name, price });
    renderCart();
  });
});

// 將商品加入購物車，若已存在則數量+1
function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
}

// 顯示購物車內容
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    const li = document.createElement('li');
    li.textContent = `${item.name} x ${item.quantity} - $${item.price * item.quantity}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total;
}
