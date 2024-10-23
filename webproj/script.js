const circle = document.getElementById('circle');

function moveCircleRandomly() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const randomX = Math.random() * (windowWidth - 50);
    const randomY = Math.random() * (windowHeight - 50);

    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
}

setInterval(moveCircleRandomly, 2000);