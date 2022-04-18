let p=0,c=0;
function computerPlay(){
    let choices=["rock","paper","scissor"];
    return choices[Math.floor(Math.random()*choices.length)];
}
function playRound(playerSelection, ComputerSelection){
if(playerSelection.toLowerCase() === ComputerSelection.toLowerCase())
    return "This Round Resulted in a Draw. Try playing Rock-Paper-Scissor Again!";
    else{
        if((playerSelection.toLowerCase()==="rock"&&ComputerSelection.toLowerCase()==="scissor")||(playerSelection.toLowerCase()==="paper"&&ComputerSelection.toLowerCase()==="rock")||(playerSelection.toLowerCase()==="scissor"&&ComputerSelection.toLowerCase()==="paper")){
            p++;
            return "You Win! "+playerSelection+" beats "+ComputerSelection;
        }
        else{
            c++;
            return "You Lose! "+ComputerSelection+" beats "+playerSelection;
        }
    }
}
//const playerSelection = "rock";
//const ComputerSelection = computerPlay();
//console.log(playRound(playerSelection,ComputerSelection));
function isValid(playerSelection){
    if(playerSelection.toLowerCase()=="rock"||playerSelection.toLowerCase()=="paper"||playerSelection.toLowerCase()=="scissor"){
    return true;
    }
    else
    return false;
}
function game(){
    p=0;
    c=0;
    for(let i=0;i<5;i++){
        let playerSelection=prompt("ROUND"+(i+1)+"\nEnter your choice: ROCK/PAPER/SCISSOR");
        while(playerSelection===null||isValid(playerSelection)===false){
            playerSelection=prompt("ROUND"+(i+1)+"\nYou entered wrong input last time, please try again!");
        }
        let res=playRound(playerSelection,computerPlay());
        alert("Round "+(i+1)+" result:\n"+res);
        console.log("Round "+(i+1)+" result:");
        console.log("\n"+res);
    }
   console.log("FINAL RESULTS"+"\n YOU :"+p+" \n COMPUTER :"+c);
}
game();