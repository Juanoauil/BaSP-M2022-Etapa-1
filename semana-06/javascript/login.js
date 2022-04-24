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
form[1].onsubmit = function (e) {
    e.preventDefault();
    var condicion1 = true;
    var condicion2 = true;
    var regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexMail.test(mail.value)) {
        return condicion1;
    }
};
// mail.onfocus = function () {
//     hideAlert[0].innerHTML = '';
//     mail.classList.remove('blur');
// };
// mail.onblur = function () {
//     var regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (regexMail.test(mail.value)) {
//         okeyMail = true;
//         return okeyMail;
//     } else {
//         hideAlert[0].innerHTML = '¡El formato no corresponde!';
//         mail.classList.add('blur');
//         okeyMail = false;
//     }
// };

// pass.onfocus = function () {
//     hideAlert[1].innerHTML = '';
//     pass.classList.remove('blur');
// };
// pass.onblur = function () {
//     var numbers = /[0-9]/;
//     var letters = /[a-z]/;
//     if (
//         pass.value.match(numbers) &&
//         pass.value.match(letters) &&
//         pass.value.length > 7
//     ) {
//         okeyPass = true;
//         return okeyPass;
//     } else {
//         hideAlert[1].innerHTML = '¡Completa con numeros y letras!';
//         pass.classList.add('blur');
//         okeyPass = false;
//         return okeyPass;
//     }
// };

// form[1].addEventListener('submit', function (e) {
//     e.preventDefault();
//     if (okeyMail === true && okeyPass === true) {
//         validateHide[0].classList.remove('hide-cartel');
//         validate[0].innerHTML = mail.value;
//         validate[1].innerHTML = pass.value;
//     } else {
//         alert('Los datos ingresados no corresponden');
//     }
// });
