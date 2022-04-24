var mail = document.getElementById('email');
var pass = document.getElementById('pass');
var hideAlert = document.getElementsByClassName('error-text');
var form = document.getElementsByTagName('form');
var validateValue = document.getElementsByClassName('inner-span');
var validateForm = document.getElementsByClassName('hide-cartel');

mail.onfocus = function () {
    myFocus(mail, 0);
};
mail.onblur = function () {
    myBlur(mail, 0);
};
pass.onfocus = function () {
    myFocus(pass, 1);
};
pass.onblur = function () {
    myBlur(pass, 1);
};
function myFocus(x, i) {
    x.classList.remove('blur');
    hideAlert[i].classList.remove('error');
}
function myBlur(x, i) {
    if (x.value == '') {
        x.classList.add('blur');
        x.classList.remove('correct');
        hideAlert[i].classList.add('error');
    } else {
        x.classList.add('correct');
    }
}

function validateMail(x) {
    var regexMail = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
    if (regexMail.test(x.value)) {
        return true;
    } else {
        return false;
    }
}
function validatePass(x) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var num = 0;
    var char = 0;
    for (i = 0; i < x.value.length; i++) {
        if (numbers.includes(x.value[i])) {
            num++;
        } else {
            char++;
        }
    }
    if (x.value.length >= 8 && num >= 1 && char >= 1) {
        return true;
    } else {
        return false;
    }
}

form[1].onsubmit = function (e) {
    e.preventDefault();
    if (validateMail(mail) == true && validatePass(pass) == true) {
        validateForm[0].classList.remove('hide-cartel');
        validateValue[0].innerHTML = mail.value;
        validateValue[1].innerHTML = pass.value;
    } else if (validateMail(mail) == false && validatePass(pass) == true) {
        alert('¡El email ingresado no corresponde a un formato valido');
    } else if (validateMail(mail) == true && validatePass(pass) == false) {
        alert('La contraseña ingresada no corresponde a un formato valido');
    } else {
        alert('¡Los datos ingresados no tienen el formato indicado');
    }
};
