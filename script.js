const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");
// Case
const lowerCase = document.getElementById("lowercase");
const upperCase = document.getElementById("uppercase");
const numbersCase = document.getElementById("numbers");
const symbolsCase = document.getElementById("symbols");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  if (resultEl.innerHTML.length === 0) {
    return alert("Please create a password , then copy");
  }
  navigator.clipboard.writeText(resultEl.innerHTML);
  alert(`Copied`);
});

generateEl.addEventListener("click", () => {
  document.addEventListener("input", length);
  function length() {
    return lengthEl.value;
  }
  const { lower, upper, number, symbol } = randomFunc;

  //   Check length
  if (length() > 20 || length() < 4) {
    alert("Password must be between 4 - 20");
    return;
  }

  const password = generatePassword(
    lower(),
    upper(),
    number(),
    symbol(),
    length()
  );
  resultEl.innerHTML = password;
});

function generatePassword(lower, upper, number, symbol, length) {
  // check All field empty or not
  if (
    !(
      lowerCase.checked ||
      upperCase.checked ||
      numbersCase.checked ||
      symbolsCase.checked
    )
  ) {
    return alert("Please select password combination");
  }

  // Chack  Input case ::
  let value1 = lowerCase.checked ? lower : "";
  let value2 = upperCase.checked ? upper : "";
  let value3 = numbersCase.checked ? number : "";
  let value4 = symbolsCase.checked ? symbol : "";

  // Concactination +++++
  const value = value1 + value2 + value3 + value4;
  // Ganerate password
  let password = "";
  for (let i = 0; i < length; i++) {
    password = password + value[Math.floor(Math.random() * value.length)];
  }
  return password;
}

function getRandomLower() {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  let randonLower = "";
  for (let i = 0; i < lower.length; i++) {
    randonLower = randonLower + lower[Math.floor(Math.random() * lower.length)];
  }
  return randonLower;
}

function getRandomUpper() {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randonUpper = "";
  for (let i = 0; i < upper.length; i++) {
    randonUpper = randonUpper + upper[Math.floor(Math.random() * upper.length)];
  }
  return randonUpper;
}

function getRandomNumber() {
  const number = "0123456789";
  let randomNumber = "";
  for (let i = 0; i < number.length; i++) {
    randomNumber =
      randomNumber + number[Math.floor(Math.random() * number.length)];
  }
  return randomNumber;
}

function getRandomSymbol() {
  const symbol = "!@#$%^&*()_+~";

  let randomSymbol = "";
  for (let i = 0; i < symbol.length; i++) {
    randomSymbol =
      randomSymbol + symbol[Math.floor(Math.random() * symbol.length)];
  }
  return randomSymbol;
}
