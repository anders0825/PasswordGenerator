let outputOne = document.getElementById("output-one");
let outputTwo = document.getElementById("output-two");
let generateBtn = document.getElementById("generate-btn");

let passordLength = 10;

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

function getRandomIndex() {
  let randomIndex = Math.floor(Math.random() * characters.length);
  return randomIndex;
}

function getPassword() {
  let password = "";

  for (let i = 0; i < passordLength; i++) {
    password += characters[getRandomIndex()];
  }

  return password;
}

function setPassword() {
  outputOne.textContent = getPassword();
  outputTwo.textContent = getPassword();
}
generateBtn.addEventListener("click", setPassword); // setPassord => clall on click, setPassword() => call on load

function copyToClipboard(copy) {
  // navigator(GlobalBrowserObject)
  // clipboard(API object in navigator)
  // writeText(method of clipboard)
  navigator.clipboard.writeText(copy);
}

let outputFieldOne = document.getElementById("output-field-one");
let outputFieldTwo = document.getElementById("output-field-two");

outputFieldOne.addEventListener("click", () => {
  copyToClipboard(outputOne.textContent);
});

outputFieldTwo.addEventListener("click", () => {
  copyToClipboard(outputTwo.textContent);
});
