
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

        const firstSection = document.querySelector('#firstSection');
        const secondSection = document.getElementById("secondSection");
        let isClicked = true;

        let transformWords = function () {
            
            if (isClicked) {
                firstSection.style.display = 'none'; // Changed to 'none'
                secondSection.style.display = 'block';
                isClicked = false;
            } else {
                firstSection.style.display = 'block';
                secondSection.style.display = 'none'; // Changed to 'none'
                isClicked = true;
            }
        };
