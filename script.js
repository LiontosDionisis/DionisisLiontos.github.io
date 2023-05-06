const rps = ["rock","paper","scissors"]
let playerSelection;
let w=[];
let p = [];
let computerSelection = getComputerChoice()

function getComputerChoice(){
    let computerSelection = rps[Math.floor(Math.random()*rps.length)];
    return computerSelection;
}


function playRound(playerSelection, computerSelection){

    if (playerSelection=== computerSelection){
        whowon.textContent = "It's a tie!!"
    }else if(
        (playerSelection ==="rock" && computerSelection === "scissors")||
        (playerSelection ==="paper"&& computerSelection === "rock")||
        (playerSelection ==="scissors" && computerSelection ==="paper")){
            whowon.textContent = `You win!! ${playerSelection} beats ${computerSelection}`
            w.push(1)
            you.textContent =`You: ${w.length}`
            pchoice.textContent=`Computer chose ${computerSelection}`
        }else{
            whowon.textContent=`You lose!! ${computerSelection} beats ${playerSelection}`
            p.push(1)
            pscore.textContent = `Computer: ${p.length}`
            pchoice.textContent = `Computer chose ${computerSelection}`
             
        }
    
}

let btnRock = document.getElementById('btn-rock')
btnRock.onclick = () => playRound("rock", getComputerChoice());

let btnPaper = document.getElementById('btn-paper')
btnPaper.onclick = () => playRound("paper", getComputerChoice());

let btnScissors = document.getElementById('btn-scissors')
btnScissors.onclick = () => playRound("scissors",getComputerChoice());

let you = document.querySelector('.yourscore')
you.textContent = ` You: ${w.length}`

let pscore = document.querySelector('.pcscore')
pscore.textContent = `Computer: ${p.length}`


let whowon= document.querySelector(".whowon")
let pchoice = document.querySelector('.pchoice')

