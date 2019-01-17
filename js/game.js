'use sctrict'

var name = prompt("What is your name?");
document.getElementById("user_name").innerHTML = name;

var playerScore = 0;
var pcScore = 0;
var round = 0;
var ended = 0;

function playerChoice(choice) {
    if (round <= 5) {
        var pcSel = pcChoice();
        var gMnumber = gMessage(choice, pcSel);

        if (gMnumber == 1) {
            round++; playerScore++;
        } else if (gMnumber == 2) {
            round++ , pcScore++;
        }

        document.getElementById("user_score").innerHTML = playerScore;
        document.getElementById("pc_score").innerHTML = pcScore;

        document.getElementById("u_option").style.display = "none";
        document.getElementById("u_choice").style.display = "flex";

        if (round == 5) {
            if (playerScore > pcScore) console.log(name + " win");
            else console.log("PC wins");
            round++;

            document.getElementById("reset_button").innerHTML = "Restart"
            ended = 1;
        }
    }
}

function reset() {
    if (ended == 1) {
        playerScore = 0;
        pcScore = 0;
        document.getElementById("user_score").innerHTML = playerScore;
        document.getElementById("pc_score").innerHTML = pcScore;
        document.getElementById("reset_button").innerHTML = "Next Round";
        document.getElementById("pc_choice").src = "../assets/question-mark.png";
    }
    document.getElementById("u_option").style.display = "flex";
    document.getElementById("u_choice").style.display = "None";
}

function pcChoice() {
    var imgSrc = [
        "../assets/hand-rock.png",
        "../assets/hand.png",
        "../assets/hand-scissors.png"
    ];

    var numbGen = random(0, 2);
    document.getElementById("pc_choice").src = imgSrc[numbGen];

    return numbGen;
}

function random(lowBound, upBound) {
    return Math.floor(Math.random() * ((upBound + 1) - lowBound) + lowBound);
}

function gMessage(op1, op2) {
    if (op1 == 1 && op2 == 0 || op1 == 0 && op2 == 1) {
        console.log("Paper beats rock!");
        return op1 == 1 ? 1 : 2;
    }
    else if (op1 == 2 && op2 == 1 || op1 == 1 && op2 == 2) {
        console.log("Scissor cut paper!");
        return op1 == 2 ? 1 : 2;
    }
    else if (op1 == 0 && op2 == 2 || op1 == 2 && op2 == 0) {
        console.log("Rock beats scissor!");
        return op1 == 0 ? 1 : 2;
    }
    else {
        console.log("Draw!");
        return 0;
    }
}