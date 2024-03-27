

//document.addEventListener("DOMContentLoaded", () => { 
let options = [
        'rock',
        'paper',
        'scissor'
    ];
let scoreHum = 0;
let scoreComp = 0;
let humanInput;
let computer;
const round = document.querySelector("#round");
const result = document.querySelector("#result");
const rock = document.querySelector("#rock").addEventListener("click",function (){
    humanInput = 'rock';
    game(humanInput);
});
const scissor = document.querySelector("#scissor").addEventListener("click",function (){
    humanInput = 'scissor';
    game(humanInput);
});
const paper = document.querySelector("#paper").addEventListener("click",function (){
    humanInput = 'paper';
    game(humanInput);
});

function computerChoice(choice){
    computerSelection = choice[Math.floor(Math.random() * choice.length)];
    return computerSelection;
};

function decider(output){
    if(output=="You Won"){
        scoreHum +=1;
    }else if(output=="Computer Won"){
        scoreComp+=1;
    }else {
        scoreComp+=0;
        scoreHum+=0;
    }
    };
function whoWon(computer, human){
    let result = [
        "Tie",
        "You Won",
        "Computer Won"
        ]
    if(computer==human){
        return result[0];
        console.log(result[0]);
    }else if(computer=='rock'&&human=='scissor'){
        return result[2];
        console.log(result[2]);
        }else if(computer=='rock'&& human=='paper'){
            return result[1];
            console.log(result[1]);
        }else if(computer=='paper'&&human=='rock'){
            return result[2];
            console.log(result[2]);
        }else if(computer=='paper'&&human=='scissor'){
            return result[1];
            console.log(result[1]);
        }else if(computer=='scissor'&&human=='paper'){
            return result[2];
            console.log(result[2]);
        }else if(computer=='scissor'&&human=='rock'){
            return result[1];
            console.log(result[1]);
        }
    }

function game(human){
    computer = computerChoice(options);
    console.log(human);
    console.log(computer);
    
    let output = whoWon(computer,human) ;
    console.log(output);
    decider(output);
    outputString = "Human:" + scoreHum + " Computer:" + scoreComp;
    round.textContent = outputString;
    if(scoreHum==5 || scoreComp==5){
        result.textContent = finalScore(scoreHum,scoreComp);
        scoreHum = 0;
        scoreComp = 0;
        round.textContent = '';

    }else {result.textContent = '';}
}

function finalScore(numHum,numComp){
    if(scoreComp>scoreHum){
        message =  'Computer Won - Final Score Computer: ' + scoreComp + ' Human: ' + scoreHum;
    } else if(scoreComp<scoreHum){
        message =  'You Won - Final Score Computer: ' + scoreComp +' Human: ' + scoreHum;
    } else {
        message = 'It is a Tie - Final Score Computer: ' + scoreComp +' Human: ' + scoreHum;
    }
    
    return message;
}
//});
/*const gameSize = prompt("How many games do you want to play?", 3);
let finalScore = play(options,gameSize);
let finalScore = play(options, humanInput);

function play(options,size){
    Modifying to do it for 5 rounds every time instead of making it dynamic
function play(options, humanInput){    
    let scoreComp = 0;
    let scoreHum = 0;
    let message;

for(i=1;i<=size;i++) {
for(i=1;i<=5;i++) {    
    let computer = computerChoice(options);
    let human = humanInput;
    
let human = prompt("Input your selection rock, paper or scissor:",'rock');
let output = whoWon(computer,human) ;
console.log(computer);
console.log(humanInput);
console.log(output);
if(output=="You Won"){
    scoreHum +=1;
}else if(output=="Computer Won"){
    scoreComp+=1;
}else {
    scoreComp+=0;
    scoreHum+=0;
}
}

if(scoreComp>scoreHum){
    message =  'Computer Won - Final Score Computer: ' + scoreComp + ' Human: ' + scoreHum;
} else if(scoreComp<scoreHum){
    message =  'You Won - Final Score Computer: ' + scoreComp +' Human: ' + scoreHum;
} else {
    message = 'It is a Tie - Final Score Computer: ' + scoreComp +' Human: ' + scoreHum;
}

return message;

}

console.log(finalScore);
alert(finalScore);
console.log("*-----------GAME OVER------------*");




function userInputResultCheck(input,computer){
    if(input.toLowerCase()==options[0] || input.toLowerCase()==options[1]|| input.toLowerCase()==options[2]){
    return whoWon(computer,input.toLowerCase()) ;
} else {
     return "Select a Valid Choice Please!";
}
}


function computerChoice(choice){
    computerSelection = choice[Math.floor(Math.random() * choice.length)];
    return computerSelection;
}

function whoWon(computer, human){
    let result = [
        "Tie",
        "You Won",
        "Computer Won"
    ]
    if(computer==human){
        return result[0];
        console.log(result[0]);
    } else if(computer=='rock'&&human=='scissor'){
        return result[2];
        console.log(result[2]);
    }else if(computer=='rock'&& human=='paper'){
        return result[1];
        console.log(result[1]);
    }else if(computer=='paper'&&human=='rock'){
        return result[2];
        console.log(result[2]);
    }else if(computer=='paper'&&human=='scissor'){
        return result[1];
        console.log(result[1]);
    }else if(computer=='scissor'&&human=='paper'){
        return result[2];
        console.log(result[2]);
    }else if(computer=='scissor'&&human=='rock'){
        return result[1];
        console.log(result[1]);
    }
}*/