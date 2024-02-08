const monitorImg = document.getElementById("monitorImg");
const monitorScreen = document.getElementById("monitorScreen");

changeScreenSize();

function changeScreenSize() {
    const newWidth = parseFloat(getComputedStyle(monitorImg).width) * 0.9;
    monitorScreen.style.width = `${newWidth}px`;
}

const observer = new ResizeObserver(changeScreenSize);
observer.observe(monitorImg);
