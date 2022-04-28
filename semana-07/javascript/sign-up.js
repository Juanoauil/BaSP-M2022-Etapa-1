var firstName = document.getElementById('name-sign');
var surName = document.getElementById('surName-sign');
var idNumber = document.getElementById('dni');
var dateBirth = document.getElementById('fdn-sign');
var phone = document.getElementById('tel-sign');
var addressInput = document.getElementById('dir-sign');
var local = document.getElementById('location-sign');
var zipCode = document.getElementById('cp-sign');
var email = document.getElementById('email-sign');
var password = document.getElementById('pass-sign');
var rePassword = document.getElementById('repass-sign');
var hideAlert = document.getElementsByClassName('error-text');
var validateValue = document.getElementsByClassName('inner-span');
var validateForm = document.getElementsByClassName('hide-cartel');
var form = document.getElementsByTagName('form');
var closeModal = document.getElementById('close-modal');

function myFocus(inputs, i) {
    inputs.classList.remove('blur');
    hideAlert[i].classList.remove('error');
}

function myBlur(inputs, i, validation) {
    if (validation(inputs)) {
        inputs.classList.add('correct');
        hideAlert[i].classList.remove('error');
    } else {
        inputs.classList.add('blur');
        inputs.classList.remove('correct');
        hideAlert[i].classList.add('error');
    }
}

function myBlurTwo(inputs, i, validation, inputsLength) {
    if (validation(inputs, inputsLength)) {
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

function validateLetters(inputs, inputsLength) {
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
    if (inputs.value.length >= inputsLength && num == 0 && char >= 1) {
        return true;
    } else {
        return false;
    }
}

function validateDir(inputs, inputsLength) {
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
    if (
        inputs.value.length >= inputsLength &&
        num >= 1 &&
        char >= 1 &&
        spa == 1
    ) {
        return true;
    } else {
        return false;
    }
}

function validateNumbers(inputs, inputsLength) {
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
    if (inputs.value.length >= inputsLength && num >= 1 && char == 0) {
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

function validateTel(inputs, inputsLength) {
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
    if (inputs.value.length == inputsLength && num >= 1 && char == 0) {
        return true;
    } else {
        return false;
    }
}

function validatePass(inputs, inputsLength) {
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
        inputs.value.length >= inputsLength &&
        num >= 1 &&
        char >= 1 &&
        special == false
    ) {
        return true;
    } else {
        return false;
    }
}

function validateLocal(inputs, inputsLength) {
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
    if (inputs.value.length >= inputsLength && num >= 1 && char >= 3) {
        return true;
    } else {
        return false;
    }
}

function validateRePass(pass1, pass2) {
    if (pass1.value == pass2.value) {
        return true;
    } else {
        return false;
    }
}

function inValidInputs() {
    for (i = 0; i < 11; i++) {
        hideAlert[i].classList.add('error');
    }
}

////// EVENTS

firstName.onfocus = function () {
    myFocus(firstName, 0);
};
firstName.onblur = function () {
    myBlurTwo(firstName, 0, validateLetters, 3);
};
surName.onfocus = function () {
    myFocus(surName, 1);
};
surName.onblur = function () {
    myBlurTwo(surName, 1, validateLetters, 3);
};
idNumber.onfocus = function () {
    myFocus(idNumber, 2);
};
idNumber.onblur = function () {
    myBlurTwo(idNumber, 2, validateNumbers, 7);
};
dateBirth.onfocus = function () {
    myFocus(dateBirth, 3);
};
dateBirth.onblur = function () {
    myBlur(dateBirth, 3, validateDate);
};
phone.onfocus = function () {
    myFocus(phone, 4);
};
phone.onblur = function () {
    myBlurTwo(phone, 4, validateTel, 10);
};
addressInput.onfocus = function () {
    myFocus(addressInput, 5);
};
addressInput.onblur = function () {
    myBlurTwo(addressInput, 5, validateDir, 5);
};
local.onfocus = function () {
    myFocus(local, 6);
};
local.onblur = function () {
    myBlurTwo(local, 6, validateLocal, 3);
};
zipCode.onfocus = function () {
    myFocus(zipCode, 7);
};
zipCode.onblur = function () {
    myBlur(zipCode, 7, validateCp);
};
email.onfocus = function () {
    myFocus(email, 8);
};
email.onblur = function () {
    myBlur(email, 8, validateMail);
};
password.onfocus = function () {
    myFocus(password, 9);
};
password.onblur = function () {
    myBlurTwo(password, 9, validatePass, 8);
};
rePassword.onfocus = function () {
    myFocus(rePassword, 10);
};
rePassword.onblur = function () {
    if (validatePass(rePassword, 8) && rePassword.value === password.value) {
        rePassword.classList.add('correct');
        hideAlert[10].classList.remove('error');
    } else {
        rePassword.classList.add('blur');
        rePassword.classList.remove('correct');
        hideAlert[10].classList.add('error');
    }
};
form[1].onsubmit = function (e) {
    e.preventDefault();
    if (
        validateLetters(firstName, 3) &&
        validateLetters(surName, 3) &&
        validateNumbers(idNumber, 7) &&
        validateDate(dateBirth) &&
        validateTel(phone, 10) &&
        validateDir(addressInput, 5) &&
        validateLocal(local, 3) &&
        validateCp(zipCode) &&
        validateMail(email) &&
        validatePass(password, 8) &&
        validateRePass(password, rePassword)
    ) {
        validateForm[0].classList.add('cartel');
        validateValue[0].innerHTML = firstName.value;
        validateValue[1].innerHTML = surName.value;
        validateValue[2].innerHTML = idNumber.value;
        validateValue[3].innerHTML = dateBirth.value;
        validateValue[4].innerHTML = phone.value;
        validateValue[5].innerHTML = addressInput.value;
        validateValue[6].innerHTML = local.value;
        validateValue[7].innerHTML = zipCode.value;
        validateValue[8].innerHTML = email.value;
        validateValue[9].innerHTML = password.value;
        validateValue[10].innerHTML = rePassword.value;
    } else {
        alert('¡Algun dato esta mal ingresado!');
        inValidInputs();
    }
};
closeModal.onclick = function () {
    validateForm[0].classList.remove('cartel');
};

fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup')
    .then(function (response) {
        console.log('response', response);
        return response.json();
    })
    .then(function (jsonResponse) {
        console.log('json', jsonResponse);
        if (jsonResponse) {
            console.log('Good', jsonResponse);
        } else {
            throw jsonResponse;
        }
    })
    .catch(function (error) {
        console.warn('Error', error);
    });
