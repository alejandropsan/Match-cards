'use strict'
document.addEventListener('DOMContentLoaded', () => {

const cardArray = [
    {
        name: 'Ardilla',
        img: 'images/ardillaCard.png'
    },
    {
        name: 'Ardilla',
        img: 'images/ardillaCard.png'
    },
    {
        name: 'Flamenco',
        img: 'images/flamencoCard.png'
    },
    {
        name: 'Flamenco',
        img: 'images/flamencoCard.png'
    },
    {
        name: 'Loro',
        img: 'images/loroCard.png'
    },
    {
        name: 'Loro',
        img: 'images/loroCard.png'
    },
    {
        name: 'Mariposa',
        img: 'images/mariposaCard.png'
    },
    {
        name: 'Mariposa',
        img: 'images/mariposaCard.png'
    },
    {
        name: 'Mono',
        img: 'images/monoCard.png'
    },
    {
        name: 'Mono',
        img: 'images/monoCard.png'
    },
    {
        name: 'Zorro',
        img: 'images/zorroCard.png'
    },
    {
        name: 'Zorro',
        img: 'images/zorroCard.png'
    }
]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

// Creación de la board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        card.setAttribute('src', 'images/osborne2.png');
        grid.appendChild(card);
    }
}

// Checkear los matches
function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(cardsChosen[0] === cardsChosen[1]) {
        alert('Has hecho un match');
        cards[optionOneId].setAttribute('src', 'images/osborne.jpg');
        cards[optionTwoId].setAttribute('src', 'images/osborne.jpg');
        cardsWon.push(cardsChosen);
    } else {
        alert('Losiento, sigue probando');
        cards[optionOneId].setAttribute('src', 'images/osborne2.png');
        cards[optionTwoId].setAttribute('src', 'images/osborne2.png');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Enhorabuena!! Has encontrado todos los matchs!!';
    }
}

// Levantar la card
function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

createBoard();











})