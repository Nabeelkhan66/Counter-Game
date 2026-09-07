let countHome = 0;
let countGuest = 0;

function renderScore(scoreElement, score) {
    document.getElementById(scoreElement).textContent = score;
}

function incrementHomeCount(points) {
    countHome += points;
    renderScore("home-display", countHome);
}

function incrementGuestCount(points) {
    countGuest += points;
    renderScore("guest-display", countGuest);
}