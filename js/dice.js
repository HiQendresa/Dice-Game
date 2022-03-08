'use strict';

// clicked the dice
const rolledDice = document.querySelector('.btn-roll-dice');
const resetBtn = document.querySelector('.btn-reset');
const ImgDice = document.querySelector('.dice');


var livePlayer, PlayerScores, codeBlock, gameStatus;


reset();

rolledDice.addEventListener('click', () => {
    if (gameStatus) {
        var dice = Math.floor(Math.random() * 6 + 1);
        ImgDice.style.display = 'block';
        ImgDice.src = 'img/dice-' + dice + '.png';

   
    if (PlayerScores[0] < 20 && PlayerScores[1] < 20) {
        // set the live player
        document.getElementById('live-' + livePlayer).classList.remove('invisible');

        PlayerScores[livePlayer] += dice;
        console.log('these are the points: ', PlayerScores[livePlayer]);
        scoreBlock();
        document.querySelector('#finalScore-' + livePlayer).textContent = PlayerScores[livePlayer];
  
        
    livePlayer === 0 ? livePlayer = 1 : livePlayer = 0;
    document.getElementById('live-' + livePlayer).classList.add('invisible');
    } 
    else {
          livePlayer === 0 ? livePlayer = 1 : livePlayer = 0;
        document.querySelector('#winner-' + livePlayer).classList.remove('invisible');
        
        gameStatus = false;
    }
   }
});

function scoreBlock() {
    size = PlayerScores[livePlayer];
    if (size > 20) {
        size = 20;
    }

    switch (livePlayer) {
        case 0:
            document.getElementById('table-container-0').innerHTML = '';

            for (var i = 0; i < size; i++){
            document.getElementById('table-container-0').innerHTML += codeBlock;
            }
         break;
        case 1:
             document.getElementById('table-container-1').innerHTML ='';

            for (var i = 0; i < size; i++){
            document.getElementById('table-container-1').innerHTML += codeBlock;
            }
            break;
    }
}



// reset the game
document.querySelector('.btn-reset').addEventListener('click', reset);

// reset function
function reset() {
    livePlayer = 0;
    PlayerScores = [0, 0];
    gameStatus = true;
    codeBlock = `<div class="player-0-score-block-red"></div>`; 

// set the dice
    ImgDice.style.display = 'none';

// set the scores to 0
document.getElementById('finalScore-0').innerText = "0";
document.getElementById('finalScore-1').innerText = "0";

// start player

document.getElementById('live-0').classList.add('invisible');
document.getElementById('live-1').classList.add('invisible');

// set the table's player to empty

document.getElementById('table-container-0').innerHTML = '';
document.getElementById('table-container-1').innerHTML = '';

// add class invisible to winner
document.querySelector('#winner-0').classList.add('invisible');
document.querySelector('#winner-1').classList.add('invisible');

}
 

//  exercisee
// var arr = [0, 0];
// var items = 0;
// document.getElementById('click').addEventListener("click", () => {
//    var dice = Math.floor(Math.random() * 6 + 1);
//     console.log(dice);
//     arr[items] += dice;
 
//     var point0 = document.querySelector('.point-' + items).innerHTML = arr[items];
//     items === 0 ? items = 1 : items = 0;
//       console.log('palyer 1:', point0);
    
//     var point1 = document.querySelector('.point-' + items).innerHTML = arr[items];
//       console.log('palyer 2:', point1);
        
   
// });
