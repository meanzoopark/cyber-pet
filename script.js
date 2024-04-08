let mouseMoved = false;
let cursorIndex = 0;

const stillImages = [
    "url('img/Dog/Dog_still.gif')",
    "url('img/Pigeon/Pigeon_still.gif')",
    "url('img/Cat/Cat_still.gif')",
    "url('img/Chameleon/Chameleon_still.gif')"
    // Add paths to other still cursor GIFs here
];

const moveImages = [
    "url('img/Dog/Dog_move.gif')",
    "url('img/Pigeon/Pigeon_move.gif')",
    "url('img/Cat/Cat_move.gif')",
    "url('img/Chameleon/Chameleon_move.gif')"
    // Add paths to other moving cursor GIFs here
];

const cursor = document.querySelector(".custom-cursor");

function setCursorImage(index) {
    cursor.style.backgroundImage = mouseMoved ? moveImages[index] : stillImages[index];
}

document.addEventListener("mousemove", function(e) {
    mouseMoved = true;

    const startX = e.clientX + 7.5;
    const startY = e.clientY + 7.5;

    cursor.style.left = startX + "px";
    cursor.style.top = startY + "px";

    clearTimeout(window.mouseMoveTimer);
    window.mouseMoveTimer = setTimeout(function() {
        mouseMoved = false;
        setCursorImage(cursorIndex);
    }, 50);
});

document.addEventListener("click", function() {
    clearTimeout(window.mouseMoveTimer);
    window.mouseMoveTimer = setTimeout(function() {
        mouseMoved = false;
        setCursorImage(cursorIndex);
    }, 50);
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 32) { 
        cursorIndex = (cursorIndex + 1) % stillImages.length;
        setCursorImage(cursorIndex);
    }
});

setInterval(function() {
    if (mouseMoved) {
        setCursorImage(cursorIndex);
    }
}, 100);
