var mail = document.getElementById('email');
var pass = document.getElementById('pass');
var hideAlert = document.getElementsByClassName('hideBlur');
var button = document.getElementsByClassName('btn-log');
var form = document.getElementsByTagName('form');
var okeyMail;
var okeyPass;
var validate = document.getElementsByClassName('inner-span');
var validateHide = document.getElementsByClassName('hide-cartel');

mail.onfocus = function () {
    hideAlert[0].innerHTML = '';
    mail.classList.remove('blur');
};
mail.onblur = function () {
    var regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexMail.test(mail.value)) {
        console.log(regexMail.test(mail.value));
        okeyMail = true;
        return okeyMail;
    } else {
        hideAlert[0].innerHTML = '¡El formato no corresponde!';
        mail.classList.add('blur');
        okeyMail = false;
    }
};

pass.onfocus = function () {
    hideAlert[1].innerHTML = '';
    pass.classList.remove('blur');
};
pass.onblur = function () {
    var numbers = /[0-9]/;
    var letters = /[a-z]/;
    if (
        pass.value.match(numbers) &&
        pass.value.match(letters) &&
        pass.value.length > 7
    ) {
        okeyPass = true;
        return okeyPass;
    } else {
        hideAlert[1].innerHTML = '¡Completa con numeros y letras!';
        pass.classList.add('blur');
        okeyPass = false;
        return okeyPass;
    }
};

form[1].addEventListener('submit', function (e) {
    e.preventDefault();
    if (okeyMail === true && okeyPass === true) {
        validateHide[0].classList.remove('hide-cartel');
        validate[0].innerHTML = mail.value;
        validate[1].innerHTML = pass.value;
    } else {
        alert('Los datos ingresados no corresponden');
    }
});
