function showOrderForm(id, priceId, pricePerUnit, quantityId) {
    document.getElementById(id).style.display = "block";
    setCustomPrice(priceId);
    priceOnQuantityChange(priceId, pricePerUnit, quantityId);
}

function priceOnQuantityChange(priceId, pricePerUnit, quantityId) {
    let quantity = document.getElementById(quantityId).value;
    let priceField = document.getElementById(priceId);
    let price = quantity * pricePerUnit;
    if (!isNaN(price)) {
        priceField.innerHTML = `Стоимость заказа: ${price} рублей`;
    }
}

function incrementQuantity(quantityId, priceId, pricePerUnit) {
    let quantity = document.getElementById(quantityId);
    quantity.value = parseInt(quantity.value) + 1;
    priceOnQuantityChange(priceId, pricePerUnit, quantityId);
}

function decrementQuantity(quantityId, priceId, pricePerUnit) {
    let quantity = document.getElementById(quantityId);
    if (parseInt(quantity.value) > 1) {
        quantity.value = parseInt(quantity.value) - 1;
        priceOnQuantityChange(priceId, pricePerUnit, quantityId);
    }
}

function setCustomPrice(priceId) {
    let priceField = document.getElementById(priceId);
    priceField.innerHTML = 'Стоимость заказа: договорная';
}


