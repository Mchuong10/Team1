
let numberOfWords = 3;
let wordArray = [];

for (let i = 0; i < numberOfWords; i++) {
    let wordEntered = prompt("Please enter a word:");
    if (wordEntered === null || wordEntered.trim() === "") {
        alert("Please enter a valid word. Try Again");
        i--;
    } else {
        wordArray.push(wordEntered);
    }
}

for (let i = 0; i < numberOfWords; i++) {
    let li = document.createElement("li");
    li.id = "li" + i;
    li.innerHTML = wordArray[i];
    document.getElementById("yourListContainer").appendChild(li);
}

const divContainer = document.querySelector('#firstSection');
let isClicked = true;

let transformWords = function () {
    if (isClicked) {
        divContainer.style.display = 'block';
        isClicked = false;
    } else {
        divContainer.style.display = 'none';
        isClicked = true;
    }
};

// Attach the click event listener to the button or element that triggers the transformation
document.getElementById("transform").addEventListener("click", transformWords);
