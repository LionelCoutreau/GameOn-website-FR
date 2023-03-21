const modalbg = document.querySelector('.bground');
const prenom = document.getElementById('first');
const nom = document.getElementById('last');
const email = document.getElementById('email');
const location = document.querySelector('input[name=location]');
const cg = document.getElementById('checkbox1');

// launch modal form
export function launchModal () {
    modalbg.style.display = 'block';
}

// close modal form
export function closeModal () {
    modalbg.style.display = 'none';
}

// submit form
export function submitForm () {
    validate();
}


function validate() {
    // verify first name
}