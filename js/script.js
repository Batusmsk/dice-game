function wait(second) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, second);
    });
}

var game = false;
var gamer1 = 0;
var gamer2 = 0;
async function btnDice(element) {

    var messageBox = document.getElementById("dice-message-box");
    var button = document.getElementById("btn-dice");
    var winnerBox = document.getElementById("dice-winner");
    var dice1Image = document.getElementById("dice1-png");
    var dice2Image = document.getElementById("dice2-png");
    var valueText = document.getElementById("dice-value");

    if (game == true) {
        console.log("error");
        messageBox.innerHTML = "Devam eden bir oyun bulunmakta";
        messageBox.style.color = "red";
        return;
    }

    game = true;
    winnerBox.textContent = "";
    valueText.textContent = "";

    button.textContent = "Zarlar atılıyor...";
    for (var i = 0; i < 7; i++) {
        dice1Image.src = `./img/dice-${i}.png`;
        dice2Image.src = `./img/dice-${i}.png`;
        const result = await wait(100);
    }

    var dice1 = Math.floor(Math.random() * 7);
    var dice2 = Math.floor(Math.random() * 7);
    dice1Image.src = `./img/dice-${dice1}.png`;
    dice2Image.src = `./img/dice-${dice2}.png`;
    console.log(`Zar 1: ${dice1} Zar 2: ${dice2}`)
    //valueText.textContent = dice1;

    messageBox.innerHTML = "";

    if (dice1 > dice2) {
        gamer1++;
        winnerBox.textContent = "Kazanan 1. Oyuncu";
    } else if (dice1 == dice2) {
        winnerBox.textContent = "Berabere";
    }
    else {
        gamer2++
        winnerBox.textContent = "Kazanan 2. Oyuncu";
    }
    document.getElementById("gamer1-score").innerHTML = `Puan: ${gamer1}`;
    document.getElementById("gamer2-score").innerHTML = `Puan: ${gamer2}`;

    element.innerHTML = "Zar At";
    game = false;
}
