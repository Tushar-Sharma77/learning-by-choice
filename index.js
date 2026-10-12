// 1. Instances of all nodes
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");

let score1 = document.querySelector("#score--0");
let score2 = document.querySelector("#current--0");

let current1 = document.querySelector("current--0");
let current2 = document.querySelector("#current--1");

let diceEl = document.querySelector("dice");
let btnNew = document.querySelector(".btn--new");
let btnHold = document.querySelector(".btn--hold");
let btnRoll = document.querySelector(".btn--roll");

// 2. declare few variables for internet working 
let mainScore1, mainScore2, currentScore, activePlayer, playing;


// 3. New Game Button Functionality 
let init = () => {
    // 3.1 set all score to 0
    current1.textcontent = 0;
    current2.textcontent = 0;
    currentScore = 0;
    mainScore1 = 0;
    mainScore2 = 0;
    score1.textcontent = 0;
    score2.textcontent = 0;
    activePlayer = 0;
    playing = true;
    // 3.2 set player 1 as active player
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
    player1.classList.remove("player--winner");
    player2.classList.remove("player--winner");

    // 3.3 Remove Dice image 
    diceEl.classList.add("hidden");
};   
init();
let changePlayer = () => {
    document.querySelector("#current--${activePlayer}").textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;

    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
}  

// 4 Rolling dice functionality
let rollDice = () => {
 // 4.1 Currently we are playing or not
 if(playing == true) {
 // 4.1.1  generte a random dice rolled
 let randonNumber = Math.trunc(Math.random() * 6) + 1;
 console.log(rndomNumber);
 // 4.1.2 Show the Random no dice image
 diceEl.src = 'dice-${randomNumber}.png';
 diceEl.classList.remove("hidden");
 // 4.1.3 if random not 1
 if (randomNumber != 1){
 // 4.1.3.1 add random no to current no
 currentScore = currentScore + randomNumber;
 // 4.1.3.1.1 update the current score and show on UI
 document.querySelector('#current--${activePlayer}').textcontent =
 currentScore;
} else {
    changePlayer();
}
 }
}

 // 5 hold score functionality 
 let holDice = () => { 
 // 5.1 currently we are playing or not
 if(playing==true) {
  // 5.1.1 add current score to total score of active layer
  if (activePlayer === 0) {
    mainScore1 = mainScore1 + currentScore;
    score1.textContent = mainScore1;
    if (mainScore1 >= 20) {
        playing = false;
        diceEl.classList.add("hidden");
        player1.classList.add("player--winner");
    } else { 
        changePlayer();
    } 
} else {
        mainScore2 = mainScore2 + currentScore;
    score2.textContent = mainScore2;
    if (mainScore2 >= 20) {
        playing = false;
        diceEl.classList.add("hidden");
        player2.classList.add("player--winner")
    } else {
        changePlayer();
    }
    }
 }
}

