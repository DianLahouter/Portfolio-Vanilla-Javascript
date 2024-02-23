var matrixLanes = [];
var aboutMeHeading = document.getElementById("aboutMeHeading");
var logoutButton = document.getElementById("logoutButton");

//spawnBinaryNumbers();
flickerRandomLetter(aboutMeHeading);

function deleteBinaryNumber(binaryNumber) {
    setTimeout(function() {
        binaryNumber.remove();
    }, 4000); 
}

logoutButton.addEventListener('mouseup', function(event) {
    setTimeout(() => {
        window.location.href = "./Landing.html";
    }, 330);

    var element = document.getElementById('rightTransitionObject');
    element.style.animation = 'closeLeft 0.3s ease-out forwards';

    var element = document.getElementById('leftTransitionObject');
    element.style.animation = 'closeRight 0.3s ease-out forwards';
});

function spawnBinaryNumbers() {
    var totalLanes = 14;
    var spawnPoint = 0;
    var img = document.createElement('img');

    //Initiate lanes array
    for(var i = 0; i < totalLanes ; i++){
        matrixLanes.push(0);
    }

    const randomNumber = Math.random();
    if (randomNumber < 0.35)
        img.src = './images/landing/0.png';
    else
        img.src = './images/landing/1.png';

    img.style.top = '0px';

    // Calculate the width of each segment
    var segmentWidth = screen.width / totalLanes;
    spawnPoint += segmentWidth;

    var randomSegment = Math.floor(Math.random() * totalLanes);

    //Get unoccupied lane
    while(matrixLanes[randomSegment] == 1){
        randomSegment = Math.floor(Math.random() * totalLanes);
    }

    var segmentCounter = 0;
    while(segmentCounter < randomSegment){
        spawnPoint += segmentWidth;
        segmentCounter++;
    }

    img.style.left = spawnPoint + 'px';
    img.classList.add('binaryNumberMainPage');
    document.body.insertBefore(img, document.body.firstChild);

    deleteBinaryNumber(img);
    occupyLane(randomSegment);

    var randomDelay = Math.random() * 30 + 25;
    setTimeout(spawnBinaryNumbers, randomDelay);
}

function occupyLane(index){
    matrixLanes[index] = 1;

    setTimeout(function() {
        unOccupyLane(index); 
    }, 140);
}

function unOccupyLane(index){
    matrixLanes[index] = 0;
}


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
    }, Math.random() * (1800 - 1000) + 1000);

    setTimeout(function() {
        turnLettersBackOn(wordElement,cleanWordElement); 
    }, Math.random() * (700 - 50) + 50);
}


function turnLettersBackOn(wordElement, cleanInnerHtml){
    wordElement.innerHTML = cleanInnerHtml;
}


var elements = document.getElementsByClassName("aboutMeDescription");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", showDescriptionText);
    elements[i].addEventListener("mouseout", hideDescriptionText);
}

function showDescriptionText(event) {
    var totalLettersAtAtime = 3;
    var hoveredOverELement = event.currentTarget;
    var descriptionText = hoveredOverELement.querySelector(".descriptionTextStorage").textContent;
    var descriptionElement = hoveredOverELement.querySelector(".descriptionText");

    if (window.getComputedStyle(descriptionElement).getPropertyValue('display') === "none"){
        var paragraphIndex = 0;

        descriptionElement.style.display = "block"
    
        function writeParagraph() {
            for(var i = 0 ; i < totalLettersAtAtime ; i++){
                if(descriptionText.length >= paragraphIndex)
                    descriptionElement.textContent = descriptionElement.textContent + descriptionText[paragraphIndex];
    
                paragraphIndex++;
            }
        
            if (paragraphIndex < descriptionText.length) {
              setTimeout(writeParagraph, 0.09); 
            }
          }
        
          writeParagraph();
    }
}

function hideDescriptionText(event) {
    var totalLettersAtAtime = 8;
    var hoveredOverELement = event.currentTarget;
    var currentDescriptionText = hoveredOverELement.querySelector(".descriptionText").textContent;
    var descriptionElement = hoveredOverELement.querySelector(".descriptionText");

    if (window.getComputedStyle(descriptionElement).getPropertyValue('display') === "block"){
        console.log("hererrr");
        var paragraphIndex = currentDescriptionText.length;

        function deleteParagraph() {
            for(var i = 0 ; i < totalLettersAtAtime ; i++){
                if(paragraphIndex >= 0){
                    descriptionElement.textContent = descriptionElement.textContent.substring(0, descriptionElement.textContent.length - 1);
                }else{
                    
                }
    
                paragraphIndex--;
            }
        
            if (currentDescriptionText.length >= 0) {
              setTimeout(deleteParagraph, 0.03); 
            }
          }
        
          deleteParagraph();
    }
}
