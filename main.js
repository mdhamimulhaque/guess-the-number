const body = document.querySelector("#body");
const oneToFive = document.getElementById("one_five");
const sixToTen = document.getElementById("six_ten");
const eleToFifteen = document.getElementById("ele_fifteen");
const result = document.getElementById("result");
const attempt = document.getElementById("attempt");
const heightScore = document.getElementById("height_score");
const playAgain = document.getElementById("play_Again");

let randomNumber = Math.floor(Math.random() * 15) + 1;

let attemptLeft = 3;
let heightScoreValue = 0;


const rightOutput = () => {
    result.innerText = "You Win";
    body.style.backgroundColor = "green";
    body.style.color = "#fff";
    if (attemptLeft > heightScoreValue) {
        heightScore.innerText = attemptLeft;
        result.style.color = "#fff";
    }

}
const wrongOutput = () => {
    result.innerText = "Number Not Match";
    body.style.backgroundColor = "red";
    body.style.color = "#fff";
    attemptLeft--;
    attempt.innerText = attemptLeft;
}

const gameOver = () => {
    result.innerText = "Game Over";
    result.style.color = "red";
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
    document.getElementById("random_number").innerText = randomNumber;
}

oneToFive.addEventListener("click", () => {
    if (attemptLeft > 0) {
        if (randomNumber <= 5) {
            rightOutput();
        } else {
            wrongOutput()
        }
    } else if (attemptLeft == 0) {
        gameOver();
    }
});


sixToTen.addEventListener("click", () => {
    if (attemptLeft > 0) {
        if ((randomNumber >= 6) && (randomNumber <= 10)) {
            rightOutput();
        } else {
            wrongOutput()
        }
    } else if (attemptLeft == 0) {
        gameOver();
    }
});


eleToFifteen.addEventListener("click", () => {
    if (attemptLeft > 0) {
        if (randomNumber >= 11) {
            rightOutput();
        } else {
            wrongOutput()
        }
    } else if (attemptLeft == 0) {
        gameOver();
    }
})

playAgain.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 15) + 1;
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
    document.getElementById("random_number").innerText = "??";
    result.innerText = "let's play";
    attemptLeft = 3;
    heightScoreValue = 0
    attempt.innerText = attemptLeft;
    heightScore.innerText = heightScoreValue;
    result.style.color = "#000";

})