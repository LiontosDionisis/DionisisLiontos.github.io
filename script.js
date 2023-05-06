const rps = ["rock","paper","scissors"]
let playerSelection;
let w=[];
let p = [];
let computerSelection = getComputerChoice()
let wins = [];
let losses = [];

function getComputerChoice(){
    let computerSelection = rps[Math.floor(Math.random()*rps.length)];
    return computerSelection;
}


function playRound(playerSelection, computerSelection){

    if (playerSelection=== computerSelection){
        whowon.textContent = "TIE!"
    }else if(
        (playerSelection ==="rock" && computerSelection === "scissors")||
        (playerSelection ==="paper"&& computerSelection === "rock")||
        (playerSelection ==="scissors" && computerSelection ==="paper")){
            whowon.textContent = `WIN! ${playerSelection} beats ${computerSelection}`
            w.push(1)
            updateScore()
            resetVar()
            you.textContent =`You: ${w.length}`
            pchoice.textContent=`Computer chose ${computerSelection.toUpperCase()}`
        }else{
            whowon.textContent=`LOSS! ${computerSelection} beats ${playerSelection}`
            p.push(1)
            updateScore()
            resetVar()
            pscore.textContent = `Computer: ${p.length}`
            pchoice.textContent = `Computer chose ${computerSelection.toUpperCase()}`
             
        }
    
}

function resetVar(){
    if(w.length == 5 || p.length == 5){
        p = [];
        w = [];
        you.textContent =`You: ${w.length}`
        pscore.textContent = `Computer: ${p.length}`      
}
}

function updateScore(){
    if (w.length == 5){
        wins.push(1)
        yourscore.textContent = `WINS: ${wins.length}`
    }if(p.length == 5){
        losses.push(1)
        compscore.textContent = `LOSSES: ${losses.length}`
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
let whowongame = document.querySelector('.whowongame')
let yourscore = document.querySelector('.scorefinal')
let compscore = document.querySelector('.scorefinalpc')
yourscore.textContent = `WINS: ${wins.length}`
compscore.textContent = `LOSSES: ${losses.length}`

