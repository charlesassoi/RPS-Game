const computerChoiceDisplay= document.getElementById("computer-choice");
const userChoiceDisplay= document.getElementById("user-choice");
const resultDisplay= document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener("click",(e)=>{
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML=userChoice;
    generateComputerChoice();
    getResult();
    
}))

function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3);
    if(randomNumber===1){
        computerChoice= "rock";
    } else if(randomNumber===2){
        computerChoice="paper";
    }else{
        computerChoice="scissors";
    }
    computerChoiceDisplay.innerHTML=computerChoice;
    console.log(randomNumber);
    }

function getResult(){

    
        switch (userChoice){
            case "rock":
                switch(computerChoice){
                    case "rock":
                        result="draw";
                        break;
                    case "paper":
                        result="lose"
                        break;
                    case "scissors":
                        result="win";
                        break
                    default:
                        result=null;
                }
            case "paper":
                switch(computerChoice){
                    case "paper":
                        result="draw";
                        break;
                    case "rock":
                        result="win";
                        break;
                    case "scissors":
                        result="lose";
                        break;
                    default:
                        result=null;
                }
            case "scissors":
                switch(computerChoice){
                    case "scissors":
                        result="draw";
                        break;
                    case "rock":
                        result="lose";
                        break;
                    case "paper":
                        result="win";
                        break;
                    default:
                        result=null;
                }


        }
    resultDisplay.innerHTML=result;


    }
