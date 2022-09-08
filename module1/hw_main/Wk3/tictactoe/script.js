/*
 * When a user clicks a box we have to fill in the box with their symbol
 *    - How could we detect if they clicked a box at all?
 *      + We could attach an event listener to the entire grid. Use event.target in order to see which box they clicked
 *      + We could attach an individual event listener to each of the boxes and decide what actions to take from there 
 *    - How could we detect WHICH box they clicked. So we know which box to fill in?
 * How do we know who's turn it is? (Which symbol to fill in)
 *    - Count how many times they clicked? (even | odd)
 *    - Count 1 and 2? but what happens to get number 3?
 *      - We go back to 1 with a loop
 *      - we could also subtract 1 when we're at 2 - 1 -> 1 + 1 -> 2 - 1 -> 1
 *    - boolean
 *    - we need something to remember who's turn it is
 *    - since we're alternating we could just use a boolean (true | false)
 *    - at each turn that's taken. All we have to do is alternate from the previous value. True turns to False. False turns to True.
 *    - When they click we check if it's the first players turn. If it is then fill in the square with an X. If it's not then we fill in the square with an O
 *      - if firstPlayer turn is true
 *          fill in X
 *          switch isFirstPlayer turn from true to false
 *        else
 *          fill in O
 *          switch isFirstPlayer turn from false to true
 * 
 * WE NEED TO KEEP TRACK OF GAME STATE
 * How do we keep track of which symbols are in which boxes?
 *    - We use an array to store the game state
 * How do we fill in the information of the game state as a player makes their move?
 *    - We have to fill in the array with the symbol they used AT THE SPECIFIC BOX THEY CLICKED
 * How do we keep track of who wins or loses?
 * How do we keep track of whether or not the game was a draw?
*/
const grid = document.getElementById('grid');
let isFirstPlayerTurn = true;
const gameState = [null, null, null, null, null, null, null, null, null];
// we have to make sure that the box is empty before we fill it in
grid.addEventListener('click', (event) => {
  /*
   * The line below is the same as typing out (it is using destructuring)
   * const target = event.target;
   * const squareNumber = event.target.dataset.squareNumber;
  */
  const { target, target: { dataset: { squareNumber }} } = event; // destructuring
  // we have which box they clicked
  // how could I fill in the box with something
  // we could detect if the box is empty by checking if innerHTML is an empty string

  const playerSymbol = isFirstPlayerTurn === true ? "X" : "O"; // ternary operator | if else statement
  if(target.innerHTML === "") {
    if(isFirstPlayerTurn === true) {
      target.innerHTML = playerSymbol;
      isFirstPlayerTurn = false;
      // we could fill in the gameState from here
      // how do we know which box they filled in? -> squareNumber will give us the idx of the box
      gameState[squareNumber] = playerSymbol;
    } else {
      target.innerHTML = playerSymbol;
      isFirstPlayerTurn = true;
      gameState[squareNumber] = playerSymbol;
    }
  } // don't need an else statement because if the box was filled in we just do nothing
  const didSomeoneWin = checkWin(gameState);
  if(didSomeoneWin) {
    alert(`Player ${playerSymbol} won!`);
  }

  // have to check if it was a draw here. Because if the condition right before this one didn't pass then no one won
  // if it was a draw. Tell them 
  if(isDraw(gameState)) {
    alert(`The game was a draw :(`);
  }
});

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWin(gameStateArray) {
  /*
   * how do we get square1 && square2 && square3?
   * we have to loop through all winning combinations to check each win condition
   *    winningCombinations[i]
   *    winningCombinations[i][0] -> firstSquareIdx
   *    winningCombinations[i][1] -> secondSquareIdx
   *    winningCombinations[i][2] -> thirdSquareIdx
   *    square1 = gameState[winningCombinations[i][0]
   *    square2 = gameState[winningCombinations[i][1]
   *    square3 = gameState[winningCombinations[i][2]
   * OR we could use destructing
   * const [firstSquareIdx, secondSquareIdx, thirdSquareIdx] = winningCombinations[i];
   * const square1 = gameState[firstSquareIdx]
   * const square2 = gameState[secondSquareIdx]
   * const square3 = gameState[thirdSquareIdx]
   * if square1 === square2 === square3 then someone one
  */
  for(let i = 0; i < winningCombinations.length; i++) {
    const winningCombination = winningCombinations[i];
    const [firstSquareIdx, secondSquareIdx, thirdSquareIdx] = winningCombination;
    if(gameState[firstSquareIdx] !== null && gameState[secondSquareIdx] && gameState[thirdSquareIdx] !== null) { // if the boxes are not empty
      if(gameState[firstSquareIdx] === gameState[secondSquareIdx] && gameState[firstSquareIdx] === gameState[thirdSquareIdx]) {
        return true;
      }
    }
  }
  return false;
}

function isDraw(gameStateArray) {
  // fill it in :)
    // if all the squares are filled in
    // and none of them are null
    // then it was a draw

    // loop through array. If any squares are null return false
    // if none of the squares you encountered were null return true
}