var matrixLanes = [];
var aboutMeHeading = document.getElementById("aboutMeHeading");

//spawnBinaryNumbers();
flickerRandomLetter(aboutMeHeading,2000,1400,10,5);

function deleteBinaryNumber(binaryNumber) {
    setTimeout(function() {
        binaryNumber.remove();
    }, 6500); 
}

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


