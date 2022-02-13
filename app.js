function updateQuantity(product, isPlus, productPrice, productRate) {
    const productQuantity = document.getElementById(product);
    const productValue = productQuantity.value;
    if (isPlus == true) {
        productQuantity.value = parseInt(productValue) + 1;
    } else if (productValue > 0) {
        productQuantity.value = parseInt(productValue) - 1;

    }
    let productCurretPrice = document.getElementById(productPrice);
    productCurretPrice.innerText = productRate * productQuantity.value;


}


//case increase decrease 
document.getElementById('case-plus').addEventListener('click', function() {
    updateQuantity('case-quantiy', true, 'case-price', 59);

});
document.getElementById('case-minus').addEventListener('click', function() {
    updateQuantity('case-quantiy', false, 'case-price', 59);

});

//phone increase decrese


document.getElementById('phn-plus').addEventListener('click', function() {
    updateQuantity('phn-quantity', true, 'phn-price', 1219);


});

document.getElementById('phn-minus').addEventListener('click', function() {
    updateQuantity('phn-quantity', false, 'phn-price', 1219);

});