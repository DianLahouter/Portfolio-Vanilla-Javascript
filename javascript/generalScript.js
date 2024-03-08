var buttons = document.querySelectorAll(".button");
var logoutButton = document.getElementById("logoutButton");
var navigatorIcons = document.querySelectorAll(".navIcon");
var cursor = document.querySelector(".cursor");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        cursor.style.borderRadius = "50%"; 
        cursor.style.borderWidth = "0.7vh"; 
        cursor.style.borderColor = "#313131"; 
        cursor.style.height = "1vh"
        cursor.style.width = "1vh"
        cursor.style.backgroundColor = "#313131";
    });

    button.addEventListener("mouseleave", () => {
        cursor.style.borderRadius = "20%";
        cursor.style.borderColor = "#1f1f1f";
        cursor.style.borderWidth = "0.6vh";
        cursor.style.height = "1.2vh"
        cursor.style.width = "1.2vh"
        cursor.style.backgroundColor = "#ECECEC";
    });
});

navigatorIcons.forEach(navIcon => {
    navIcon.addEventListener("mouseenter", () => {
        cursor.style.borderRadius = "50%"; 
        cursor.style.borderWidth = "0.7vh"; 
        cursor.style.borderColor = "#313131"; 
        cursor.style.height = "1vh";
        cursor.style.width = "1vh";
        cursor.style.backgroundColor = "#313131";
    });

    navIcon.addEventListener("mouseleave", () => {
        cursor.style.borderRadius = "20%";
        cursor.style.borderColor = "#1f1f1f";
        cursor.style.borderWidth = "0.6vh";
        cursor.style.height = "1.2vh";
        cursor.style.width = "1.2vh";
        cursor.style.backgroundColor = "#ECECEC";
    });

});



var navIcons = document.getElementsByClassName("navIcon");

for (var i = 0; i < navIcons.length; i++) {
    (function(index) {
        navIcons[index].addEventListener("mouseup", function() {
            setTimeout(() => {
                if (navIcons[index].id == "aboutMeNavIcon" && document.body.id != "mainPageBody") {
                    window.location.href = "./Main_Page.html";
                } else if (navIcons[index].id == "educationNavIcon" && document.body.id != "educationBody") {
                    window.location.href = "./Education.html";
                } else if (navIcons[index].id == "skillsNavIcon" && document.body.id != "skillsBody") {
                    window.location.href = "./Skills.html";
                }
            }, 330);
        

            if (navIcons[index].id == "aboutMeNavIcon" && document.body.id != "mainPageBody") {
                var element = document.getElementById('rightTransitionObject');
                element.style.animation = 'closeLeft 0.3s ease-out forwards';
            
                var element = document.getElementById('leftTransitionObject');
                element.style.animation = 'closeRight 0.3s ease-out forwards'; 
            } else if (navIcons[index].id == "educationNavIcon" && document.body.id != "educationBody") {
                var element = document.getElementById('rightTransitionObject');
                element.style.animation = 'closeLeft 0.3s ease-out forwards';
            
                var element = document.getElementById('leftTransitionObject');
                element.style.animation = 'closeRight 0.3s ease-out forwards'; 
            } else if (navIcons[index].id == "skillsNavIcon" && document.body.id != "skillsBody") {
                var element = document.getElementById('rightTransitionObject');
                element.style.animation = 'closeLeft 0.3s ease-out forwards';
            
                var element = document.getElementById('leftTransitionObject');
                element.style.animation = 'closeRight 0.3s ease-out forwards'; 
            }
        });

        navIcons[index].addEventListener("mouseenter", function() {
            if (navIcons[index].id == "aboutMeNavIcon" && document.body.id != "mainPageBody") {
                var pageIndicator = document.getElementById("aboutMePageIndicator");
                pageIndicator.classList.add("hoveredIndicator");
            } else if (navIcons[index].id == "educationNavIcon" && document.body.id != "educationBody") {
                var pageIndicator = document.getElementById("educationPageIndicator");
                pageIndicator.classList.add("hoveredIndicator");
                console.log("hovering over education");
            } else if (navIcons[index].id == "skillsNavIcon" && document.body.id != "skillsBody") {
                var pageIndicator = document.getElementById("skillsPageIndicator");
                pageIndicator.classList.add("hoveredIndicator");
            }
        });

        navIcons[index].addEventListener("mouseleave", function() {
            if (navIcons[index].id == "aboutMeNavIcon" && document.body.id != "mainPageBody") {
                var pageIndicator = document.getElementById("aboutMePageIndicator");
                pageIndicator.classList.remove("hoveredIndicator");
            } else if (navIcons[index].id == "educationNavIcon" && document.body.id != "educationBody") {
                var pageIndicator = document.getElementById("educationPageIndicator");
                pageIndicator.classList.remove("hoveredIndicator");
            } else if (navIcons[index].id == "skillsNavIcon" && document.body.id != "skillsBody") {
                var pageIndicator = document.getElementById("skillsPageIndicator");
                pageIndicator.classList.remove("hoveredIndicator");
            }
        });
    })(i);
}

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

logoutButton.addEventListener('mouseup', function(event) {
    setTimeout(() => {
        window.location.href = "./Landing.html";
    }, 330);

    var element = document.getElementById('rightTransitionObject');
    element.style.animation = 'closeLeft 0.3s ease-out forwards';

    var element = document.getElementById('leftTransitionObject');
    element.style.animation = 'closeRight 0.3s ease-out forwards';
});


function flickerRandomLetter(wordElement, maxTimeBetweenTurnOff = 3000, minTimeBetweenTurnOff = 1500, maxTimeBetweenTurnOn = 300, minTimeBetweenTurnOn = 50){
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
    }, Math.random() * (maxTimeBetweenTurnOff - minTimeBetweenTurnOff) + minTimeBetweenTurnOff);

    setTimeout(function() {
        turnLettersBackOn(wordElement,cleanWordElement); 
    }, Math.random() * (maxTimeBetweenTurnOn - minTimeBetweenTurnOn) + minTimeBetweenTurnOff);
}

function turnLettersBackOn(wordElement, cleanInnerHtml){
    wordElement.innerHTML = cleanInnerHtml;
}
