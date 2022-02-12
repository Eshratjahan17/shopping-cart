function updateCaseQuantity(isPlus) {
    const caseQuantity = document.getElementById('case-quantiy');
    const caseValue = caseQuantity.value;
    if (isPlus == true) {
        caseQuantity.value = parseInt(caseValue) + 1;
    } else if (caseValue > 0) {
        caseQuantity.value = parseInt(caseValue) - 1;

    }
    let caseCurretPrice = document.getElementById('case-price');
    // let caseCurrentPriceNumber = parseInt(caseCurretPrice.innerText);
    // let totalCasePrice = caseCurrentPriceNumber * caseQuantity.value;
    // caseCurrentPriceNumber.value = caseCurrentPriceNumber;
    caseCurretPrice.innerText = 59 * caseQuantity.value;


}



document.getElementById('case-plus').addEventListener('click', function() {
    updateCaseQuantity(true);

});
document.getElementById('case-minus').addEventListener('click', function() {
    updateCaseQuantity(false);

});


function updatePhnQunatity(plusOrMinus) {
    const phnQuantity = document.getElementById('phn-quantity');
    const phnValue = phnQuantity.value;
    if (plusOrMinus == true) {
        phnQuantity.value = parseInt(phnValue) + 1;

    } else if (phnValue > 0) {
        phnQuantity.value = parseInt(phnValue) - 1;

    }

}
document.getElementById('phn-plus').addEventListener('click', function() {
    updatePhnQunatity(true);


});

document.getElementById('phn-minus').addEventListener('click', function() {
    updatePhnQunatity(false);

});