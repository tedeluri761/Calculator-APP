let input = document.getElementById("input");
let buttonconteiner = document.getElementById("buttonconteiner");
let clickcount = 0;
let BlackColor = document.querySelectorAll(".BlackColor"); // Use the correct variable name
let DELRESET = document.querySelectorAll(".DEL");
let allbuttons = document.querySelectorAll(".allbuttons");
let toloba = document.querySelector(".toloba");

buttonconteiner.addEventListener("click", (event) => {
  let buttonRed = document.getElementById("buttonRed");

  if (clickcount === 0) {
    clickcount++;
    buttonconteiner.style.justifyContent = "center";
    document.body.style.backgroundColor = "rgba(230, 230, 230, 1)";
    input.style.backgroundColor = "rgba(238, 238, 238, 1)";
    toloba.style.backgroundColor = "rgba(200, 84, 2, 1)";
    toloba.style.boxShadow = "0px -4px 0px 0px rgba(135, 57, 1, 1) inset";

    BlackColor.forEach((element) => {
      element.style.color = "rgba(54, 54, 44, 1)";
    });

    DELRESET.forEach((element) => {
      element.style.backgroundColor = "rgba(55, 129, 135, 1)";
      element.style.boxShadow = "0px -4px 0px 0px rgba(27, 96, 102, 1) inset";
    });
    allbuttons.forEach((element) => {
      element.style.color = "rgba(54, 54, 44, 1)";
    });
    clearAll();
  } else if (clickcount === 1) {
    clickcount++;
    buttonconteiner.style.justifyContent = "end";
    document.body.style.backgroundColor = "rgba(23, 6, 42, 1)";
    input.style.backgroundColor = "rgba(30, 9, 54, 1)";
    buttonRed.style.backgroundColor = "rgba(0, 222, 208, 1)";
    BlackColor.forEach((element) => {
      element.style.color = "rgba(255, 229, 61, 1)";
    });
    DELRESET.forEach((element) => {
      element.style.backgroundColor = "rgba(86, 7, 124, 1)";
      element.style.boxShadow = "0px -4px 0px 0px rgba(190, 21, 244, 1) inset";
    });
    allbuttons.forEach((element) => {
      element.style.color = "rgba(255, 229, 61, 1)";
      element.style.backgroundColor = "rgba(51, 28, 77, 1)";
      element.style.boxShadow = "0px -4px 0px 0px rgba(136, 28, 158, 1) inset";
    });
    toloba.style.backgroundColor = "rgba(0, 222, 208, 1)";
    toloba.style.boxShadow = "0px -4px 0px 0px rgba(108, 249, 241, 1) inset";
    toloba.style.color = "rgba(26, 35, 39, 1)";
    clearAll();
  } else {
    clickcount = 0;
    buttonconteiner.style.justifyContent = "flex-start";
    document.body.style.backgroundColor = "";
    input.style.backgroundColor = "";
    toloba.style.backgroundColor = "";
    toloba.style.boxShadow = "";
    BlackColor.forEach((element) => {
      element.style.color = "";
    });
    DELRESET.forEach((element) => {
      element.style.backgroundColor = "";
      element.style.boxShadow = "";
    });
    allbuttons.forEach((element) => {
      element.style.color = "";
      element.style.backgroundColor = "";
      element.style.boxShadow = "";
    });
    clearAll();
  }
});

function Numbersvalue(value) {
  input.value += value;
}

function Delete() {
  if (input.value.length > 0) {
    input.value = input.value.slice(0, -1);
  }
}

function alloperator(operator) {
  input.value += ` ${operator} `;
}

function Calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.value = "Error";
  }
}

function clearAll() {
  input.value = "";
}

// function heavy() {
//   if (input.value.length > 0 && input.value.length % 3 === 0) {
//     input.value += ",";
//   }
// }
