// Rock paper scissors game Logic

let userChoice = 'rock';

let computerChoice = randomChoice(); // This will return a random choice from the array.
console.log("Computer chooses: " + computerChoice); // This will log the computer's choice to the console.
console.log("User chooses: " + userChoice); // This will log the user's choice to the console.
// Determine the winner of the game.
RPS(userChoice,computerChoice);

// Computer answere genarator 
function randomChoice(choice1 = 'rock',choice2='paper',choice3='scissors') {
    const choice = [choice1,choice2,choice3];
    const randomIndex = Math.floor(Math.random() * choice.length); // Each time the function is called, it will return a random index from the array.
    return choice[randomIndex];
}

// let computerChoice = randomChoice(); // This will return a random choice from the array.

function RPS(userChoice,computerChoice) {
    if (userChoice == 'rock') {
    if (userChoice == 'rock' && computerChoice == 'rock') {
        console.log("Draw");
    }
    else if (userChoice == 'rock' && computerChoice == 'paper') {
        console.log("Computer wins");
        }
    else if (userChoice == 'rock' && computerChoice == 'scissors') {
        console.log("User wins");
        }
    
}

else if (userChoice == 'paper') {
        if (userChoice == 'paper' && computerChoice == 'rock') {
            console.log("User wins");
        }
        else if (userChoice == 'paper' && computerChoice == 'paper') {
            console.log("Draw");
        }
        else if (userChoice == 'paper' && computerChoice == 'scissors') {
            console.log("Computer wins");
        }
}

else if (userChoice == 'scissors') {
        if (userChoice == 'scissors' && computerChoice == 'rock') {
            console.log("Computer wins");
        }
        else if (userChoice == 'scissors' && computerChoice == 'paper') {
            console.log("User wins");
        }
        else if (userChoice == 'scissors' && computerChoice == 'scissors') {
            console.log("Draw");
        }
    
    
}

else{
        console.log("Invalid choice");
    }
}