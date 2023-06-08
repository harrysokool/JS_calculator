const number_button = document.querySelectorAll('[data_number]');
const op_button = document.querySelectorAll('[data_op]');
const eq_button = document.querySelector('[data_eq]');
const clear_button = document.querySelector('[data_clear]');
const prev_op = document.querySelector('[prev_operand]');
const curr_op = document.querySelector('[curr_operand]');

function updateResult() {
  let result = document.getElementById("result");
}; 

updateResult();

function updateInput() {
  let input = document.getElementById("result");
  input.setAttribute("value", 7);
};

function clearInput() {
  let input = document.getElementById("result");
  input.setAttribute("value", 0);
};



