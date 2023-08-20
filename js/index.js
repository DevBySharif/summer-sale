let total = 0;
function btnClickHandler(event) {
    const selectedItemContainer = document.getElementById('selected-product');
    const productName = event.parentNode.parentNode.childNodes[3].innerText;

    const li = document.createElement('li');
    li.innerText = productName;
    selectedItemContainer.appendChild(li);

    const productPrice = event.parentNode.parentNode.childNodes[5].innerText
    total += parseFloat(productPrice)

    const previousTotalPrice = document.getElementById('total-price');
    previousTotalPrice.innerText = total;

    // enable button
    const btnPurchase = document.getElementById('btn-purchase');
    const btnApply = document.getElementById('btn-apply')
    if (total > 200) {
        btnApply.removeAttribute('disabled');

    } if (total > 0) {
        btnPurchase.removeAttribute('disabled');
    }

    btnApplyHandler(total);
}

// promo code apply

function btnApplyHandler() {
    const couponInputArea = document.getElementById('input-area');
    const inputValue = couponInputArea.value;


    if (inputValue == 'SELL200') {
        const discountAmount = (total * 0.2).toFixed(2);
        const discountPriceInput = document.getElementById('discount-price')
        discountPriceInput.innerText = discountAmount;
        const discountedTotalPrice = document.getElementById('discounted-total-price');
        discountedTotalPrice.innerText = total - discountAmount;
        alert('Coupon Applied')
    }
    couponInputArea.value = '';
}


// promo code text copy

function copyPromoCode() {
    const promoCode = "SELL200"; 
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = promoCode;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Promo code copied: " + promoCode);
}