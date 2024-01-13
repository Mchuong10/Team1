let numberOfWords = 3;
let wordArray = [];

function transformWords() {
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
        const li = document.createElement("li");
        li.id = "li" + i;
        li.innerHTML = wordArray[i];
        ul01.appendChild(li);
    }

    const firstSection = document.getElementById('firstSection');
    const secondSection = document.getElementById("secondSection");
    const isClicked = !firstSection.classList.contains('hidden');

    if (isClicked) {
        firstSection.classList.add('hidden');
        secondSection.classList.remove('hidden');
    } else {
        firstSection.classList.remove('hidden');
        secondSection.classList.add('hidden');
    }
}
