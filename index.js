// 1. rock , scissors , paper oyunu qurun DOM istifade etmeden
// prompt, alert ve s. tipli built-in func istifade ede bilersiniz
function playRockPaperScissors() {

    var userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

    function getComputerChoice() {
        var choices = ["rock", "paper", "scissors"];
        var randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    var computerChoice = getComputerChoice();

    function determineWinner(user, computer) {
        if (user === computer) {
            return "It's a tie!";
        }
        if (
            (user === "rock" && computer === "scissors") ||
            (user === "scissors" && computer === "paper") ||
            (user === "paper" && computer === "rock")
        ) {
            return "You win!";
        }
        return "You lose!";
    }

    var result = determineWinner(userChoice, computerChoice);

    alert("You chose: " + userChoice + "\nComputer chose: " + computerChoice + "\nResult: " + result);
}
playRockPaperScissors();
//2. eded texmin etme oyunu : 1-50 arasinda 3 defeye ededi texmin etmek  : 
function numberGuessingGame() {
    let health = 3;
    const secretNumber = Math.floor(Math.random() * 50) + 1;

    alert("Welcome to the Number Guessing Game! Guess a number between 1 and 50. You have 3 tries.");

    while (health > 0) {
        let userGuess = parseInt(prompt("Enter your guess (between 1 and 50):"));

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
            alert("Please enter a valid number between 1 and 50.");
            continue;
        }

        if (userGuess === secretNumber) {
            alert("Congratulations! You guessed the correct number: " + secretNumber);
            return;
        } else {
            health--;
            if (health > 0) {
                alert("Wrong guess. You have " + health + " tries left.");
            } else {
                alert("Sorry, you've run out of tries. The correct number was: " + secretNumber);
            }
        }
    }
}
numberGuessingGame();
//3. eded verilecek , meselen 45 , bundan sonra generate olunacaq random ededin 45-den boyuk ve ya kicik oldugunu texmin edin 
let currentNumber = Math.floor(Math.random() * 100) + 1;
let nextNumber = Math.floor(Math.random() * 100) + 1;

console.log("Current number:", currentNumber);

let guess = prompt("Tahmin edin (higher/lower): ").toLowerCase();

if (nextNumber > currentNumber && guess === "higher") {
    console.log("Doğru tahmin! Next number daha büyük.");
} else if (nextNumber < currentNumber && guess === "lower") {
    console.log("Doğru tahmin! Next number daha küçük.");
} else {
    console.log(`Yanlış tahmin! Next number: ${nextNumber}`);
}


















