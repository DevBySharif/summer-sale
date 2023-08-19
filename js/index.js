    let total = 0;
    function btnClickHandler(event){
        const selectedItemContainer = document.getElementById('selected-product');
        const productName = event.parentNode.parentNode.childNodes[3].innerText;
        
        const li = document.createElement('li');
        li.innerText = productName;
        selectedItemContainer.appendChild(li);

        const productPrice = event.parentNode.parentNode.childNodes[5].innerText.split(' ')[0]
        total = parseFloat(total) + parseFloat(productPrice);

        const previousTotalPrice = document.getElementById('total-price');
        const previousTotalPriceString = previousTotalPrice.innerText;
        const newTotalPrice = total + parseFloat(previousTotalPriceString);
        previousTotalPrice.innerText = newTotalPrice;
        
      

        // enable button
        const btnPurchase = document.getElementById('btn-purchase');
        const btnApply = document.getElementById('btn-apply')
        if(newTotalPrice > 200){
            btnApply.removeAttribute('disabled');
            
        }if(newTotalPrice > 0){
            btnPurchase.removeAttribute('disabled');
        }

        btnApplyHandler(total);
        return(total)
    }
    
    // promo code apply
    function btnApplyHandler(total){
        const inputArea = document.getElementById('input-area');
        const inputValue = inputArea.value;
        let couponApplied = false

        if(!couponApplied){
            if(inputValue === 'SELL200'){
                const discountedPrice = total * 0.2;
                console.log(discountedPrice);
            }
        }
        
    }


    // promo code copy

    function copyPromoCode() {
        const promoCode = "SELL200"; // Promo code text
        const tempInput = document.createElement("input");
        document.body.appendChild(tempInput);
        tempInput.value = promoCode;
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert("Promo code copied: " + promoCode);
    }