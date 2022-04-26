var nombre = document.getElementById('name-sign');
var apellido = document.getElementById('surName-sign');
var dni = document.getElementById('dni');
var fdn = document.getElementById('fdn-sign');
var telefono = document.getElementById('tel-sign');
var dir = document.getElementById('dir-sign');
var local = document.getElementById('location-sign');
var cp = document.getElementById('cp-sign');
var email = document.getElementById('email-sign');
var contra = document.getElementById('pass-sign');
var reContra = document.getElementById('repass-sign');
var hideAlert = document.getElementsByClassName('error-text');
var validateValue = document.getElementsByClassName('inner-span');
var validateForm = document.getElementsByClassName('hide-cartel');
var form = document.getElementsByTagName('form');
var closeModal = document.getElementById('close-modal');

nombre.onfocus = function () {
    myFocus(nombre, 0);
};
nombre.onblur = function () {
    myBlur(nombre, 0);
};
apellido.onfocus = function () {
    myFocus(apellido, 1);
};
apellido.onblur = function () {
    myBlur(apellido, 1);
};
dni.onfocus = function () {
    myFocus(dni, 2);
};
dni.onblur = function () {
    myBlur(dni, 2);
};
fdn.onfocus = function () {
    myFocus(fdn, 3);
};
fdn.onblur = function () {
    myBlur(fdn, 3);
};
telefono.onfocus = function () {
    myFocus(telefono, 4);
};
telefono.onblur = function () {
    myBlur(telefono, 4);
};
dir.onfocus = function () {
    myFocus(dir, 5);
};
dir.onblur = function () {
    myBlur(dir, 5);
};
local.onfocus = function () {
    myFocus(local, 6);
};
local.onblur = function () {
    myBlur(local, 6);
};
cp.onfocus = function () {
    myFocus(cp, 7);
};
cp.onblur = function () {
    myBlur(cp, 7);
};
email.onfocus = function () {
    myFocus(email, 8);
};
email.onblur = function () {
    myBlur(email, 8);
};
contra.onfocus = function () {
    myFocus(contra, 9);
};
contra.onblur = function () {
    myBlur(contra, 9);
};
reContra.onfocus = function () {
    myFocus(reContra, 10);
};
reContra.onblur = function () {
    myBlur(reContra, 10);
};
form[1].onsubmit = function (e) {
    e.preventDefault();
    if (
        validateLetters(nombre, 3) == true &&
        validateLetters(apellido, 3) == true &&
        validateNumbers(dni, 7) == true &&
        validateDate(fdn) == true &&
        validateTel(telefono, 10) == true &&
        validateDir(dir, 5) == true &&
        validateLocal(local, 3) == true &&
        validateCp(cp) == true &&
        validateMail(email) == true &&
        validatePass(contra, 8) == true &&
        validateRePass(contra, reContra) == true
    ) {
        validateForm[0].classList.add('cartel');
        validateValue[0].innerHTML = nombre.value;
        validateValue[1].innerHTML = apellido.value;
        validateValue[2].innerHTML = dni.value;
        validateValue[3].innerHTML = fdn.value;
        validateValue[4].innerHTML = telefono.value;
        validateValue[5].innerHTML = dir.value;
        validateValue[6].innerHTML = local.value;
        validateValue[7].innerHTML = cp.value;
        validateValue[8].innerHTML = email.value;
        validateValue[9].innerHTML = contra.value;
        validateValue[10].innerHTML = reContra.value;
    } else {
        alert('¡Algun dato esta mal ingresado!');
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

function validateDate(x) {
    var year = Number(x.value.split('-')[0]);
    var month = Number(x.value.split('-')[1]);
    var day = Number(x.value.split('-')[2]);
    if (year < 1920 || year > 2004) {
        return false;
    } else if (month > 12 || month < 1) {
        return false;
    } else if (day > 31 || day < 1) {
        return false;
    } else {
        return true;
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

function validateLetters(x, valor) {
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
    if (x.value.length >= valor && num == 0 && char >= 1) {
        return true;
    } else {
        return false;
    }
}

function validateDir(x, valor) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var space = [' '];
    var num = 0;
    var spa = 0;
    var char = 0;
    for (i = 0; i < x.value.length; i++) {
        if (numbers.includes(x.value[i])) {
            num++;
        } else if (space.includes(x.value[i])) {
            spa++;
        } else {
            char++;
        }
    }
    if (x.value.length >= valor && num >= 1 && char >= 1 && spa == 1) {
        return true;
    } else {
        return false;
    }
}

function validateNumbers(x, valor) {
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
    if (x.value.length >= valor && num >= 1 && char == 0) {
        return true;
    } else {
        return false;
    }
}
function validateCp(x) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var num = 0;
    for (i = 0; i < x.value.length; i++) {
        if (numbers.includes(x.value[i])) {
            num++;
        }
    }
    if (x.value.length <= 5 && num >= 4) {
        return true;
    } else {
        return false;
    }
}

function validateTel(x, valor) {
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
    if (x.value.length == valor && num >= 1 && char == 0) {
        return true;
    } else {
        return false;
    }
}

function validatePass(x, valor) {
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
    if (x.value.length >= valor && num >= 1 && char >= 1 && special == false) {
        return true;
    } else {
        return false;
    }
}

function validateLocal(x, valor) {
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
    if (x.value.length >= valor && num >= 1 && char >= 3) {
        return true;
    } else {
        return false;
    }
}

function validateRePass(x, y) {
    if (x.value == y.value) {
        return true;
    } else {
        return false;
    }
}
