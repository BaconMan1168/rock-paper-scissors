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


let playerScore = 0;
let computerScore = 0;
let gameOver = false;
function playRound(humanChoice, computerChoice){
    
    if (gameOver){
        return;
    }
    let humanLower = humanChoice.toLowerCase();
    let computerLower = computerChoice.toLowerCase();

    const result = document.querySelector(".round-result")
    const pScore = document.querySelector(".pScore");
    const cScore = document.querySelector(".cScore");

    
    switch(humanLower){
        
        case "rock":
            if (computerLower === "paper"){
                result.textContent = "You Lose! " + computerLower + " beats " + humanLower;
                computerScore++;
                cScore.textContent = `Computer Score: ${computerScore}`;
                
            }
            else if(computerLower === "scissors"){
                result.textContent = "You Win! " + humanLower + " beats " + computerLower;
                playerScore++;
                pScore.textContent = `Player Score: ${playerScore}`;
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
                computerScore++;
                cScore.textContent = `Computer Score: ${computerScore}`;
            }
            else{
                result.textContent = "You Win! " + humanLower + " beats " + computerLower;
                playerScore++;
                pScore.textContent = `Player Score: ${playerScore}`;
                
            }
            break;
        
        case "scissors":
            if (computerLower === "paper"){
                result.textContent = "You Win! " + humanLower + " beats " + computerLower;
                playerScore++;
                pScore.textContent = `Player Score: ${playerScore}`;
                
            }
            else if(computerLower === "scissors"){
                result.textContent = "You tie! " + humanLower + " is equal to " + computerLower;
                
            }
            else{
                result.textContent = "You Lose! " + computerLower + " beats " + humanLower;
                computerScore++;
                cScore.textContent = `Computer Score: ${computerScore}`;
                
            }
            break;
    }

    if (playerScore >= 5 || computerScore >= 5){
        gameOver = true;
        const winner = playerScore >= 5 ? "Player" : "Computer";
        result.textContent = `${winner} wins the game!`;
        result.style.fontWeight = "bold";
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

 