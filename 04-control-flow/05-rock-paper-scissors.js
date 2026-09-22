// Rock-Paper-Scissors

function rockPaperScissors(player1, player2) {

    // Invalid input
    if (
        !["rock", "paper", "scissors"].includes(player1) ||
        !["rock", "paper", "scissors"].includes(player2)
    ) {
        return "Invalid choice";
    }

    // Tie
    if (player1 === player2) {
        return "It's a tie";
    }

    // Player 1 wins
    if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "scissors" && player2 === "paper") ||
        (player1 === "paper" && player2 === "rock")
    ) {
        return "Player 1 wins";
    }

    // Player 2 wins
    return "Player 2 wins";
}


// Practice

console.log(rockPaperScissors("rock", "scissors")); // "Player 1 wins"

console.log(rockPaperScissors("rock", "paper")); // "Player 2 wins"

console.log(rockPaperScissors("paper", "scissors")); // "Player 2 wins"

console.log(rockPaperScissors("scissors", "paper")); // "Player 1 wins"

console.log(rockPaperScissors("rock", "rock")); // "It's a tie"

console.log(rockPaperScissors("rock", "water")); // "Invalid choice"