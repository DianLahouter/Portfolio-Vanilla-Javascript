var monitorImg = document.getElementById("monitorImg");
var monitorScreen = document.getElementById("monitorScreen");
var myName = document.getElementById("myName");
var myTitle = document.getElementById("myTitle");

changeScreenSize();

function changeScreenSize() {
    const newWidth = parseFloat(getComputedStyle(monitorImg).width) * 0.9;
    monitorScreen.style.width = `${newWidth}px`;
}

const observer = new ResizeObserver(changeScreenSize);
observer.observe(monitorImg);


flickerRandomLetter(myName);
flickerRandomLetter(myTitle);

function flickerRandomLetter(wordElement){
    var cleanWordElement = wordElement.innerHTML;
    let textContent = wordElement.textContent;
    let randomLetterIndex;
    do {
        randomLetterIndex = Math.floor(Math.random() * textContent.length);
    } while (randomLetterIndex === 4);
    

    textContent = textContent.substring(0, randomLetterIndex) + '<span class="letterGlitch">' + textContent[randomLetterIndex] + '</span>' + textContent.substring(randomLetterIndex+1);

    wordElement.innerHTML = textContent;

    setTimeout(function() {
        flickerRandomLetter(wordElement); 
    }, Math.random() * (3000 - 1500) + 1500);

    setTimeout(function() {
        turnLettersBackOn(wordElement,cleanWordElement); 
    }, Math.random() * (300 - 50) + 50);
}


function turnLettersBackOn(wordElement, cleanInnerHtml){
    wordElement.innerHTML = cleanInnerHtml;
}

function flickerLetter(index){

}