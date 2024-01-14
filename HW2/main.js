let numberOfWords = 3;
let wordArray = [];
let currentSection = 'firstSection';

document.addEventListener("DOMContentLoaded", function (event) {

  
  for (let i = 0; i < numberOfWords; i++) {
    let word = prompt("Please enter a word:");
    if (word === null || word.trim() === "") {
      alert("Please enter a valid word. Try again.");
      i--;
    } else {
      wordArray.push(word);
    }
  }

  
  for (let i = 0; i < numberOfWords; i++) {
    let li = document.getElementById("li" + i);
    if (li) {
      li.innerHTML = wordArray[i];
      
    }
  }
  const firstSection = document.getElementById("firstSection");
  const secondSection = document.getElementById("secondSection");
  const transformButton = document.getElementById("transformButton"); 
    transformButton.addEventListener("click", function () {
      if (currentSection === "firstSection") {
        firstSection.classList.add("hidden");
        secondSection.classList.remove("hidden");
        currentSection = "secondSection";
      } else {
        firstSection.classList.remove("hidden");
        secondSection.classList.add("hidden");
        currentSection = "firstSection";
      }
    });
});
