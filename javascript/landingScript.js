var monitorImg = document.getElementById("monitorImg");
var monitorScreen = document.getElementById("monitorScreen");
var myName = document.getElementById("myName");
var myTitle = document.getElementById("myTitle");
var binaryNumbers = document.getElementsByClassName("binaryNumber");

changeScreenSize();

function changeScreenSize() {
    const newWidth = parseFloat(getComputedStyle(monitorImg).width) * 0.9;
    monitorScreen.style.width = `${newWidth}px`;
}

const observer = new ResizeObserver(changeScreenSize);
observer.observe(monitorImg);


flickerRandomLetter(myName);
flickerRandomLetter(myTitle);
spawnBinaryNumbers();

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

function deleteBinaryNumber(binaryNumber) {
    setTimeout(function() {
        binaryNumber.remove();
    }, 4000); 
}

function spawnBinaryNumbers() {
    var img = document.createElement('img');

    const randomNumber = Math.random();
    if (randomNumber < 0.4)
        img.src = './images/landing/0.png';
    else
        img.src = './images/landing/1.png';

    img.style.top = '0px';

    // Calculate the width of each segment
    var segmentWidth = screen.width / 10;

    // Choose a random segment
    var randomSegment = Math.floor(Math.random() * 13);

    // Calculate the maximum left position to ensure the image fits within the window
    var maxLeft = window.innerWidth - segmentWidth;

    // Set the left position based on the chosen segment, ensuring it does not exceed the maximum left position
    img.style.left = Math.min(randomSegment * segmentWidth, screen.width) + 'px';

    img.classList.add('binaryNumber');

    document.body.insertBefore(img, document.body.firstChild);

    deleteBinaryNumber(img);

    var randomDelay = Math.random() * 100 + 50;
    setTimeout(spawnBinaryNumbers, randomDelay);
}



