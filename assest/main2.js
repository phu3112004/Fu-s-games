let myInterval; 
let score = 0;
let sec = 59;

function startGame() {
    document.getElementById('start-contain').style.display = "none";
    document.getElementById('main-contain').style.display = "flex";
    TimeRange();
    myInterval = setInterval(game, 2000);
    
}
function TimeRange()
{
    document.getElementById('min').innerText = '0';
    setTimeout(function(){
        sec--;
        if(sec < 10){
            document.getElementById('sec').innerText = `0${sec}`
        }
        else{
            document.getElementById('sec').innerText = `${sec}`
        }
        TimeRange();
    },1000)
}
function game() {
    const jerries = document.querySelectorAll('.jerry');
    jerries.forEach(jerry => {
        jerry.style.display = "none";
    });
    setTimeout(()=>{
    const randomIndex = Math.floor(Math.random() * jerries.length);
    const randomJerry = jerries[randomIndex];
    randomJerry.style.display = "block";
    randomJerry.addEventListener('click', punch);
    },1000)
    if(sec === 0){stop()};
    
}
function punch(){
    this.classList.add('punched')
    let punchSound = document.getElementById('punch-sound');
    punchSound.play();
    setTimeout(() => {
        this.classList.remove('punched');
        changeScore();
    }, 300);
    score++;
    
}
function changeScore(){
    document.getElementById('score').innerText = `${score}`;
}
function stop() {
    clearInterval(myInterval);
    document.getElementById('win').style.display = "flex";
    document.getElementById('win-mess').innerText = `You won with ${score} punches`;
}
function newGame(){
    location.reload();
}
//