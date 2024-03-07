var matrixLanes = [];
var aboutMeHeading = document.getElementById("aboutMeHeading");
var logoutButton = document.getElementById("logoutButton");

//spawnBinaryNumbers();
flickerRandomLetter(aboutMeHeading);

function deleteBinaryNumber(binaryNumber) {
    setTimeout(function() {
        binaryNumber.remove();
    }, 6500); 
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
    var totalLanes = 8;
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

    var randomDelay = Math.random() * 70 + 55;
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


// var elements = document.getElementsByClassName("aboutMeDescription");

// for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener("mouseenter", showDescriptionText);
//     elements[i].addEventListener("mouseleave", hideDescriptionText);
// }

// function showDescriptionText(event) {
//     event.stopPropagation();

//     console.log("showing");
//     var totalLettersAtAtime = 4;
//     var hoveredOverElement = event.currentTarget;
//     var icon = hoveredOverElement.querySelector(".aboutMeIcons")
//     var descriptionText = hoveredOverElement.querySelector(".descriptionTextStorage").textContent;
//     var descriptionElement = hoveredOverElement.querySelector(".descriptionText");

//     if (descriptionElement.getAttribute('currently-deleting') !== 'true' || descriptionElement.getAttribute('currently-writing') !== 'true') {
//         var paragraphIndex = 0;
//         icon.style.filter = "grayscale(0%)";
//         descriptionElement.style.display = "block";
//         descriptionElement.setAttribute('currently-writing', 'true'); 

//         function writeParagraph() {
//             if(descriptionElement.getAttribute('currently-deleting') == 'true'){
//                 return;
//             }

//             for(var i = 0 ; i < totalLettersAtAtime ; i++){
//                 if(descriptionText.length > paragraphIndex)
//                     descriptionElement.textContent = descriptionElement.textContent + descriptionText[paragraphIndex];

//                 paragraphIndex++;
//             }

//             if (paragraphIndex < descriptionText.length) {
//               setTimeout(writeParagraph, 0.04); 
//             }
//           }

//           writeParagraph();

//           descriptionElement.setAttribute('currently-writing', 'false'); 
//     }
// }

// function hideDescriptionText(event) {
//     event.stopPropagation();
//     console.log("deleting");

//     var hoveredOverElement = event.currentTarget;
//     var icon = hoveredOverElement.querySelector(".aboutMeIcons")
//     var descriptionElement = hoveredOverElement.querySelector(".descriptionText");

//     if (descriptionElement.getAttribute('currently-deleting') !== 'true' || descriptionElement.getAttribute('currently-writing') !== 'true') {

//         descriptionElement.setAttribute('currently-writing', 'false'); 
//         descriptionElement.setAttribute('currently-deleting', 'true'); 

//         var currentDescriptionText = hoveredOverElement.querySelector(".descriptionText").textContent;
//         var totalLettersAtAtime = 10;
//         var paragraphIndex = currentDescriptionText.length;

//         function deleteParagraph() {
//             if(descriptionElement.getAttribute('currently-writing') == 'true'){
//                 return;
//             }

//             for(var i = 0 ; i < totalLettersAtAtime ; i++){
//                 if(paragraphIndex > 0){
//                     descriptionElement.textContent = descriptionElement.textContent.substring(0, descriptionElement.textContent.length - 1);
//                 }

//                 paragraphIndex--;
//             }

//             if (descriptionElement.textContent.length > 0) {
//               setTimeout(deleteParagraph, 0.03); 
//             } else {
//               descriptionElement.style.display = "none";
//               icon.style.filter = "grayscale(100%)"; 
//               descriptionElement.setAttribute('currently-deleting', 'false'); 
//             }
//           }

//           deleteParagraph();
//     }
// }

const cursor = document.querySelector(".cursor");

function moveCursor(e) {
    cursor.style.top = e.pageY - 7 - window.scrollY + "px";
    cursor.style.left = e.pageX - 7 + "px";
}

function updateCursor(e) {
    requestAnimationFrame(() => {
        moveCursor(e);
    });
}

var waitToSpawnPixelFlag = false;
var prevColour = 'white';

document.addEventListener('mousemove', updateCursor);

document.addEventListener('mousemove', e => {
    if(!waitToSpawnPixelFlag){
        setFlag();

        setTimeout(() => {
            setFlag();
        }, 15); 

        const yOffset = Math.random() < 0.3 ? -3 : 3;
            
        const pixel = document.createElement('div');
        pixel.className = 'pixel';

        if(prevColour == "white"){
            pixel.style.backgroundColor = "#313131"
            prevColour = "black";
        }else{
            pixel.style.backgroundColor = "#313131"
            prevColour = "white";
        }

        pixel.style.top = (e.pageY + yOffset) + 'px';
        pixel.style.left = e.pageX + 'px';

        document.body.appendChild(pixel);

        setTimeout(() => {
            pixel.remove();
        }, 90); 
    }
    
});

function setFlag(){
    if(waitToSpawnPixelFlag)
        waitToSpawnPixelFlag = false;
    else
        waitToSpawnPixelFlag = true;
}


const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        cursor.style.borderRadius = "50%"; 
        cursor.style.borderWidth = "0.7vh"; 
        cursor.style.borderColor = "#313131"; 
        cursor.style.height = "1vh"
        cursor.style.width = "1vh"
    });

    button.addEventListener("mouseleave", () => {
        cursor.style.borderRadius = "20%";
        cursor.style.borderColor = "#1f1f1f";
        cursor.style.borderWidth = "0.6vh";
        cursor.style.height = "1.2vh"
        cursor.style.width = "1.2vh"
    });
});


var navIcons = document.getElementsByClassName("navIcon");

for (var i = 0; i < navIcons.length; i++) {
    navIcons[i].addEventListener("mouseup", function() {
        setTimeout(() => {
            if(navIcons[i].id == "aboutMeNavIcon" && document.body.id != "mainPageBody"){
                window.location.href = "./Main_Page.html";
            }else if(navIcons[i].id == "educationNavIcon" && document.body.id != "educationBody"){
                window.location.href = "./Education.html";
            }else if(navIcons[i].id == "skillsNavIcon" && document.body.id != "skillsBody"){
                window.location.href = "./Skills.html";
            }
        }, 330);
    
        var element = document.getElementById('rightTransitionObject');
        element.style.animation = 'closeLeft 0.3s ease-out forwards';
    
        var element = document.getElementById('leftTransitionObject');
        element.style.animation = 'closeRight 0.3s ease-out forwards'; 
    });
}

// spawnBinaryNumbers();