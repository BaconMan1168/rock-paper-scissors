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


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let humanLower = humanChoice.toLowerCase();
    let computerLower = computerChoice.toLowerCase();

    const result = document.querySelector(".round-result")
    switch(humanLower){
        
        case "rock":
            if (computerLower === "paper"){
                result.textContent = "You Lose! " + computerLower + " beats " + humanLower;
            }
            else if(computerLower === "scissors"){
                result.textContent = "You Win! " + humanLower + " beats " + computerLower;
            }
            else{
                result.textContent = "You tie! " + humanLower + " is equal to " + computerLower;
            }
            break;
        
        case "paper":
            if (computerLower === "paper"){
                result.textContent = "You tie! " + humanLower + " is equal to " + computerLower;
                
            }
            else if(computerLower === "scissors"){
                result.textContent = "You Lose! " + computerLower + " beats " + humanLower;
            }
            else{
                result.textContent = "You Win! " + humanLower + " beats " + computerLower;
                
            }
            break;
        
        case "scissors":
            if (computerLower === "paper"){
                result.textContent = "You Win! " + humanLower + " beats " + computerLower;
                
            }
            else if(computerLower === "scissors"){
                result.textContent = "You tie! " + humanLower + " is equal to " + computerLower;
                
            }
            else{
                result.textContent = "You Lose! " + computerLower + " beats " + humanLower;
                
            }
            break;
    }
}

const container = document.querySelector(".btn-container");

const rock = document.createElement("button");
rock.textContent = "Rock";
const paper = document.createElement("button");
paper.textContent = "Paper";
const scissors = document.createElement("button");
scissors.textContent = "Scissors";

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);



rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));