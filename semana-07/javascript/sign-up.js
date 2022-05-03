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
var alertCartel = document.getElementsByClassName('inner-cartel');
var closeModal = document.getElementsByClassName('close-modal');
var invalidChars = ['-', '+', 'e', '.'];
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

////// FUNCTIONS

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
        num == 0 &&
        char >= 3 &&
        special == false
    ) {
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
function alertInvalidInput() {
    for (i = 0; i < 11; i++) {
        hideAlert[i].classList.add('error');
    }
}
function clearInputs() {
    for (i = 0; i < 11; i++) {
        hideAlert[i].classList.remove('error');
    }
}
function createUser(
    nameValue,
    lastNameValue,
    idValue,
    dobValue,
    phoneValue,
    addressValue,
    cityValue,
    zipValue,
    emailValue,
    passValue,
    url
) {
    fetch(
        url +
            '?name=' +
            nameValue +
            '&lastName=' +
            lastNameValue +
            '&dni=' +
            idValue +
            '&dob=' +
            dobValue +
            '&phone=' +
            phoneValue +
            '&address=' +
            addressValue +
            '&city=' +
            cityValue +
            '&zip=' +
            zipValue +
            '&email=' +
            emailValue +
            '&password=' +
            passValue
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonResponse) {
            if (jsonResponse.success) {
                validateForm[1].classList.add('cartel');
                alertCartel[0].innerHTML = jsonResponse.msg;
                myStorage();
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
                clearInputs();
            } else {
                validateForm[1].classList.add('cartel');
                alertCartel[0].innerHTML = jsonResponse.errors[0].msg;
                alertInvalidInput();
            }
        })
        .catch(function (error) {
            console.log('Error', error);
        });
}
function myStorage() {
    localStorage.setItem('name', firstName.value);
    localStorage.setItem('lastName', surName.value);
    localStorage.setItem('dni', idNumber.value);
    localStorage.setItem('date', dateBirth.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('address', addressInput.value);
    localStorage.setItem('city', local.value);
    localStorage.setItem('zip', zipCode.value);
    localStorage.setItem('email', email.value);
}

////// EVENTS

if (
    localStorage.getItem('name') != null &&
    localStorage.getItem('lastName') != null &&
    localStorage.getItem('dni') != null &&
    localStorage.getItem('date') != null &&
    localStorage.getItem('phone') != null &&
    localStorage.getItem('address') != null &&
    localStorage.getItem('city') != null &&
    localStorage.getItem('zip') != null &&
    localStorage.getItem('email') != null
) {
    firstName.value = localStorage.getItem('name');
    surName.value = localStorage.getItem('lastName');
    idNumber.value = localStorage.getItem('dni');
    dateBirth.value = localStorage.getItem('date');
    phone.value = localStorage.getItem('phone');
    addressInput.value = localStorage.getItem('address');
    local.value = localStorage.getItem('city');
    zipCode.value = localStorage.getItem('zip');
    email.value = localStorage.getItem('email');
}
idNumber.addEventListener('keydown', function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});
phone.addEventListener('keydown', function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});
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
    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';
    var formatDate = dateBirth.value.split('-');
    var newFormat =
        formatDate.slice(1, 2) +
        '/' +
        formatDate.slice(2) +
        '/' +
        formatDate.slice(0, 1);
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
        createUser(
            firstName.value,
            surName.value,
            idNumber.value,
            newFormat,
            // dateBirth.value,
            phone.value,
            addressInput.value,
            local.value,
            zipCode.value,
            email.value,
            password.value,
            url
        );
    } else {
        validateForm[1].classList.add('cartel');
        alertCartel[0].innerHTML = 'Invalid inputs!';
        alertInvalidInput();
    }
};
closeModal[0].onclick = function () {
    validateForm[0].classList.remove('cartel');
};
closeModal[1].onclick = function () {
    validateForm[1].classList.remove('cartel');
};
