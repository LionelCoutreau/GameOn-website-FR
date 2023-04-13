const modalbg = document.querySelector('.bground');
const modalcontent = document.querySelector('.content');

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
    const modalClose = document.createElement("span");

    modalMessage.className = "modal-body-flex";
    // texte "Merci pour votre inscription"
    modalSuccess.className = "modal-success";
    modalSuccess.innerText = "Merci pour votre inscription";
    // bouton "Fermer"
    modalButton.className = "btn-close";
    modalButton.innerText = "Fermer";
    // bouton "X"
    modalClose.className = "close";

    modalcontent.append(modalClose);
    modalcontent.append(modalMessage);
    modalMessage.append(modalSuccess);
    modalMessage.append(modalButton);

    modalButton.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
}