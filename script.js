function convertToRoman() {
  const input = document.getElementById("numberInput").value;
  const num = parseInt(input);
  const outputDiv = document.getElementById("output");

  if (isNaN(num) || num < 1 || num > 100000) {
    outputDiv.innerText = "Please enter a number between 1 and 100000.";
    return;
  }

  const romanSymbols = [
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
  let value = num;

  for (let [symbol, val] of romanSymbols) {
    while (value >= val) {
      result += symbol;
      value -= val;
    }
  }

  outputDiv.innerText = result.toUpperCase();
}
