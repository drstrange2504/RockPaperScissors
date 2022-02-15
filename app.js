let userScore=0; //use LET
let compScore=0; //use LET 
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score_board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

//adding event listeners

function getComputerChoice()
{
    const choices= ['r','p','s'];
    const randomNumber=Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convert(letter){
    if (letter=='r') return "Rock";
    if (letter =="s") return "Scissors";
    if(letter=="p") return "Paper";
}

function win(user,computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    const smalluserword="user".fontsize(3).sup();
    const smallcompword="computer".fontsize(3).sup();
    result_p.innerHTML =convert(user) + smalluserword+ " " + "beats" + " " + convert(computer)+smallcompword+ "." + "You Won ! Keep Winning :)";

}
function lose(user,computer){
    compScore++;
    compScore_span.innerHTML=compScore;
    userScore_span.innerHTML=userScore;
    const smalluserword="user".fontsize(3).sup();
    const smallcompword="computer".fontsize(3).sup();
    result_p.innerHTML =convert(computer) + smallcompword+ " " + "beats" + " " +convert(user) + smalluserword+"." + "You Lose ! Keep Trying !";
    
}
function draw(user,computer){
    compScore_span.innerHTML=compScore;
    userScore_span.innerHTML=userScore;
    result_p.innerHTML= "Oh! It's a draw, same move !!"
    
}

function game(userChoice){
    const computerChoice=getComputerChoice();
    //console.log("user choice ->"+ userChoice);
    //console.log("computer choice ->"+ computerChoice);
    switch(userChoice+computerChoice){
    case "pr":
    case "sp":
    case "rs":
        win(userChoice,computerChoice);
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice,computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice,computerChoice);
    }
}


function main() 
{
rock_div.addEventListener('click',function(){
    game("r");
})
    
paper_div.addEventListener('click',function(){
    game("p");
    
})

scissor_div.addEventListener('click',function(){
    game("s");
    
})
}
main();



