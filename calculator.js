const body = document.querySelector("#calculator-body-container"), numbers_container = document.querySelector("#numbers-container"), operators_container = document.querySelector("#operators-container"),
equal_clear_decimalpoint = document.querySelector("#equal-clear-container");

// Create number buttons
for(let i = 1; i <= 10; i++){
  let button = document.createElement("div"), 
      number = document.createElement("p"); 

  button.classList.add("number-button");
  number.classList.add("number-button-content"); 

  number.textContent = `${i}`;
  
  i === 10 ?  //If 10, replace with 0 and make button larger.
    (button.style.width = "300px", number.textContent = "0") : button.style.width = "100px";
  
  
  button.appendChild(number);
  numbers_container.appendChild(button);
}

// Create operator buttons
for(let i = 0; i < 6; i++){
  let button = document.createElement("div"),
      operator = document.createElement("p");
  button.classList.add("operator-button");
  operator.classList.add("operator-button-content");

  //Switch to assign textContent to operator buttons
  switch(i){
    case 0:
      operator.textContent = "+";
      break;
    case 1:
      operator.textContent = "-";
      break;
    case 2:
      operator.textContent = "x";
      break;
    case 3:
      operator.textContent = "/";
      break;
    case 4:
      operator.textContent = "%";
      break;
    case 5:
      operator.textContent = "!";
      break;
  }

  button.appendChild(operator);
  operators_container.appendChild(button);

}

//Create Equals and Clear and decimal point
for(let i = 0; i < 3; i++){
  let button = document.createElement("div"),
      function_name = document.createElement("p");

  button.classList.add("equal-clear-decimalpoint-button");
  function_name.classList.add("equal-clear-decimalpoint-button-content");

  switch(i){
    case 0:
      function_name.textContent = "=";
      break;
    case 1:
      function_name.textContent = "Clear";
      break;
    case 2:
      function_name.textContent = ".";
      break;
  }

  button.appendChild(function_name);
  equal_clear_decimalpoint.appendChild(button);
}