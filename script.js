const inputData = [
  { id: 1, name: "Test1", value: 14, type: "input", status: "active" },
  { id: 2, name: "Test2", value: 798, type: "input", status: "active" },
  { id: 3, name: "Test3", value: 3999, type: "input", status: "active" },
  { id: 4, name: "Test4", value: 4, type: "input", status: "inactive" },
  { id: 5, name: "Test5", value: 99, type: "input", status: "inactive" },
  { id: 6, name: "Test6", value: 2024, type: "input", status: "active" },
  { id: 7, name: "Test7", value: 44, type: "input", status: "inactive" },
  { id: 8, name: "Test8", value: 9, type: "input", status: "active" },
  { id: 9, name: "Test9", value: 100, type: "input", status: "inactive" },
  { id: 10, name: "Test10", value: 1000, type: "input", status: "active" }
];

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

function convertToRoman(num) {
  let result = '';
  let n = num;
  for (const [symbol, value] of romanNumerals) {
    while (n >= value) {
      result += symbol;
      n -= value;
    }
  }
  return result;
}

function displayResults() {
  const container = document.getElementById('result');
  container.innerHTML = '';

  inputData.forEach(item => {
    const p = document.createElement('p');
    p.textContent = `Input: ${item.value} → Roman: ${convertToRoman(item.value)}`;
    container.appendChild(p);
  });
}

window.onload = displayResults;
