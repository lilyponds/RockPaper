
let options = [
    'rock',
    'paper',
    'scissor'
];

let computer = computerChoice(options);
let human = prompt("Input your selection rock, paper or scissor:",'rock');
let output = userInputResultCheck(human);

function userInputResultCheck(input){

    if(input.toLowerCase()==options[0] || input.toLowerCase()==options[1]|| input.toLowerCase()==options[2]){
    return whoWon(computer,input.toLowerCase()) ;
} else {
     return "Select a Valid Choice Please!";
}
}

console.log(computer);

console.log(human);

console.log(output);


function computerChoice(choice){
    computerSelection = choice[Math.floor(Math.random() * choice.length)];
    return computerSelection;
}

function whoWon(computer, human){
    let result = [
        "It's a Tie",
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