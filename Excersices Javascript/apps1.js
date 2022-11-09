const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const message = document.querySelector('.message');
const cardsEl = document.querySelector('.cards');
const sums = document.querySelector('.sums');
const earning = document.querySelector('.earnings');

let cards = [];
let sum = 0
hasBlackJack = false
let isAlive = false
let message1 = '';

let player = {
    name: 'Jones',
    chips: 145
}




console.log(cards)
function getRandomCard() {
    let RandValue = Math.floor(Math.random() * 13) + 1;
    if (RandValue === 1){
        return 11;
    } else if (RandValue === 11 || RandValue === 12 || RandValue === 13) {
        return 10;
    } else {
        return RandValue;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame()    
}

function startGame() {    
    sums.innerHTML = "Sum: " + sum;
    cardsEl.innerHTML = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardsEl.innerHTML += ' ' + cards[i]
    }
    if (sum < 21) {
        message1 = "Do you want to draw a new card?";
    } else if(sum === 21) {
        message1 = "Wohoo! You've got Blackjack";
        hasBlackJack = true;
        earning.innerHTML = player.name + ': $' + player.chips;
    } else {
        message1 = "You're out of the game!"
        isAlive = true

    }
    message.innerHTML = message1;
}

function newCard() {
    if (sum === 21 || sum > 21) {
        isAlive = false;
        hasBlackJack = false;                
    } else {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame()
    }
}


btn1.addEventListener('click', startGame)
btn2.addEventListener('click', newCard)



