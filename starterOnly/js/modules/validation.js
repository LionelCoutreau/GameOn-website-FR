// DOM form elements
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const location = document.getElementsByName("location");
const conditions = document.getElementById("conditions");
const formElements = document.querySelectorAll("formData input");
//const listElements = ["first", "last", "email", "quantity", "location", "conditions"];

// Validate all form before submit
export function validate()
{
    let result = true;

    // verify all form fields
    formElements.forEach(element => {
        result = validateElement(element);
    });

    return result;
}

// Validate form element on input
export function validateElement(elementName)
{
    let result = true;

    switch(elementName) {
        // "Prénom"
        case "first" :
            result = verifyFirst();
            break;
        // "Nom"
        case "last" :
            result = verifyLast();
            break;
        // "E-mail"
        case "email" :
            result = verifyEmail();
            break;
        // "À combien de tournois GameOn avez-vous déjà participé ?"
        case "quantity" :
            result = verifyQuantity();
            break;
        // "A quel tournoi souhaitez-vous participer cette année ?"
        case "location" :
            result = verifyLocation();
            break;
        // "J'ai lu et accepté les conditions d'utilisation"
        case "conditions" :
            result = verifyConditions();
            break;
    }

    return result;
}

// verify "first" field
function verifyFirst()
{
    // verify if less than 2 characters
    return isLessThanNumberOfChars(first, 2);
}

// verify "last" field
function verifyLast()
{
    // verify if less than 2 characters
    return isLessThanNumberOfChars(last, 2);
}

// verify "email" field
function verifyEmail()
{
    // verify if valid email
    return isEmailValid(email);
}

// verify "quantity" field
function verifyQuantity()
{
    // verify if numeric value
    return isNumeric(quantity);
}

// verify "location" field
function verifyLocation()
{
    // verify if one of the location options is checked
    return isOneRadioChecked(location);
}

// verify "conditions" field
function verifyConditions()
{
    // verify if checkbox is checked
    return isChecked(conditions);
}

// verify if value is less than x characters
function isLessThanNumberOfChars(element, x)
{
    let result = true;

    const formDataErr = element.parentElement;

    if(element.value.trim().length < x)
    {
        formDataErr.setAttribute("data-error", "Veuillez entrer ${x} caractères ou plus pour le champ du nom.");
        formDataErr.setAttribute("data-error-visible", "true");
        result = false;
    }

    return result;
}

// verify if mail is valid
function isEmailValid(element)
{
    let result = true;
    const validRegex = /^([A-Za-z0-9_\-\.\+])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const formDataErr = element.parentElement;

    if (!element.value.match(validRegex)) {
        formDataErr.setAttribute("data-error", "Veuillez entrer une adresse email valide");
        formDataErr.setAttribute("data-error-visible", "true");
        result = false;
    }

    return result;
}


// verify if value is numeric
function isNumeric(element)
{
    let result = true;
    const validRegex = /^([0-9])+$/;
    const formDataErr = element.parentElement;

    if (!element.value.match(validRegex)) {
        formDataErr.setAttribute("data-error", "Veuillez entrer un nombre compris entre 0 et 99");
        formDataErr.setAttribute("data-error-visible", "true");
        result = false;
    }

    return result;
}

// verify if one radio in group button is checked
function isOneRadioChecked(elementsGroup)
{
    let result = true;

    elementsGroup.forEach(element => {
        const formDataErr = element.parentElement;

        if (!element.checked) {
            formDataErr.setAttribute("data-error", "Vous devez choisir une option.");
            formDataErr.setAttribute("data-error-visible", "true");
            result = false;
        }
    });

    return result;
}

// verify if checkbox is checked
function isChecked(element)
{
    let result = true;
    const formDataErr = element.parentElement;

    if (!element.checked) {
        formDataErr.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
        formDataErr.setAttribute("data-error-visible", "true");
        result = false;
    }

    return result;
}
