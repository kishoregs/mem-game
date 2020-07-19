document.addEventListener("DOMContentLoaded", () => {
  //card options
  let cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
  ];
  let renderedCards = [];

  // Easy Sort
  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");

  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  const cardsWon = [];

  //create your board
  function createBoard() {
    // Diffcult sort
    grid.innerHTML = "";
    shuffle(cardArray);

    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("class", ".griditem");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    renderedCards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      cardsChosen = [];
      cardsChosenId = [];
      alert("You found a match");

      renderedCards[optionTwoId].setAttribute("src", "images/white.png");
      renderedCards[optionOneId].setAttribute("src", "images/white.png");

      //diffcult
      //Set the two aside from the pick list.
      cardArray.splice(renderedCards[optionOneId].getAttribute("data-id"), 1);
      cardArray.splice(renderedCards[optionTwoId].getAttribute("data-id"), 1);

      cardsWon.push(cardsChosen);

      // display the win count
      resultDisplay.textContent = cardsWon.length;
    } else {
      cardsChosen = [];
      cardsChosenId = [];

      //Flip the two back as before.
      renderedCards[optionOneId].setAttribute("src", "images/blank.png");
      renderedCards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry, try again");
    }

    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    } else {
      // Difficult
      createBoard();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
});
