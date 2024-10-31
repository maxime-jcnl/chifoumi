let playerScore = 0;
let iaScore = 0;
let playerChoice = null;
let iaChoice = null;

const choices = ["Pierre", "Feuille", "Ciseaux"];
const defaultBackgroundColor = "#82cdff";

document.getElementById('play-button').addEventListener('click', startGame);
document.getElementById('restart-button').addEventListener('click', restartGame);

function startGame() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    startCountdown();
}

function startCountdown() {
    document.body.style.backgroundColor = defaultBackgroundColor;
    document.getElementById('instructions').style.display = 'none';

    let countdownSteps = ["CHI", "FU", "MI"];
    let step = 0;
    
    const countdownText = document.getElementById('countdown-text');
    countdownText.textContent = countdownSteps[step];
    
    const intervalId = setInterval(() => {
        step++;
        if (step < countdownSteps.length) {
            countdownText.textContent = countdownSteps[step];
        } else {
            clearInterval(intervalId);
            countdownText.textContent = "CHOISIS!";
            document.getElementById('instructions').style.display = 'block';
            enablePlayerInput();
        }
    }, 1000);
}

function enablePlayerInput() {
    document.addEventListener('keydown', handlePlayerChoice);
}

function handlePlayerChoice(event) {
    const key = event.key;
    if (key === '1' || key === '2' || key === '3') {
        document.removeEventListener('keydown', handlePlayerChoice);
        playerChoice = parseInt(key) - 1;
        iaChoice = Math.floor(Math.random() * 3);
        displayResult();
    }
}

function displayResult() {
    const playerText = choices[playerChoice];
    const iaText = choices[iaChoice];
    let resultText = `Vous avez choisi ${playerText}, l'IA a choisi ${iaText}. `;

    if (playerChoice === iaChoice) {
        resultText += `<strong>C'est un match nul!</strong>`;
        document.body.style.backgroundColor = defaultBackgroundColor;
    } else if (
        (playerChoice === 0 && iaChoice === 2) ||
        (playerChoice === 1 && iaChoice === 0) ||
        (playerChoice === 2 && iaChoice === 1)
    ) {
        resultText += `<strong>Vous avez gagné!</strong>`;
        playerScore++;
        document.body.style.backgroundColor = 'green';
    } else {
        resultText += `<strong>L'IA a gagné!</strong>`;
        iaScore++;
        document.body.style.backgroundColor = 'red';
    }

    document.getElementById('result').innerHTML = resultText;
    updateScore();
    showRestartButton();
}

function updateScore() {
    document.getElementById('score').textContent = `Score: Joueur ${playerScore} - IA ${iaScore}`;
}

function showRestartButton() {
    document.getElementById('restart-button').style.display = 'block';
}

function restartGame() {
    document.getElementById('result').textContent = '';
    document.getElementById('restart-button').style.display = 'none';
    document.body.style.backgroundColor = defaultBackgroundColor;
    startCountdown();
}
