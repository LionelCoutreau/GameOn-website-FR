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
    formData.setAttribute("data-error", "");
    formData.setAttribute("data-error-visible", "false");

    const result = validate();

    if (result)
    {
        displayFormMessage();
    }
    else
    {
        saveFormValues();
    }
});

formDataInput.addEventListener('input', event => {
    event.preventDefault();
    validateElement(this.getAttribute("name"));
});