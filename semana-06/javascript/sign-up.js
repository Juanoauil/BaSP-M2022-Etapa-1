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
    myBlurTwo(nombre, 0, validateLetters, 3);
};
apellido.onfocus = function () {
    myFocus(apellido, 1);
};
apellido.onblur = function () {
    myBlurTwo(apellido, 1, validateLetters, 3);
};
dni.onfocus = function () {
    myFocus(dni, 2);
};
dni.onblur = function () {
    myBlurTwo(dni, 2, validateNumbers, 7);
};
fdn.onfocus = function () {
    myFocus(fdn, 3);
};
fdn.onblur = function () {
    myBlur(fdn, 3, validateDate);
};
telefono.onfocus = function () {
    myFocus(telefono, 4);
};
telefono.onblur = function () {
    myBlurTwo(telefono, 4, validateTel, 10);
};
dir.onfocus = function () {
    myFocus(dir, 5);
};
dir.onblur = function () {
    myBlurTwo(dir, 5, validateDir, 5);
};
local.onfocus = function () {
    myFocus(local, 6);
};
local.onblur = function () {
    myBlurTwo(local, 6, validateLocal, 3);
};
cp.onfocus = function () {
    myFocus(cp, 7);
};
cp.onblur = function () {
    myBlur(cp, 7, validateCp);
};
email.onfocus = function () {
    myFocus(email, 8);
};
email.onblur = function () {
    myBlur(email, 8, validateMail);
};
contra.onfocus = function () {
    myFocus(contra, 9);
};
contra.onblur = function () {
    myBlurTwo(contra, 9, validatePass, 8);
};
reContra.onfocus = function () {
    myFocus(reContra, 10);
};
reContra.onblur = function () {
    if (validatePass(reContra, 8) && reContra.value === contra.value) {
        reContra.classList.add('correct');
        hideAlert[10].classList.remove('error');
    } else {
        reContra.classList.add('blur');
        reContra.classList.remove('correct');
        hideAlert[10].classList.add('error');
    }
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
        alert('??Algun dato esta mal ingresado!');
        inValidInputs();
    }
};
closeModal.onclick = function () {
    validateForm[0].classList.remove('cartel');
};

function inValidInputs() {
    for (i = 0; i < 11; i++) {
        hideAlert[i].classList.add('error');
    }
}

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

function myBlurTwo(inputs, i, validation, valor) {
    if (validation(inputs, valor) == true) {
        inputs.classList.add('correct');
        hideAlert[i].classList.remove('error');
    } else {
        inputs.classList.add('blur');
        inputs.classList.remove('correct');
        hideAlert[i].classList.add('error');
    }
}

function validateDate(inputs) {
    var year = Number(inputs.value.split('-')[0]);
    var month = Number(inputs.value.split('-')[1]);
    var day = Number(inputs.value.split('-')[2]);
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

function validateMail(inputs) {
    var regexMail = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
    if (regexMail.test(inputs.value)) {
        return true;
    } else {
        return false;
    }
}

function validateLetters(inputs, valor) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var num = 0;
    var char = 0;
    for (i = 0; i < inputs.value.length; i++) {
        if (numbers.includes(inputs.value[i])) {
            num++;
        } else {
            char++;
        }
    }
    if (inputs.value.length >= valor && num == 0 && char >= 1) {
        return true;
    } else {
        return false;
    }
}

function validateDir(inputs, valor) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var space = [' '];
    var num = 0;
    var spa = 0;
    var char = 0;
    for (i = 0; i < inputs.value.length; i++) {
        if (numbers.includes(inputs.value[i])) {
            num++;
        } else if (space.includes(inputs.value[i])) {
            spa++;
        } else {
            char++;
        }
    }
    if (inputs.value.length >= valor && num >= 1 && char >= 1 && spa == 1) {
        return true;
    } else {
        return false;
    }
}

function validateNumbers(inputs, valor) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var num = 0;
    var char = 0;
    for (i = 0; i < inputs.value.length; i++) {
        if (numbers.includes(inputs.value[i])) {
            num++;
        } else {
            char++;
        }
    }
    if (inputs.value.length >= valor && num >= 1 && char == 0) {
        return true;
    } else {
        return false;
    }
}

function validateCp(inputs) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var num = 0;
    for (i = 0; i < inputs.value.length; i++) {
        if (numbers.includes(inputs.value[i])) {
            num++;
        }
    }
    if (inputs.value.length <= 5 && num >= 4) {
        return true;
    } else {
        return false;
    }
}

function validateTel(inputs, valor) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var num = 0;
    var char = 0;
    for (i = 0; i < inputs.value.length; i++) {
        if (numbers.includes(inputs.value[i])) {
            num++;
        } else {
            char++;
        }
    }
    if (inputs.value.length == valor && num >= 1 && char == 0) {
        return true;
    } else {
        return false;
    }
}

function validatePass(inputs, valor) {
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
    if (
        inputs.value.length >= valor &&
        num >= 1 &&
        char >= 1 &&
        special == false
    ) {
        return true;
    } else {
        return false;
    }
}

function validateLocal(inputs, valor) {
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
    if (inputs.value.length >= valor && num >= 1 && char >= 3) {
        return true;
    } else {
        return false;
    }
}

function validateRePass(inputs, validation) {
    if (inputs.value == validation.value) {
        return true;
    } else {
        return false;
    }
}
