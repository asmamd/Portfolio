document.addEventListener("DOMContentLoaded", () => {
    const cardsArray = [
        'A', 'A', 'B', 'B',
        'C', 'C', 'D', 'D',
        'E', 'E', 'F', 'F',
        'G', 'G', 'H', 'H'
    ];

    let matchedPairs = 0;
    const totalPairs = cardsArray.length / 2;

    // Shuffle function to randomize the card positions
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(cardsArray);

    const gameBoard = document.getElementById("game-board");
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;

    function createBoard() {
        cardsArray.forEach(symbol => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.symbol = symbol;
            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
        });
    }

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flipped');
        this.textContent = this.dataset.symbol;

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        const isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        firstCard.classList.add('matched');
        secondCard.classList.add('matched');

        matchedPairs++;
        resetBoard();
        if (matchedPairs === totalPairs) {
            showEndMessage("Congratulations! You've matched all the pairs!");
        }
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');

            firstCard.textContent = '';
            secondCard.textContent = '';

            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    function showEndMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');// add div class name 
        messageDiv.textContent = message;

        document.body.appendChild(messageDiv);
    }


    createBoard();
});
