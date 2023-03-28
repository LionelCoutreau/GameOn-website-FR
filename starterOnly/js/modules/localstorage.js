const formData = document.querySelectorAll("formData input");

// save form values
export function saveFormValues()
{
    formData.forEach(element => {
        const id = element.getAttribute("id");
        const type = element.getAttribute("type");
        switch(type) {
            case "text" :
                window.localStorage.setItem(id, element.value);
                break;
            case "checkbox" :
            case "radio" :
                window.localStorage.setItem(id, element.checked);
                break;
        }
    });
}

// restore form values
export function restoreFormValues()
{
    formData.forEach(element => {
        const id = element.getAttribute("id");
        const type = element.getAttribute("type");
        switch(type) {
            case "text" :
                element.value = window.localStorage.getItem(id);
                break;
            case "checkbox" :
            case "radio" :
                element.checked = window.localStorage.getItem(id);
                break;
        }
    });
}