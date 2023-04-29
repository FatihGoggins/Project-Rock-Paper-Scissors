const container = document.querySelector('.container');
const startButton = document.querySelector('.start');
startButton.addEventListener('click', startGame);

function startGame () {
    container.removeChild(startButton);
    const currentVs = document.createElement('p');
    currentVs.classList.add('currentVs');
    currentVs.textContent = "";
    container.appendChild(currentVs);
    const scoreBoard = document.createElement('p');
    scoreBoard.textContent = '0 - 0';
    container.appendChild(scoreBoard);

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    container.appendChild(buttons);

    const rockButton = document.createElement('button');
    rockButton.textContent = 'Rock';
    buttons.appendChild(rockButton);
    const paperButton = document.createElement('button');
    paperButton.textContent = 'Paper';
    buttons.appendChild(paperButton);
    const scissorsButton = document.createElement('button');
    scissorsButton.textContent = 'Scissors';
    buttons.appendChild(scissorsButton);

    let yourPoint = 0;
    let computerPoint = 0;
    const buttonArray = document.querySelectorAll('button')
    for (let i = 0; i < 3; i++) {
        buttonArray[i].addEventListener('click', function(e) {
            let userChoice = e.target.textContent;
            let resultOfRound = playRound(userChoice);
            yourPoint += resultOfRound[1];
            computerPoint += resultOfRound[2];
            currentVs.textContent = resultOfRound[0];
            scoreBoard.textContent = `${yourPoint} - ${computerPoint}`;
            gameEnd(yourPoint, computerPoint, container, buttons);
        })
    }
}

const getComputerChoice = () => {
randomIndex = Math.floor(Math.random()*3);
switch(randomIndex) {
    case 0:
        return "Rock";
        break;
    case 1:
        return "Paper";
        break;
    case 2:
        return "Scissors";
        break;
    }
}

const playRound = (userChoice) => {
let computerChoice = getComputerChoice();
if (userChoice === computerChoice) {
    return ["Draw", 0, 0];
} else if (userChoice === "Rock") {
    switch (computerChoice) {
        case "Paper":
            return ["You lose! Paper beats rock!", 0, 1];
            break;
        case "Scissors":
            return ["You win! Rock beats scissors!", 1, 0];
            break;
    }
} else if (userChoice === "Paper") {
    switch (computerChoice) {
        case "Scissors":
            return ["You lose! Scissors beats paper!", 0, 1];
            break;
        case "Rock":
            return ["You win! Paper beats rock!", 1, 0];
    }
}  else if (userChoice === "Scissors") {
    switch (computerChoice) {
        case "Rock":
            return ["You lose! Rock beats scissors!", 0 ,1];
            break;
        case "Paper":
            return ["You win! Scissors beats paper!", 1, 0];
            break;
    }
}
}

function gameEnd(you, computer, container, buttons) {
    if (you === 5 || computer === 5) {
    container.removeChild(buttons);
    const endMessage = document.createElement("p");
    container.appendChild(endMessage);
    endMessage.classList.add('end-message');
    const resetButton = document.createElement("button");
    resetButton.textContent = "RESET";
    container.appendChild(resetButton);
    if (you > computer) {
        endMessage.textContent = "YOU WIN!";
    } else if (computer > you) {
        endMessage.textContent = "COMPUTER WINS!";
    } else {
        endMessage.textContent = "DRAW";
    }
    resetButton.addEventListener("click", function() {
        location.reload();
    })
    }
}

