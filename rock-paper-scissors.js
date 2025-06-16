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
    const pScore = document.querySelector(".pScore");
    const cScore = document.querySelector(".cScore");

    let pScoreText = pScore.textContent;
    let cScoreText = cScore.textContent;
    switch(humanLower){
        
        case "rock":
            if (computerLower === "paper"){
                result.textContent = "You Lose! " + computerLower + " beats " + humanLower;
                cScore.textContent = cScoreText.slice(0, cScoreText.length - 1) + (+cScore.textContent.slice(-1) + 1);
                
            }
            else if(computerLower === "scissors"){
                result.textContent = "You Win! " + humanLower + " beats " + computerLower;
                pScore.textContent = pScoreText.slice(0, pScoreText.length - 1) + (+pScore.textContent.slice(-1) + 1);
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
                cScore.textContent = cScoreText.slice(0, cScoreText.length - 1) + (+cScore.textContent.slice(-1) + 1);
            }
            else{
                result.textContent = "You Win! " + humanLower + " beats " + computerLower;
                pScore.textContent = pScoreText.slice(0, pScoreText.length - 1) + (+pScore.textContent.slice(-1) + 1);
                
            }
            break;
        
        case "scissors":
            if (computerLower === "paper"){
                result.textContent = "You Win! " + humanLower + " beats " + computerLower;
                pScore.textContent = pScoreText.slice(0, pScoreText.length - 1) + (+pScore.textContent.slice(-1) + 1);
                
            }
            else if(computerLower === "scissors"){
                result.textContent = "You tie! " + humanLower + " is equal to " + computerLower;
                
            }
            else{
                result.textContent = "You Lose! " + computerLower + " beats " + humanLower;
                cScore.textContent = cScoreText.slice(0, cScoreText.length - 1) + (+cScore.textContent.slice(-1) + 1);
                
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