const x = "x",
  o = "o",
  bxs = document.querySelectorAll(".box"),
  button = document.querySelector(".restart"),
  board = document.querySelector(".board"),
  message = document.querySelector(".message"),
  text = document.querySelector(".text"),
  wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
let oTurn;

const startGame = () => {
  bxs.forEach((bx) => {
    bx.classList.remove(x, o);
    bx.removeEventListener("click", clicked);
    bx.addEventListener("click", clicked, { once: true });
  });
  message.classList.remove("show");
  switchBoard();
};

const clicked = (e) => {
  placeMark(e.target);
  if (checkWin() || checkTie()) endGame();
  else switchTurns();
  switchBoard();
};

const endGame = () => {
  if (checkTie()) text.innerText = "Tie!";
  else text.innerText = `${oTurn ? o : x}'s win!`;
  message.classList.add("show");
};

const placeMark = (bx) => bx.classList.add(oTurn ? o : x);

const checkWin = () =>
  wins.some((win) =>
    win.every((i) => bxs[i].classList.contains(oTurn ? o : x))
  );

const checkTie = () =>
  [...bxs].every((bx) => bx.classList.contains(x) || bx.classList.contains(o));

const switchTurns = () => (oTurn = !oTurn);

const switchBoard = () => (board.className = `board ${oTurn ? o : x}`);

startGame();

button.addEventListener("click", startGame);