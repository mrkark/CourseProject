function showOrderForm(id, priceId, pricePerUnit, quantityId) {
    document.getElementById(id).style.display = "block";
    setCustomPrice(priceId);
    priceOnQuantityChange(priceId, pricePerUnit, quantityId);
}

function priceOnQuantityChange(priceId, pricePerUnit, quantityId) {
    let quantityInput = document.getElementById(quantityId);
     if (quantityInput) { 
        let quantity = parseInt(quantityInput.value);
        let priceField = document.getElementById(priceId);
        let price = quantity * pricePerUnit;
        if (!isNaN(price)) {
            priceField.innerHTML = `Стоимость заказа: ${price} рублей`;
        }
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
    if (priceField) {
        priceField.innerHTML = 'Стоимость заказа: договорная';
    }
}



function validateOrder(formId) { 
    let name = document.getElementById(formId).querySelector('#name').value; 
    let phone = document.getElementById(formId).querySelector('#phone').value; 
    let destination = document.getElementById(formId).querySelector('#destination').value; 
    let date = document.getElementById(formId).querySelector('#birthdayDate').value;
 
    let nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
    let phoneRegex = /^[\d+]+$/;

    document.getElementById(formId).querySelector('#name').style.border = "1px solid #ccc";
    document.getElementById(formId).querySelector('#phone').style.border = "1px solid #ccc";
    document.getElementById(formId).querySelector('#destination').style.border = "1px solid #ccc";

    if(name == "" || phone == "" || destination == "" || !name.match(nameRegex) || !phone.match(phoneRegex) || date == "") {
        alert("Пожалуйста, заполните все обязательные поля правильно");
        if(name == "" || !name.match(nameRegex)) {
            document.getElementById(formId).querySelector('#name').style.border = "1px solid red";
        }
        if(phone == "" || !phone.match(phoneRegex)) {
            document.getElementById(formId).querySelector('#phone').style.border = "1px solid red";
        }
        if(destination == "") {
            document.getElementById(formId).querySelector('#destination').style.border = "1px solid red";
        }
        if(date == "") {
            document.getElementById(formId).querySelector('#birthdayDate').style.border = "1px solid red";
        }
    }
    else {
        document.getElementById(formId).querySelector('#name').style.border = "1px solid #ccc";
        document.getElementById(formId).querySelector('#phone').style.border = "1px solid #ccc";
        document.getElementById(formId).querySelector('#destination').style.border = "1px solid #ccc";
        document.getElementById(formId).querySelector('#birthdayDate').style.border = "1px solid #ccc";
        return true;
    }
}

    function requiredIndivid(formId) { 
        let comment = document.getElementById(formId).querySelector('#comment'); 
        comment.required = true; 
        alert('Пожалуйста, напишите комментарий к заказу');
        if (comment.value == "") { 
            comment.style.border = '1px solid red'; 
            return false; 
        } else { 
            comment.style.border = "1px solid #ccc"; 
            return true; 
        } 
    }


function validateDR (formId){
    if(validateOrder(formId)) {
        document.getElementById('overlayDR').style.display = 'none';
        alert("Заказ успешно подтвержден.");
    }
}

function validateNY (formId){
    if(validateOrder(formId)) {
        document.getElementById('overlayNY').style.display = 'none';
        alert("Заказ успешно подтвержден.");
    }
}

function validate8 (formId){
    if(validateOrder(formId)) {
        document.getElementById('overlay8').style.display = 'none';
        alert("Заказ успешно подтвержден.");
    }
}

function validate23 (formId){
    if(validateOrder(formId)) {
        document.getElementById('overlay23').style.display = 'none';
        alert("Заказ успешно подтвержден.");
    }
}
function validateEaster (formId){
    if(validateOrder(formId)) {
        document.getElementById('overlayEaster').style.display = 'none';
        alert("Заказ успешно подтвержден.");
    }
}
function validateCsl (formId){
    if(validateOrder(formId)) {
        document.getElementById('overlayCal').style.display = 'none';
        alert("Заказ успешно подтвержден.");
    }
}
function validateSmile (formId){
    if(validateOrder(formId)) {
        document.getElementById('overlaySmile').style.display = 'none';
        alert("Заказ успешно подтвержден.");
    }
}
function validateHouse (formId){
    if(validateOrder(formId)) {
        document.getElementById('overlayHouse').style.display = 'none';
        alert("Заказ успешно подтвержден.");
    }
}
function validateIndivid (formId){
    if(validateOrder(formId)) {
        document.getElementById('overlayIndivid').style.display = 'none';
        alert("Заказ успешно подтвержден.");
    }
}