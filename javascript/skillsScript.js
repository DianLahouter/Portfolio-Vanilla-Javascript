var matrixLanes = [];
var aboutMeHeading = document.getElementById("aboutMeHeading");

//spawnBinaryNumbers();
flickerRandomLetter(aboutMeHeading,2300,1700,600,50);

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


var elements = document.getElementsByClassName("aboutMeDescription");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseenter", function(event) {
        var skillBarBackground = this.querySelector(".skillBarBackground");
        var skillLevelText = this.querySelector(".skillLevelText");
        var descriptionText = this.querySelector(".descriptionText");

        clearTimeout(this.timeoutId);

        this.timeoutId = setTimeout(function() {
            if (skillBarBackground && skillLevelText) {
                skillBarBackground.style.display = "flex";
                skillLevelText.style.display = "block";
                descriptionText.style.display = "block";
            }
        }, 250); 
    });

    elements[i].addEventListener("mouseleave", function(event) {
        var skillBarBackground = this.querySelector(".skillBarBackground");
        var skillLevelText = this.querySelector(".skillLevelText");
        var descriptionText = this.querySelector(".descriptionText");

        clearTimeout(this.timeoutId);

        if (skillBarBackground && skillLevelText) {
            skillBarBackground.style.display = "none";
            skillLevelText.style.display = "none";
            descriptionText.style.display = "none";
        }
    });
}


