const tagInput = document.getElementById("tag-display");
const changeButton = document.getElementById("tag-button");
const tagDisplay = document.getElementById("tag-id");

changeButton.addEventListener('click', () => {
    tagDisplay.textContent = tagInput.value;
});

const colorButton = document.getElementById("color-button");
const h1Color = document.getElementById("top-box");
const h2Color = document.getElementById("top-mid-box");
const pColor = document.getElementById("bottom-box");

colorButton.addEventListener('click', () => {
    h1Color.style.backgroundColor = 'lightblue';
    pColor.style.backgroundColor = 'lightblue';
    h2Color.style.backgroundColor = 'lightblue';

});