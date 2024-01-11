const container = document.querySelector(`.container-modal`)
const alertBtn = document.getElementById('alert');
// const closeBtn = document.querySelector('.close');
const userTitle = document.getElementById('inputTitle');
const userText = document.getElementById('inputText');
const modal = document.querySelector(`.modal`)
let counter = false;

alertBtn.addEventListener(`click`, (e) => {
    e.stopPropagation();    
    const title = userTitle.value.trim();
    const text = userText.value.trim();
    if (text !== '' && title !== '') {
        showAlert(title, text);
        userTitle.value = '';
        userText.value = '';
        counter = true
    }



})
container.addEventListener('click', (e) => {
    if (e.target === container && counter === true) {
        closeModal();
    }
});

window.addEventListener(`keydown` , (e) => {
    if (e.code === `Escape` && counter === true ){
        closeModal()
    }
})
function closeModal () {
    container.style.display = "none";
    counter = false
while (modal.lastChild) {
    modal.lastChild.remove()
}
}
function showAlert(SomeTitle, SomeText) {
    const createCloseBtn = document.createElement(`span`);
    const createTitle = document.createElement(`h1`);
    const createText = document.createElement(`p`);

    createCloseBtn.classList.add(`close`);
    createCloseBtn.innerHTML = `&times;`;
    createTitle.innerHTML = `${SomeTitle}`;
    createText.innerHTML = `${SomeText}`; 

    createCloseBtn.addEventListener('click', closeModal);

    modal.append(createCloseBtn);
    modal.append(createTitle);
    modal.append(createText);

    container.style.display = "flex";

}
