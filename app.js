const minusBtn = document.getElementById('minus-btn');
const plusBtn = document.getElementById('plus-btn');
const cartInput = document.getElementById('cart-input');

minusBtn.addEventListener('click', () => {
    const currentValue = parseInt(cartInput.value);
    if (currentValue > 1) {
        cartInput.value = currentValue - 1;
    }
});

plusBtn.addEventListener('click', () => {
    const currentValue = parseInt(cartInput.value);
    cartInput.value = currentValue + 1;
});



/* Scroll to top */

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


