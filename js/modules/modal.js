const modalbg = document.querySelector('.bground');
const modalcontent = document.getElementById('content');

// launch modal form
export function launchModal () {
    modalbg.style.display = 'block';
}

// close modal form
export function closeModal () {
    modalbg.style.display = 'none';
}

export function displayFormMessage () {
    // empty modal content
    modalcontent.innerHTML = "";

    // create message text elements
    const modalMessage = document.createElement("div");
    const modalSuccess = document.createElement("div");
    const modalButton = document.createElement("button");

    modalMessage.className = "modal-body-flex";
    // texte "Merci pour votre inscription"
    messageSuccess.className = "modal-success";
    messageSuccess.innerText = "Merci pour votre inscription";
    // bouton "Fermer"
    modalButton.className = "btn-submit";
    modalButton.innerText = "Fermer";
}