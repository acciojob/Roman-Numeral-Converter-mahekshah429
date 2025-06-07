function convertToRoman() {
  const number = parseInt(document.getElementById("numberInput").value);
  const resultElement = document.getElementById("result");

  if (isNaN(number) || number <= 0 || number > 100000) {
    resultElement.textContent = "Please enter a valid number between 1 and 100000.";
    return;
  }

  const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let remaining = number;
  let roman = "";

  for (const [symbol, value] of romanNumerals) {
    while (remaining >= value) {
      roman += symbol;
      remaining -= value;
    }
  }

  resultElement.textContent = roman;
}
