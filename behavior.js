
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

let displayText = [];

// show numbers on display
// function for clear
// join all the numbers
function calcualte(button) {
  
  let button_value = button.textContent;
  displayText.push(button_value); 
  let joinDisplayText = displayText.join("");
  display.textContent = joinDisplayText;

  console.log(displayText);

}

// for each button, add event listener when click, call back when button is clicked.
buttons.forEach(button => button.addEventListener('click', () => calcualte(button)));






