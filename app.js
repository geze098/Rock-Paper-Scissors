let playerRound = 0;
let computerRound = 0;
let round = 5;



function computerPlay(){
    let deger = Math.floor(Math.random() * 3);
    if(deger == 0){
        return('rock');
    } else if(deger == 1){
        return('paper');
    } else{
        return('scissors');
    }
};


function playRound(playerSelection, computerSelection){
        if(playerSelection === 'rock'){
            if(computerSelection === 'rock'){
                return('Draw!');
            } else if(computerSelection === 'paper'){
                computerRound++;
                return('You lose!');
            } else {
                playerRound++;
                return('You win!');
            }
        } else if(playerSelection === 'paper'){
            if(computerSelection === 'rock'){
                playerRound++;
                return('You win!');
            } else if(computerSelection === 'paper'){
                return('Draw!');
            } else{
                computerRound++;
                return('You lose!');
            }
        } else {
            if(computerSelection === 'rock'){
                computerRound++;
                return('You lose!');
            } else if(computerSelection === 'paper'){
                playerRound++;
                return('You win!');
            } else{
                return('Draw!');
            }
    }
};

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    computerSelection = computerPlay();
    playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    game();
})

paper.addEventListener('click', () => {
    computerSelection = computerPlay();
    playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    game();
})

scissors.addEventListener('click', () => {
    computerSelection = computerPlay();
    playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    game();
})




function game(){
    let score = document.querySelector('#score');
    if(playerRound === round){
        score.textContent = `You win the game! Player: ${playerRound}, Computer: ${computerRound}`;
    } else if(computerRound === round){ 
        score.textContent = `You lose the game! Player: ${playerRound}, Computer: ${computerRound}`;
    }else {
        score.textContent = `It\'s draw! Player: ${playerRound}, Computer: ${computerRound}`;
    }
};
