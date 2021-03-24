const tagInput = document.getElementById("tag-display");
const changeButton = document.getElementById("tag-button");
const tagDisplay = document.getElementById("tag-id");

changeButton.addEventListener('click', () => {
    tagDisplay.textContent = tagInput.value;
});