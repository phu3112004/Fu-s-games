let items = [1, 2, 3];
let userItem;

function clickKeo() {
    userItem = 1;
    document.getElementById('mess').innerText = 'Chose Scissors';
    let kq = check(userItem, items);
    document.getElementById('me').innerHTML = '<h2>You chose: </h2> <img src="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14297-508x381.png" alt=""> '
    displayResult(kq);
    if(kq === 1){
        document.getElementById('enemy').innerHTML = '<h2>Computer chose: </h2> <img src="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14297-508x381.png" alt=""> '
    }
    else if(kq ===0){
        document.getElementById('enemy').innerHTML = '<h2>Computer chose: </h2><img src="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14296.png" alt=""> '
    }
    else if(kq===2){
        document.getElementById('enemy').innerHTML = '<h2>Computer chose: </h2> <img src="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14298-508x381.png" alt=""> '
    }
}

function clickBua() {
    userItem = 2;
    document.getElementById('mess').innerText = 'Chose Rock';
    let kq = check(userItem, items);
    document.getElementById('me').innerHTML = '<h2>You chose: </h2><img src="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14296.png" alt=""> '
    displayResult(kq);
    if(kq === 2){
        document.getElementById('enemy').innerHTML = '<h2>Computer chose: </h2> <img src="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14297-508x381.png" alt=""> '
    }
    else if(kq ===1){
        document.getElementById('enemy').innerHTML = '<h2>Computer chose: </h2><img src="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14296.png" alt=""> '
    }
    else if(kq===0){
        document.getElementById('enemy').innerHTML = '<h2>Computer chose: </h2> <img src="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14298-508x381.png" alt=""> '
    }
}

function clickBao() {
    userItem = 3;
    document.getElementById('mess').innerText = 'Chose Paper';
    let kq = check(userItem, items);
    document.getElementById('me').innerHTML = '<h2>You chose: </h2><img src="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14298-508x381.png" alt=""> '
    displayResult(kq);
    if(kq === 0){
        document.getElementById('enemy').innerHTML = '<h2>Computer chose: </h2> <img src="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14297-508x381.png" alt=""> '
    }
    else if(kq ===2){
        document.getElementById('enemy').innerHTML = '<h2>Computer chose: </h2><img src="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14296.png" alt=""> '
    }
    else if(kq===1){
        document.getElementById('enemy').innerHTML = '<h2>Computer chose: </h2> <img src="https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14298-508x381.png" alt=""> '
    }
}

function check(userItem, items) {
    let randomIndex = Math.floor(Math.random() * 3);
    let severItem = items[randomIndex];

    if (severItem === 3 && userItem === 1) {
        return 2;
    } else if (severItem === 1 && userItem === 3) {
        return 0;
    } else if (severItem === userItem) {
        return 1;
    } else if (severItem === 1 && userItem === 2) {
        return 2;
    } else if (severItem === 2 && userItem === 3) {
        return 2;
    } else if (severItem === 3 && userItem === 1) {
        return 2;
    } else {
        return 0;
    }
}

function displayResult(result) {
    document.getElementById('result-js').style.display = 'flex';
    if (result === 2) {
        document.getElementById('kq-announce').innerText = 'Win';
        document.getElementById('kq-announce').style.color = 'yellow';
        let audio = document.getElementById('win-sound');
        audio.play();
    } else if (result === 1) {
        document.getElementById('kq-announce').innerText = 'Draw';
        document.getElementById('kq-announce').style.color = 'grey'; 
        let audio = document.getElementById('draw-sound');
        audio.play();
    } else if (result === 0) {
        document.getElementById('kq-announce').innerText = 'Lose';
        document.getElementById('kq-announce').style.color = 'brown'; 
        let audio = document.getElementById('lose-sound');
        audio.play();
    }
    
}
function tryAgain(){
    location.reload();
}
