function placeBet() {
    let outcome = Math.random() < 0.5 ? 'good' : 'bad'; // Randomly choose good or bad
    displayApple(outcome);
}

function displayApple(outcome) {
    let appleElement = document.getElementById('apple');
    if (outcome === 'good') {
        appleElement.className = 'apple good'; // Apply good apple class
    } else {
        appleElement.className = 'apple bad'; // Apply bad apple class
    }
}

