document.addEventListener('DOMContentLoaded', function () {
    const bird = document.getElementById('bird');
    

    let birdPosition = 100;
    let gravity = 2;
    let jumpStrength = 30;
    let gameInterval;
    let score = 0;
    function startGame() {
        gameInterval = setInterval(updateGame, 20);
    }

    function updateGame() {
        birdPosition += gravity;
        gravity+= 0.0005;
        bird.style.top = birdPosition + 'px';
        checkCollision();
    }

    function jump() {
        birdPosition -= jumpStrength;
        bird.style.top = birdPosition + 'px';
    }

    function checkCollision() {
        if (birdPosition > 280 || birdPosition < 0) {
            endGame();
        }
    }

    function endGame() {
        clearInterval(gameInterval);
        alert(`Dont be lower than the Titans, Your scores: ${score}`);
        location.reload();
    }

    document.addEventListener('click', () => {
            jump();
            let audio = document.getElementById('jump-sound');
            audio.play();
            score++;
            changeScore();
    });
    function changeScore(){
        document.getElementById('score').innerText = `Your score: ${score}`;
    }
    startGame();
});
