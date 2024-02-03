function add(step) {
  let numberElement = document.getElementById('number');
  let number = numberElement.innerText;
  number = parseInt(number) + parseInt(step);
  numberElement.innerText = number;
}

function subtract(step) {
  console.log('Subtracting ' + step);
  let numberElement = document.getElementById('number');
  let number = numberElement.innerText;
  number = parseInt(number) - parseInt(step);
  numberElement.innerText = number;
}

function reset() {
  let numberElement = document.getElementById('number');
  numberElement.innerText = 0;
}
