var mail = document.getElementById('email');
var pass = document.getElementById('pass');
var hideAlert = document.getElementsByClassName('hideBlur');
var button = document.getElementsByClassName('btn-log');
var form = document.getElementsByTagName('form');
var okeyMail;
var okeyPass;

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
        console.log(okeyMail);
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
        console.log(okeyPass);
        return okeyPass;
    } else {
        hideAlert[1].innerHTML = '¡Completa con numeros y letras!';
        pass.classList.add('blur');
        okeyPass = false;
        console.log(okeyPass);
        return okeyPass;
    }
};

form[1].addEventListener('submit', function (e) {
    e.preventDefault();
    if (okeyMail === true && okeyPass === true) {
        console.log('succesful');
    } else {
        alert('Los datos ingresados no corresponden');
    }
});
