var score, roundScore, dice, activePlayer, players, status, 
    score0, score1, currentScore0, currentScore1, 
    hold, roll, newGame, dice;
dice = document.getElementById("demo");
players = [].slice.call(document.querySelectorAll(".player"));
scores = [].slice.call(document.querySelectorAll(".score"));
currentScores = [].slice.call(document.querySelectorAll(".current-score"));
hold = document.getElementById("hold");
roll = document.getElementById("roll");
newGame = document.getElementById("new-game");
dice = document.getElementById("dice");


roll.addEventListener('click', function(){
    if(status){
        var currentDice = Math.floor(Math.random() * 6) + 1;
        dice.style.visibility = "visible";
        dice.src='dice-'+currentDice+'.png';
        if(currentDice !== 1){     
             roundScore += currentDice;
             currentScores[activePlayer].textContent = roundScore;
        }else{
            //change the rountScore to 0 and move to the next turn
           nextTurn();
        } 
    }
})

hold.addEventListener('click', function(){
    //update scores
    if(status){
        score[activePlayer] += roundScore;
        scores[activePlayer].textContent = score[activePlayer];

        //check if there is a winner
        if(score[activePlayer] >= 100){
            scores[activePlayer].textContent = "Winner!";
            status = false;
        }else{
            //next turn
            roundScore = 0;
            nextTurn();
        } 
    }

})

newGame.addEventListener('click', init);

function nextTurn(){
    rountScore = 0;
    players[activePlayer].classList.toggle("active");
    currentScores[activePlayer].textContent = 0;
    activePlayer = (activePlayer + 1) % 2;
    players[activePlayer].classList.toggle("active");
    
}

function init(){
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    status = true;
    scores.forEach(data => data.textContent = 0);
    currentScores.forEach(data => data.textContent = 0);
    dice.style.visibility = "hidden";
}

init();