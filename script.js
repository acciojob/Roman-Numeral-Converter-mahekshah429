function convertToRoman(num) {
  if (num <= 0 || num > 3999) return "Enter number from 1 to 3999";

  const romanMap = [
    { val: 1000, sym: "M" },
    { val: 900, sym: "CM" },
    { val: 500, sym: "D" },
    { val: 400, sym: "CD" },
    { val: 100, sym: "C" },
    { val: 90, sym: "XC" },
    { val: 50, sym: "L" },
    { val: 40, sym: "XL" },
    { val: 10, sym: "X" },
    { val: 9, sym: "IX" },
    { val: 5, sym: "V" },
    { val: 4, sym: "IV" },
    { val: 1, sym: "I" },
  ];

  let result = "";
  for (const { val, sym } of romanMap) {
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }
  return result;
}

function convert() {
  const input = document.getElementById("numberInput").value;
  const resultEl = document.getElementById("result");

  if (!input || isNaN(input)) {
    resultEl.textContent = "Please enter a valid number.";
    return;
  }

  const roman = convertToRoman(Number(input));
  resultEl.textContent = `Roman Numeral: ${roman}`;
}