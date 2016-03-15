console.log("Is this thing on?")

// create objects for all the dom elements

var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var b4 = document.getElementById("b4")
var b5 = document.getElementById("b5")
var b6 = document.getElementById("b6")
var b7 = document.getElementById("b7")
var b8 = document.getElementById("b8")
var b9 = document.getElementById("b9")
var reset = document.getElementById("reset")
var playerTurn = "X"

// set appropriate click handlers
b1.addEventListener("click", mark)
b2.addEventListener("click", mark)
b3.addEventListener("click", mark)
b4.addEventListener("click", mark)
b5.addEventListener("click", mark)
b6.addEventListener("click", mark)
b7.addEventListener("click", mark)
b8.addEventListener("click", mark)
b9.addEventListener("click", mark)

function mark() {
  if(this.innerHTML == ""){
  //put an X inside this element
    this.innerHTML = playerTurn;
  //change player turn
    if (playerTurn == "X") {
      playerTurn = "O";
    }
    else {
      playerTurn = "X";
    }
  }
  if(b1.innerHTML == b2.innerHTML && b2.innerHTML == b3.innerHTML && b1.innerHTML != ""||
    b4.innerHTML == b5.innerHTML && b5.innerHTML == b6.innerHTML && b4.innerHTML != ""||
    b7.innerHTML == b8.innerHTML && b8.innerHTML == b9.innerHTML && b7.innerHTML != ""||
    b1.innerHTML == b4.innerHTML && b4.innerHTML == b7.innerHTML && b1.innerHTML != ""||
    b2.innerHTML == b5.innerHTML && b5.innerHTML == b8.innerHTML && b2.innerHTML != ""||
    b7.innerHTML == b3.innerHTML && b6.innerHTML == b9.innerHTML && b3.innerHTML != ""||
    b1.innerHTML == b5.innerHTML && b5.innerHTML == b9.innerHTML && b1.innerHTML != ""||
    b3.innerHTML == b5.innerHTML && b5.innerHTML == b7.innerHTML && b3.innerHTML != "") {
    var winner;
    if(playerTurn == "O") {
      winner = "X"
    } else {
      winner = "0"
    }
    console.log(winner + " wins!");
    resetTable();
}
//if all boxes are filled and there is no winner TIE
  if(b1.innerHTML != "" &&
    b2.innerHTML != "" &&
    b3.innerHTML != "" &&
    b4.innerHTML != "" &&
    b5.innerHTML != "" &&
    b6.innerHTML != "" &&
    b7.innerHTML != "" &&
    b8.innerHTML != "" &&
    b9.innerHTML != "") {
    console.log("It's a Tie!")
  }
}

reset.addEventListener("click", resetTable)
function resetTable() {
  b1.innerHTML = "";
  b2.innerHTML = "";
  b3.innerHTML = "";
  b4.innerHTML = "";
  b5.innerHTML = "";
  b6.innerHTML = "";
  b7.innerHTML = "";
  b8.innerHTML = "";
  b9.innerHTML = "";
}
