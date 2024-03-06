var binaryNumbers = document.getElementsByClassName("binaryNumber");
var matrixLanes = [];
spawnBinaryNumbers();

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


function deleteBinaryNumber(binaryNumber) {
    setTimeout(function() {
        binaryNumber.remove();
    }, 4000); 
}

function spawnBinaryNumbers() {
    var totalLanes = 13;
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
    img.classList.add('binaryNumber');
    document.body.insertBefore(img, document.body.firstChild);

    deleteBinaryNumber(img);
    occupyLane(randomSegment);

    var randomDelay = Math.random() * 40 + 20;
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

