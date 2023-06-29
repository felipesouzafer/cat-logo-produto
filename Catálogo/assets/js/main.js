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
}

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
}

function updatetotal(){
    var carContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = carContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox
    }
}