function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0){
        return "rock";
    } 
    else if (choice === 1){
        return "paper";
    } 
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Enter your choice (rock, paper, or scissors)");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let humanLower = humanChoice.toLowerCase();
    let computerLower = computerChoice.toLowerCase();

    switch(humanLower){
        case "rock":
            if (computerLower === "paper"){
                console.log("You Lose! " + computerLower + " beats " + humanLower);
            }
            else if(computerLower === "scissors"){
                console.log("You Win! " + humanLower + " beats " + computerLower);
            }
            else{
                console.log("You tie! " + humanLower + " is equal to " + computerLower);
            }
            break;
        
        case "paper":
            if (computerLower === "paper"){
                console.log("You tie! " + humanLower + " is equal to " + computerLower);
                
            }
            else if(computerLower === "scissors"){
                console.log("You Lose! " + computerLower + " beats " + humanLower);
            }
            else{
                console.log("You Win! " + humanLower + " beats " + computerLower);
                
            }
            break;
        
        case "scissors":
            if (computerLower === "paper"){
                console.log("You Win! " + humanLower + " beats " + computerLower);
                
            }
            else if(computerLower === "scissors"){
                console.log("You tie! " + humanLower + " is equal to " + computerLower);
                
            }
            else{
                console.log("You Lose! " + computerLower + " beats " + humanLower);
                
            }
            break;
    }
}


function playGame(){
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
}


playGame();