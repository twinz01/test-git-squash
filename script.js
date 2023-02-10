console.log("Test");

function calculate(i, operator, j) {
  let k;
  switch (operator) {
    case "+":
      k = i + j;
      break;
    case "-":
      k = i - j;
      break;
    case "*":
      k = i * j;
      break;
    case "/":
      k = i / j;
  }
  alert("The result is " + k);
}
