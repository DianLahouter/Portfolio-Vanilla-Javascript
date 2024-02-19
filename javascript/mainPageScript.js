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


// setTimeout(function() {
//     var prevScrollY = window.scrollY;

//     window.addEventListener('scroll', function() {
//         var scrolled = window.scrollY;
//         var scrollDirection = scrolled > prevScrollY ? 'down' : 'up';

//         var wire1 = document.getElementById('wire1');
//         var wire2 = document.getElementById('wire2');
//         var wire3 = document.getElementById('wire3');

//         console.log(wire1.clientHeight);

//         // Calculate the scaling factors based on the scroll direction
//         var scalingFactor1 = Math.abs(scrolled - prevScrollY) * 2.8; // Adjust the coefficient as needed
//         var scalingFactor2 = Math.abs(scrolled - prevScrollY) * 2.5; // Adjust the coefficient as needed
//         var scalingFactor3 = Math.abs(scrolled - prevScrollY) * 2.2; // Adjust the coefficient as needed

//         // Update the height based on the scaling factors and scroll direction
//         if (scrollDirection === 'down') {
//             wire1.style.height = Math.max(wire1.clientHeight - scalingFactor1, 0) + 'px';
//             wire2.style.height = Math.max(wire2.clientHeight - scalingFactor2, 0) + 'px';
//             wire3.style.height = Math.max(wire3.clientHeight - scalingFactor3, 0) + 'px';
//         } else if (scrollDirection === 'up') {
//             var maxViewportHeight = window.innerHeight;
//             wire1.style.height = Math.min(wire1.clientHeight + scalingFactor1, maxViewportHeight) + 'px';
//             wire2.style.height = Math.min(wire2.clientHeight + scalingFactor2, maxViewportHeight) + 'px';
//             wire3.style.height = Math.min(wire3.clientHeight + scalingFactor3, maxViewportHeight) + 'px';
//         }

//         prevScrollY = scrolled;
//     });
// }, 0);



