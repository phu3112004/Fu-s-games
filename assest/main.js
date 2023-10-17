document.addEventListener('DOMContentLoaded', function() {
    selectLevel();
});
function selectLevel(){
    document.getElementById('select').style.display ='flex';
}
function de(){
    document.getElementById('select').style.display ='none';
    level = 100;
    setup();
}
function tb(){
    document.getElementById('select').style.display ='none';
    level = 1000;
    setup();
}
function kho(){
    document.getElementById('select').style.display ='none';
    level = 10000;
    setup();
}
function setup(){
    document.getElementById('number-input').value = '';
    document.getElementById('mess').innerText = `Guess a number between 1 and ${level}`;
    numberWin = Math.floor(Math.random() * level) + 1; 
    document.getElementById('newGame').style.display = 'none';
    attempts = 0;
}
function check(){
    var numberUser = parseInt(document.getElementById('number-input').value);
    attempts++;
    if(numberUser === numberWin){
        document.getElementById('mess').innerText = `Congrats, You win game with ${attempts} attempts`;
        let audio = document.getElementById('audio');
        audio.play();
        document.getElementById('newGame').style.display = 'block';

    }
    else if( numberUser < numberWin){
        document.getElementById('mess').innerText = 'Too low. Try a higher number'
    }
    else{
        document.getElementById('mess').innerText = 'Too high. Try a lower number'
    }
}