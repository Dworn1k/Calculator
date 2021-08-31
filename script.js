let buttons = document.getElementsByClassName("button");
//console.log(buttons);

for (i = 0; i < buttons.length; i++) {
  if (buttons[i].innerHTML === "AC") {
    buttons[i].addEventListener("click", () => allClear());
  } else if (buttons[i].innerHTML === "DEL") {
    buttons[i].addEventListener("click", () => del());
  } else if (buttons[i].innerHTML === "X") {
    buttons[i].addEventListener("click", () => multiply());
  } else if (buttons[i].innerHTML === "/") {
    buttons[i].addEventListener("click", () => divide());
  } else if (buttons[i].innerHTML === "-") {
    buttons[i].addEventListener("click", () => subtract());
  } else if (buttons[i].innerHTML === "+") {
    buttons[i].addEventListener("click", () => add());
  } else if (buttons[i].innerHTML === "=") {
    buttons[i].addEventListener("click", () => equals());
  } else if (buttons[i].innerHTML === ".") {
    buttons[i].addEventListener("click", () => coma());
  } // brakuje wąsów
  else
    buttons[i].addEventListener("click", () => {
      // funkcja strzałkowa nie ma swojego this (mozna to obejsc)
      // a this by sie tu przydalo
      // jak zmieniasz callback na zwykla funkcje to zadziala z this
      let number = parseInt(buttons[i].innerHTML); // a tutaj jestes poza zasiegiem
      // bo let nie jest globalne!

      numberbuttons(number);
    });
  // a tu masz rozwiazanie z funkcja strzalkowa
  // else {
  //     buttons[i].addEventListener("click", (e) => {
  //       numberbuttons(e.target.innerHTML);
  //     });
  //   }
}

function allClear() {
  console.log("naciskam AC");
}

function del() {}

function multiply() {}

function divide() {}

function subtract() {}

function add() {}

function equals() {}

function coma() {}

function numberbuttons(number) {
  //console.log(parseInt(button));
  console.log(number);
}

function display() {}
