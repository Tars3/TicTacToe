console.log("Is this thing on?")

//function startGame() {
//  document.turn = "X"
//}
//function nextMove(square) {
//  if (square.innerHTML == "") {
//    square.innerHTML = document.turn;
//    switchTurn();
//  } else {
//    alert("Hey! Someone's already there!")
//  }
//}

//function switchTurn() {
//  if (document.turn =="X") {
//    else {
//      document.turn =="O"
//    }
//  }
//}

//function getWinner(move) {
//  if (checkRow()
//}

function clickBtn(btn) {
  if (player == 1) {
    document.getElementById(btn).value = "X";
    player -= 1;
  } else {
    document.getElementById(btn).value = "O";
    player += 1;
  }
}
