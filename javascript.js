
let options = [
    'rock',
    'paper',
    'scissor'
];

let gameSize = prompt("How many games do you want to play?", 3);
let finalScore = play(options,gameSize);
console.log(finalScore);
console.log("*-----------GAME OVER------------*");


function play(options,size){
    let scoreComp = 0;
    let scoreHum = 0;
    let message;

for(i=1;i<=size;i++) {
    let computer = computerChoice(options);
let human = prompt("Input your selection rock, paper or scissor:",'rock');
let output = userInputResultCheck(human,computer);
console.log(computer);
console.log(human);
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
}