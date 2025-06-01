let score ={
    CompScore: 0,
    YourScore: 0
};

let CompOutput;
let YourOutput;

function CompOutputGenerate() {
    compRock.style.opacity = 0.3;
    compPaper.style.opacity = 0.3;
    compScissors.style.opacity = 0.3;
    let random = 1 + Math.floor(Math.random()*8);
    console.log(random);
    if (random <= 3) {
        CompOutput = "rock";
        compRock.style.opacity = 1;
    }
    else if (random > 3 && random <= 6) {
        CompOutput = "paper";
        compPaper.style.opacity = 1;
    }
    else {
        CompOutput = "scissors";
        compScissors.style.opacity = 1;
    }
}

function Decide(score) {

    if (CompOutput == YourOutput) {
        document.querySelector(".display").innerHTML = "Draw. Play Again!";
        document.querySelector(".display").style.backgroundColor = "#3c3c3c";
        return score;
    }
    else if (CompOutput == "paper") {
        if(YourOutput == "scissors"){
        document.querySelector(".display").innerHTML = (`You Win! ${YourOutput} beats ${CompOutput}`);
        document.querySelector(".display").style.backgroundColor = "green";
        score.YourScore++;
        document.querySelector(".yourScore").innerHTML = score.YourScore;
        return score;
        }else{
            document.querySelector(".display").innerHTML = (`You Loose. ${CompOutput} beats ${YourOutput}`);
            document.querySelector(".display").style.backgroundColor = "red";
            score.CompScore++;
            document.querySelector(".compScore").innerHTML = score.CompScore;
            return score;
        }        
    }

    else if (CompOutput == "rock") {
        if(YourOutput == "scissors"){
        document.querySelector(".display").innerHTML = (`You Loose. ${CompOutput} beats ${YourOutput}`)
        document.querySelector(".display").style.backgroundColor = "red";
        score.CompScore++;
        document.querySelector(".compScore").innerHTML = score.CompScore;
        return score;
        }else{
            document.querySelector(".display").innerHTML = (`You Win! ${YourOutput} beats ${CompOutput}`)
            document.querySelector(".display").style.backgroundColor = "green";
            score.YourScore++;
            document.querySelector(".yourScore").innerHTML = score.YourScore;
            return score;
        }
    }
    
    else if (CompOutput == "scissors") {
        if(YourOutput == "paper"){
        document.querySelector(".display").innerHTML = (`You Loose. ${CompOutput} beats ${YourOutput}`)
        document.querySelector(".display").style.backgroundColor = "red";
        score.CompScore++;
        document.querySelector(".compScore").innerHTML = score.CompScore;
        return score;
        }else{
            document.querySelector(".display").innerHTML = (`You Win! ${YourOutput} beats ${CompOutput}`)
            document.querySelector(".display").style.backgroundColor = "green";
            score.YourScore++;
            document.querySelector(".yourScore").innerHTML = score.YourScore;
            return score;
        }
    }
}

rock.addEventListener("click", () => {
    CompOutputGenerate();
    console.log(CompOutput);
    YourOutput = "rock";
    console.log(YourOutput);
    score = Decide(score);
});

paper.addEventListener('click', () => {
    CompOutputGenerate();
    console.log(CompOutput);
    YourOutput = "paper";
    console.log(YourOutput);
    score = Decide(score);
});

scissors.addEventListener('click', () => {
    CompOutputGenerate();
    console.log(CompOutput);
    YourOutput = "scissors";
    console.log(YourOutput);
    score = Decide(score);
});