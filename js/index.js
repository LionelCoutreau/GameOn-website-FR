import { editNav } from './modules/navigation.js'
import { launchModal, closeModal } from './modules/modal.js'
import { validate, validateElement } from './modules/validation.js'
import { saveFormValues, restoreFormValues } from './modules/localstorage.js'

// DOM Elements
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')
const toggleNavBtn = document.getElementById('togglenav')
const closeBtn = document.querySelectorAll('.close');
const form = document.querySelector('form');
const formDataInput = document.querySelectorAll('.formData input')

// restore form values on page load
window.onload = restoreFormValues();

// Show / hide navigation menubars (xs only)
toggleNavBtn.addEventListener('click', editNav);

// launch modal event
modalBtn.forEach(btn => btn.addEventListener('click', launchModal))

// close modal event
closeBtn.forEach(btn => btn.addEventListener('click', closeModal));

// submit form event
form.addEventListener('submit', event => {
    event.preventDefault();

    // reset data errors
    formData.forEach(element => {
        element.setAttribute("data-error", "");
        element.setAttribute("data-error-visible", "false");
    });

    const result = validate();

    if (result)
    {
        const first = document.getElementById("first");
        const last = document.getElementById("last");
        const email = document.getElementById("email");
        const birthdate = document.getElementById("birthdate");
        const quantity = document.getElementById("quantity");
        const location = document.querySelector('input[name="location"]:checked');
        const conditions = document.getElementById("checkbox1");
        const information = document.getElementById("checkbox2");
        const json = {
            "first":first.value,
            "last":last.value,
            "email":email.value,
            "birthdate":birthdate.value,
            "quantity":quantity.value,
            "location":location.value,
            "conditions":conditions.checked,
            "information":information.checked
        };
        console.log(json);
        displayFormMessage();
    }
    else
    {
        saveFormValues();
    }
});

formDataInput.forEach(element => element.addEventListener('input', event => {
    event.preventDefault();
    validateElement(element.getAttribute("name"));
}));