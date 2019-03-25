var weapons = ["rock", "paper", "scissors"];
const player1 = "Player 1";
var p1Win = 0;
const player2 = "Player 2";
var p2Win = 0;
var p1Weapon = null;
var p2Weapon = null;

while(p1Win < 3 && p2Win < 3){
    p1Weapon = weapons[Math.floor(Math.random() * weapons.length)];
    console.log(player1+ ": "+ p1Weapon);
    p2Weapon = weapons[Math.floor(Math.random() * weapons.length)];
    
    console.log(player2+ ": "+ p2Weapon);
    if (p1Weapon == p2Weapon) {
        console.log("Result: Tie for this round!");
        console.log(player1 + " has won "+ p1Win + " round(s).");
        console.log(player2 + " has won "+ p2Win + " round(s).");
    } else if (p1Weapon == "rock" && p2Weapon == "paper" || p1Weapon == "paper" && p2Weapon == "scissors" || p1Weapon == "scissors" && p2Weapon == "rock") {
        console.log("Result: " + player2 + " win for this round!");
        p2Win++;
        console.log(player1 + " has won "+ p1Win + " round(s).");
        console.log(player2 + " has won "+ p2Win + " round(s).");

    } else if (p1Weapon == "paper" && p2Weapon == "rock" || p1Weapon == "scissors" && p2Weapon == "paper" || p1Weapon == "rock" && p2Weapon == "scissors") {
        console.log("Result: " + player1 + " win for this round!");
        p1Win++;
        console.log(player1 + " has won "+ p1Win + " round(s).");
        console.log(player2 + " has won "+ p2Win + " round(s).");
    }
    if(p1Win === 3){
        console.log("We have a winner for this game. The winner is " + player1 + ".");
    } else if(p2Win === 3){
        console.log("We have a winner for this game. The winner is " + player2 + ".");
    }
}


