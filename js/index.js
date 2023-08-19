    let total = 0;
    function btnClickHandler(event){
        const selectedItemContainer = document.getElementById('selected-product')
        const productName = event.parentNode.parentNode.childNodes[3].innerText;
        
        const li = document.createElement('li');
        li.innerText = productName;
        selectedItemContainer.appendChild(li)

        const productPrice = event.parentNode.parentNode.childNodes[5].innerText.split(' ')[0]
        total = parseFloat(total) + parseFloat(productPrice);

        const previousTotalPrice = document.getElementById('total-price');
        const previousTotalPriceString = previousTotalPrice.innerText;
        const newTotalPrice = total + parseFloat(previousTotalPriceString)
        previousTotalPrice.innerText = newTotalPrice;
    }