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

const getUserChoice = () => {
    return prompt("What is your move?").toLowerCase();
}

const howManyContest = () => {
    return parseInt(prompt("How many contest do you want to play?"));
}

const playRound = () => {
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();
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

const game = () => {
    while (true) {
        let numberOfContets = howManyContest();
        if (isNaN(numberOfContets)) {
            alert ("Please enter a valid number!!!");
        } else {
            let yourPoints = 0;
            let computerPoints = 0;
            let result;
            for (let i = 0; i < numberOfContets; i++) {
                result = playRound();
                yourPoints += result[1];
                computerPoints += result[2];
                alert(`${result[0]}\nYou = ${yourPoints} / Computer = ${computerPoints}`);
            }
            if (yourPoints === computerPoints) {
                alert("Draw");
            } else if (yourPoints > computerPoints) {
                alert(`You Won!!!.\nTotal Score:\nYou = ${yourPoints} / Computer = ${computerPoints}`);
            } else {
                alert(`You Lose!!!.\nTotal Score:\nYou = ${yourPoints} / Computer = ${computerPoints}`);
            }
            break;
        }
    }
}

game();