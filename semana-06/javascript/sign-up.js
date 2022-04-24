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

// function blu(x, i) {
//     if (x.value != '') {
//         return true;
//     } else {
//         alertInput[i].innerHTML = '¡Completa con numeros y letras!';
//         x.classList.add('blur');
//         correct = false;
//         return correct;
//     }
// }
// function foc(x, i) {
//     alertInput[i].innerHTML = 'vacio';
//     x.classList.remove('blur');
// }

// contra.onfocus = function () {
//     hideAlert[9].innerHTML = '';
//     pass.classList.remove('blur');
// };
// contra.onblur = function () {
//     var numbers = /[0-9]/;
//     var letters = /[a-z]/;
//     if (
//         contra.value.match(numbers) &&
//         contra.value.match(letters) &&
//         contra.value.length > 7
//     ) {
//         return true;
//     } else {
//         hideAlert[9].innerHTML = '¡Completa con numeros y letras!';
//         pass.classList.add('blur');
//         return false;
//     }
// };
// function pepe(i, elementos) {
//     alertInput[i].innerHTML = '';
//     elementos.classList.remove('blur');
// }
// // function jorge(i, x) {
// function jorge(e, i, x) {
//     e.preventDefault();
//     if (typeof x.value === 'string' && x.value.length > 3) {
//         correct = true;
//         return correct;
//     } else {
//         alertInput[i].innerHTML = `¡El ${x} es muy corto!`;
//         x.classList.add('blur');
//         correct = false;
//         return correct;
//     }
// }

// contra.onfocus = pepe(e, 9, contra);
// contra.onblur = jorge(e, 9, contra);
// contra.addEventListener('focus', pepe(9, contra));
// contra.addEventListener('blur', jorge(9, contra));
// contra.onfocus = pepe(9, contra);
// contra.onblur = jorge(9, contra);
// contra.onblur = function () {
//     if (typeof contra.value === 'string' && contra.value.length > 3) {
//         correct = true;
//         return correct;
//     } else {
//         alertInput[9].innerHTML = '¡El apellido es muy corto!';
//         contra.classList.add('blur');
//         correct = false;
//     }
// };
// nombre.onfocus = function () {
//     alertInput[0].innerHTML = '';
//     nombre.classList.remove('blur');
// };

// nombre.onblur = function () {
//     if (typeof nombre.value === 'string' && nombre.value.length > 3) {
//         correct = true;
//         return correct;
//     } else {
//         alertInput[0].innerHTML = '¡El nombre es muy corto y no me sirve!';
//         nombre.classList.add('blur');
//         correct = false;
//         return correct;
//     }
// };

// apellido.onblur = function () {
//     if (typeof apellido.value === 'string' && apellido.value.length > 3) {
//         correct = true;
//         return correct;
//     } else {
//         alertInput[1].innerHTML = '¡El apellido es muy corto!';
//         apellido.classList.add('blur');
//         correct = false;
//     }
// };

// dni.onblur = function () {
//     if (typeof dni.value === 'number' && dni.value.length > 7) {
//         correct = true;
//         return correct;
//     } else {
//         alertInput[1].innerHTML = '¡El dni es muy corto!';
//         dni.classList.add('blur');
//         correct = false;
//     }
// };
// contra.onfocus = function () {
//     alertInput[9].innerHTML = '';
//     contra.classList.remove('blur');
// };
// contra.onblur = function oscar(x, i) {
//     if (typeof x.value === 'number' && x.value.length > 3) {
//         correct = true;
//         return correct;
//     } else {
//         alertInput[i].innerHTML = '¡Elasdasdasdasdasdes muy corto!';
//         x.classList.add('blur');
//         correct = false;
//         return correct;
//     }
// };
