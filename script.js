function convertToRoman(num) {
  if (num <= 0 || num > 100000) {
    return "Please enter a number between 1 and 100000.";
  }

  const romanNumerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = "";

  for (let [symbol, value] of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

function convertNumber() {
  const input = document.getElementById("numberInput").value;
  const number = parseInt(input);
  const resultDiv = document.getElementById("result");

  if (!isNaN(number)) {
    resultDiv.textContent = "Roman Numeral: " + convertToRoman(number);
  } else {
    resultDiv.textContent = "Please enter a valid number.";
  }
}
