const body = document.querySelector("#calculator-body-container"), numbers_container = document.querySelector("#numbers-container"), operators_container = document.querySelector("#operators-container"),
equal_clear_decimalpoint = document.querySelector("#equal-clear-container"),
calculator_screen = document.querySelector(".screen");

function clearScreen(){
  calculator_screen.value = "";
}

function evaluateScreen(){
  calculator_screen.value = eval(calculator_screen.value);
}

function factorial(argument){
  let factorial = 1, count = 0;

  for(let i = 0; i < argument; i++){
    factorial *= argument - i;
    console.log(factorial, argument);
  }
  return factorial;
}

// Create number buttons
for(let i = 1; i <= 10; i++){
  let button = document.createElement("div"), 
      number = document.createElement("p"); 

  button.classList.add("number-button");
  number.classList.add("number-button-content"); 

  number.textContent = `${i}`;
  
  i === 10 ?  //If 10, replace with 0 and make button larger.
    (button.style.width = "300px", number.textContent = "0") : button.style.width = "100px";
  
  button.addEventListener("click", ()=>{
    console.log(number.textContent);
    calculator_screen.value += `${number.textContent}`;
  })

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
      operator.textContent = "*";
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

  button.addEventListener("click", ()=>{
    calculator_screen.value += operator.textContent;
  })

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
    //"equals" button
    case 0:
      function_name.textContent = "=";
      button.addEventListener("click", () => {
        //Test input for factorial; extract and calc factorial if found; ignore rest
        /^[0-9]+!$/.test(calculator_screen.value) === true ? 
        calculator_screen.value = factorial(parseInt(calculator_screen.value.match(/^[0-9]+/).join())) : evaluateScreen();
      });
      break;
    //clear button
    case 1:
      function_name.textContent = "Clear";
      button.addEventListener("click", clearScreen);
      break;
    //decimal point
    case 2:
      function_name.textContent = ".";
      button.addEventListener("click", ()=>{
        //test if a decimal point has already been appended to buffer
        if(/[.]/.test(calculator_screen.value) === false){ 
          calculator_screen.value += ".";}
      });
      break;
  }

  button.appendChild(function_name);
  equal_clear_decimalpoint.appendChild(button);
}
