const nameTitle = document.querySelector(".ask-name-container .name-message");
const form = document.querySelector(".ask-name-container form");
const nameInput = document.querySelector(".ask-name");
const NAME_LS = "yourName";

function hasNameAtLocal() {
    const localName = localStorage.getItem(NAME_LS);
    if (localName !== null) {
        return true;
    }
    return false;
}
function saveName() {
    localStorage.setItem(NAME_LS, nameInput.value);
}
function paintName() {
    const localName = localStorage.getItem(NAME_LS);
    const label = document.querySelector(".ask-name-container label");
    label.classList.add("hide");
    nameTitle.classList.remove("hide");
    document.querySelector(".time-message").classList.remove("hide");
    document.querySelector(".todo-list-container").classList.remove("hide");
    nameTitle.innerText = `안녕하세요 ${localName}씨!`;
}
function handleSubmit(event) {
    event.preventDefault();
    saveName();
    paintName();
}

function init() {
    if (hasNameAtLocal()) {
        paintName();
    } else {
        form.addEventListener("submit", handleSubmit);
    }
}

init();
