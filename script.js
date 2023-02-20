let yourScoreText = document.querySelector('.your-point');
let computerScoreText = document.querySelector('.computer-point');
let gameEndMessage = document.querySelector('.end-message');
let yourPoint = 0;
let computerPoint = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        let userChoice = e.target.classList.value;
        let resultOfRound = playRound(userChoice);
        yourPoint += resultOfRound[1];
        computerPoint += resultOfRound[2];
        yourScoreText.innerHTML = yourPoint;
        computerScoreText.innerHTML = computerPoint;
        if (computerPoint === 5) {
            gameEndMessage.innerHTML = "You Lost!!!";
            setTimeout(function(){
                window.location.reload();
             }, 5000);
        } else if (yourPoint === 5) {
            gameEndMessage.innerHTML = "You Won!!!";
            setTimeout(function(){
                window.location.reload();
             }, 5000);
        }
    })
})




const getComputerChoice = () => {
    randomIndex = Math.floor(Math.random()*3);
    switch(randomIndex) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

const playRound = (userChoice) => {
    let computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        return ["Draw", 0, 0];
    } else if (userChoice === "rock") {
        switch (computerChoice) {
            case "paper":
                return ["You lose! Paper beats rock!", 0, 1];
                break;
            case "scissors":
                return ["You win! Rock beats scissors!", 1, 0];
                break;
        }
    } else if (userChoice === "paper") {
        switch (computerChoice) {
            case "scissors":
                return ["You lose! Scissors beats paper!", 0, 1];
                break;
            case "rock":
                return ["You win! Paper beats rock!", 1, 0];
        }
    }  else if (userChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                return ["You lose! Rock beats scissors!", 0 ,1];
                break;
            case "paper":
                return ["You win! Scissors beats paper!", 1, 0];
                break;
        }
    } else {
        return "Please Enter a Valid input (rock, paper, scissors):";
    }
}