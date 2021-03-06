var mail = document.getElementById('email');
var pass = document.getElementById('pass');
var hideAlert = document.getElementsByClassName('error-text');
var form = document.getElementsByTagName('form');
var validateValue = document.getElementsByClassName('inner-span');
var validateForm = document.getElementsByClassName('hide-cartel');
var closeModal = document.getElementById('close-modal');

mail.onfocus = function () {
    myFocus(mail, 0);
};
mail.onblur = function () {
    myBlur(mail, 0, validateMail);
};
pass.onfocus = function () {
    myFocus(pass, 1);
};
pass.onblur = function () {
    myBlur(pass, 1, validatePass);
};
form[1].onsubmit = function (e) {
    e.preventDefault();
    if (validateMail(mail) == true && validatePass(pass) == true) {
        validateForm[0].classList.add('cartel');
        validateValue[0].innerHTML = mail.value;
        validateValue[1].innerHTML = pass.value;
    } else if (validateMail(mail) == false && validatePass(pass) == true) {
        alert('¡El email ingresado no corresponde a un formato valido!');
        mail.classList.add('blur');
        mail.classList.remove('correct');
        hideAlert[0].classList.add('error');
    } else if (validateMail(mail) == true && validatePass(pass) == false) {
        alert('¡La contraseña ingresada no corresponde a un formato valido!');
        pass.classList.add('blur');
        pass.classList.remove('correct');
        hideAlert[1].classList.add('error');
    } else {
        alert('¡Los datos ingresados no tienen el formato indicado!');
        mail.classList.add('blur');
        mail.classList.remove('correct');
        hideAlert[0].classList.add('error');
        pass.classList.add('blur');
        pass.classList.remove('correct');
        hideAlert[1].classList.add('error');
    }
};

closeModal.onclick = function () {
    validateForm[0].classList.remove('cartel');
};

function myFocus(inputs, i) {
    inputs.classList.remove('blur');
    hideAlert[i].classList.remove('error');
}

function myBlur(inputs, i, validation) {
    if (validation(inputs) == true) {
        inputs.classList.add('correct');
        hideAlert[i].classList.remove('error');
    } else {
        inputs.classList.add('blur');
        inputs.classList.remove('correct');
        hideAlert[i].classList.add('error');
    }
}

function validateMail(inputs) {
    var regexMail = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
    if (regexMail.test(inputs.value)) {
        return true;
    } else {
        return false;
    }
}

function validatePass(inputs) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var alph = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];
    var minValue = inputs.value.toLowerCase();
    var num = 0;
    var char = 0;
    var special = false;
    for (i = 0; i < inputs.value.length; i++) {
        if (numbers.includes(inputs.value[i])) {
            num++;
        } else if (alph.includes(minValue[i])) {
            char++;
        } else {
            special = true;
        }
    }
    if (inputs.value.length >= 8 && num >= 1 && char >= 1 && special == false) {
        return true;
    } else {
        return false;
    }
}
