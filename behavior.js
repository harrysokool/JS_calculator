const buttons = document.querySelectorAll('button');  // array of buttons
const display = document.querySelector('.display');   // the display
let displayText = [];                                 // formula
display.textContent = 0;

function calcualte(button) {                          
  let button_value = button.textContent;                 
  let result = 0; 

  // showing display with numbers
  displayText.push(button_value); 
  let joinDisplayText = displayText.join("");    
  display.textContent = joinDisplayText;

  if (button_value == "=") {
    displayText.pop();
    joinDisplayText = displayText.join("");
    result = eval(joinDisplayText);
    display.textContent = result;
    displayText = [];
    displayText.push(result);
  }

  // clear function
  if (button_value ==  "clear") {
    displayText = [];
    display.textContent = 0;
  }
}

// for each button, add event listener when click, call back when button is clicked.
buttons.forEach(button => button.addEventListener('click', () => calcualte(button)));







