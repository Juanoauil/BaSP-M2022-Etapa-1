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
    myBlur(mail, 0);
};
pass.onfocus = function () {
    myFocus(pass, 1);
};
pass.onblur = function () {
    myBlur(pass, 1);
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
    var minValue = x.value.toLowerCase();
    var num = 0;
    var char = 0;
    var special = false;
    for (i = 0; i < x.value.length; i++) {
        if (numbers.includes(x.value[i])) {
            num++;
        } else if (alph.includes(minValue[i])) {
            char++;
        } else {
            special = true;
        }
    }
    if (x.value.length >= 8 && num >= 1 && char >= 1 && special == false) {
        return true;
    } else {
        return false;
    }
}
