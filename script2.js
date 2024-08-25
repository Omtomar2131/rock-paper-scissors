let playerscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const playerscorepara = document.querySelector("#player-score");
const compscorepara = document.querySelector("#computer-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}

const showwinner = (Playerwin, playerchoice, compchoice) => {
    if (Playerwin) {
        playerscore++;
        playerscorepara.textContent = playerscore;
        console.log("You win!");
        msg.innerHTML = `You Win! ${playerchoice} BEATS ${compchoice}`;
        msg.style.backgroundColor = "green"; // Change BG color when player wins
    } else {
        computerscore++;
        compscorepara.textContent = computerscore;
        console.log("You lose!");
        msg.innerHTML = `You Lose! ${compchoice} BEATS ${playerchoice}`;
        msg.style.backgroundColor = "red"; // Change BG color when player loses
    }
}

const playgame = (playerchoice) => {
    console.log("Player choice =", playerchoice);
    const compchoice = gencompchoice();
    console.log("Comp Choice =", compchoice);

    if (playerchoice === compchoice) {
        console.log("It's a tie");
        msg.innerHTML = "It's a tie";
        msg.style.backgroundColor = "blue"; // Change BG color when it's a tie
    } else {
        let Playerwin = true;

        if (playerchoice === "rock") {
            Playerwin = compchoice === "paper" ? false : true;
        } else if (playerchoice === "paper") {
            Playerwin = compchoice === "scissors" ? false : true;
        } else if (playerchoice === "scissors") {
            Playerwin = compchoice === "rock" ? false : true;
        }
        
        showwinner(Playerwin, playerchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const playerchoice = choice.getAttribute("id");
        playgame(playerchoice);
    })
});
