let cartIcon = document.querySelector('#icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')


cartIcon.onclick = () =>{
    cart.classList.add("active");

};

closeCart.onclick = () =>{
    cart.classList.remove("active");
    
};

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready();
}

function ready(){
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quant')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged);
    }
}

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updatetotal();
}

function quantityChanged(event){
        var input = event.target
        if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
}
    updatetotal();
}


function addCartClicked(event){
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    var shopProducts = button.parentElement
    addProductToCart(title, price, productImg);
    updatetotal();
}


function  addProductToCart (title, price, productImg){
    var cartShopBox = document.createElement('div')
    //cartShopBox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var  cartItemsNames = cartItem.getElementsByClassName('cart-product-title')
    for (var i = 0; i < cartItemsNames.length; i++){
        alert('You gave already add this item to cart')
        return;
    }
    
}

var cartBoxContent = `
<img src="assets/images/product2.jpg" class="cart-img" alt="">
<div class="detail-box">
   <div class="cart-product-title">Earbuds</div>
   <div class="cart-price">$25</div>
   <input type="number" value="1" class="cart-quant">
</div>
<i class="cart-remove"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
   <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
 </svg></i>`

 cartShopBox.innerHTML = cartBoxContent
 cartItems.append(cartShopBox)
 cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
 cartShopBox.getElementsByClassName('cart-quant')[0].addEventListener('change', quantityChanged)





function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBox[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quant")[0];
        var price = parseFloat(priceElement.innerText.repleace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);

        document.getElementsByClassName("total-price")[0].innerHTML = "$" + total;
    }
}