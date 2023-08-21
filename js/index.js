let total = 0;
function btnClickHandler(buy) {
    const selectedItemContainer = document.getElementById('selected-product');
    const productName = buy.parentNode.parentNode.childNodes[3].innerText;

    const count = selectedItemContainer.childElementCount;
    const p = document.createElement('p');
    p.innerText = `${count + 1}. ${productName}`;
    selectedItemContainer.appendChild(p);

    const productPrice = buy.parentNode.parentNode.childNodes[5].innerText;
    total += parseFloat(productPrice);

    const previousTotalPrice = document.getElementById('total-price');
    const discountedTotalPrice = document.getElementById('discounted-total-price');
    previousTotalPrice.innerText = total;
    discountedTotalPrice.innerText = total;

    // enable button
    const btnPurchase = document.getElementById('btn-purchase');
    const btnApply = document.getElementById('btn-apply');
    if (total >= 200) {
        btnApply.removeAttribute('disabled');
        btnApply.classList.add('hover:bg-pink-600', 'transition-colors');

    } if (total > 0) {
        btnPurchase.removeAttribute('disabled');
        btnPurchase.classList.add('hover:bg-pink-600','transition-colors')
    }

    
}

// promo code apply

function btnApplyHandler() {
    const couponInputArea = document.getElementById('input-area');
    const inputValue = couponInputArea.value;


    if (inputValue == 'SELL200') {
        const discountAmount = (total * 0.2).toFixed(2);
        const discountPriceInput = document.getElementById('discount-price');
        discountPriceInput.innerText = discountAmount;
        const discountedTotalPrice = document.getElementById('discounted-total-price');
        discountedTotalPrice.innerText = total - discountAmount;
        alert('Coupon Applied')
    }
    else{
        alert('Invalid Code')
    }
    couponInputArea.value = '';
}

// goToHome button

function btnGoToHome(home){
    const btnGoToHome = document.getElementById('btn-go-home');
    window.location.href = 'index.html';
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