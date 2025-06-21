function convert() {
  const inputVal = document.getElementById("numberInput").value;
  const result = document.getElementById("result");

  if (!inputVal || isNaN(inputVal)) {
    result.innerText = "Please enter a valid number.";
    return;
  }

  fetch("http://localhost:3000/romanConverter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ input: Number(inputVal) })
  })
    .then(response => response.json())
    .then(data => {
      if (data.roman) {
        result.innerText = `Roman Numeral: ${data.roman}`;
      } else if (data.error) {
        result.innerText = `Error: ${data.error}`;
      } else {
        result.innerText = "Something went wrong.";
      }
    })
    .catch(err => {
      result.innerText = "Server Error: Unable to fetch result.";
      console.error(err);
    });
}