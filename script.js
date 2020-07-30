import { startConfetti, stopConfetti, removeConfetti } from './confetti.js';

const playerScoreElement = document.getElementById('player-score');
const playerChoiceElement = document.getElementById('player-choice');
const computerScoreElement = document.getElementById('computer-score');
const computerChoiceElement = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');
const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissors = document.getElementById('player-scissors');
const playerLizard = document.getElementById('player-lizard');
const playerSpock = document.getElementById('player-spock');
const computerRock = document.getElementById('computer-rock');
const computerPaper = document.getElementById('computer-paper');
const computerScissors = document.getElementById('computer-scissors');
const computerLizard = document.getElementById('computer-lizard');
const computerSpock = document.getElementById('computer-spock');
const gameIcons = document.querySelectorAll('.far');
const choices = {
	rock: {name: 'Rock', defeats: ['scissors', 'lizard']},
	paper: {name: 'Paper', defeats: ['rock', 'spock']},
	scissors: {name: 'Scissors', defeats: ['paper', 'lizard']},
	lizard: {name: 'Lizard', defeats: ['paper', 'spock']},
	spock: {name: 'Spock', defeats: ['scissors', 'rock']}
};
let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;

function resetSelected() {
	gameIcons.forEach(icon => icon.classList.remove('selected'));
	stopConfetti();
	removeConfetti();
};

function reset() {
	playerScoreNumber = 0;
	computerScoreNumber = 0;
	playerScoreElement.textContent = playerScoreNumber;
	computerScoreElement.textContent = computerScoreNumber;
	playerChoiceElement.textContent = '';
	computerChoiceElement.textContent = '';
	resultText.textContent = '';
	resetSelected();
};

function computerRandomChoice() {
	const computerChoiceNumber = Math.random();

	if (computerChoiceNumber < 0.2) {
		computerChoice = 'rock';
	} else if (computerChoiceNumber <= 0.4) {
		computerChoice = 'paper';
	} else if (computerChoiceNumber <= 0.6) {
		computerChoice = 'scissors';
	} else if (computerChoiceNumber <= 0.8) {
		computerChoice = 'lizard';
	} else {
		computerChoice = 'spock';
	};
};

function displayComputerChoice() {
	switch (computerChoice) {
		case 'rock':
			computerRock.classList.add('selected');
			computerChoiceElement.textContent = ' --- Rock';
			break;
		case 'paper':
			computerPaper.classList.add('selected');
			computerChoiceElement.textContent = ' --- Paper';
			break;
		case 'scissors':
			computerScissors.classList.add('selected');
			computerChoiceElement.textContent = ' --- Scissors';
			break;
		case 'lizard':
			computerLizard.classList.add('selected');
			computerChoiceElement.textContent = ' --- Lizard';
			break;
		case 'spock':
			computerSpock.classList.add('selected');
			computerChoiceElement.textContent = ' --- Spock';
			break;
		default:
			break;
	};
};

function updateScore(playerChoice) {
	if (playerChoice === computerChoice) {
		resultText.textContent = 'It\'s a Tie';
	} else {
		const choice = choices[playerChoice];

		if (choice.defeats.indexOf(computerChoice) > -1) {
			startConfetti();
			resultText.textContent = 'You Won!';
			playerScoreNumber++;
			playerScoreElement.textContent = playerScoreNumber;
		} else {
			resultText.textContent = 'You Lost!';
			computerScoreNumber++;
			computerScoreElement.textContent = computerScoreNumber;
		};
	};
};

function checkResult(playerChoice) {
	 resetSelected();
	 computerRandomChoice();
	 displayComputerChoice();
	 updateScore(playerChoice);
};

function select(playerChoice) {
	checkResult(playerChoice);

	switch (playerChoice) {
		case 'rock':
			playerRock.classList.add('selected');
			playerChoiceElement.textContent = ' --- Rock';
			break;
		case 'paper':
			playerPaper.classList.add('selected');
			playerChoiceElement.textContent = ' --- Paper';
			break;
		case 'scissors':
			playerScissors.classList.add('selected');
			playerChoiceElement.textContent = ' --- Scissors';
			break;
		case 'lizard':
			playerLizard.classList.add('selected');
			playerChoiceElement.textContent = ' --- Lizard';
			break;
		case 'spock':
			playerSpock.classList.add('selected');
			playerChoiceElement.textContent = ' --- Spock';
			break;
		default:
			break;
	};
};

window.select = select;
window.reset = reset;
reset();