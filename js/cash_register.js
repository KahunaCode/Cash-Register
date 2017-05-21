//link calculator.js
var calculator = calculatorModule();

var memory = [];
var operator;
var holder = "";
var balance = 0;

var buttonClear = document.querySelector("#clear");
buttonClear.addEventListener("click", function(){
  memory = [];
  operator = "";
  holder = "";
  document.getElementById("display").innerHTML = "0.00";
});

var buttonBalance = document.querySelector("#getBalance");
buttonBalance.addEventListener("click", function(){
  document.getElementById("display").innerHTML = balance;
});

var buttonDeposit = document.querySelector("#depositCash");
buttonDeposit.addEventListener("click", function(){
  balance += parseFloat(display.innerHTML);
  memory = [];
  holder = "";
  document.getElementById("display").innerHTML = "0.00";
});

var buttonWithdraw = document.querySelector("#withdrawCash");
buttonWithdraw.addEventListener("click", function(){
  balance -= parseFloat(display.innerHTML);
  document.getElementById("display").innerHTML = "0.00";
});

function numFunction(nnn, button){
  button.addEventListener("click", function(){
    holder += nnn;
    document.getElementById("display").innerHTML = nnn;
  });
}

var button;
numButtons = ["7","8","9","4","5","6","1","2","3","0","00","."];
for (i = 0; i < numButtons.length; i++){
  button = document.createElement('button');
  var numValue = numButtons[i];
  button.innerHTML = numButtons[i];
  button.addEventListener('click', numFunc);
  document.body.appendChild(button);

}

function numFunc() {
  var aaa = this.querySelectorAll(".numbers");
  console.log(this);
  console.log(typeof this.innerHTML);
  holder += this.innerHTML;
  document.getElementById("display").innerHTML= holder;
}

function opFunction(op, button){
  button.addEventListener("click", function(){
    operator = op;
    document.getElementById("display").innerHTML = op;
    memory.push(holder);
    holder = "";
  });

}

var buttonDivide = document.querySelector("#divide");
opFunction("/", buttonDivide);

var buttonMultiply = document.querySelector("#multiply");
opFunction("*", buttonMultiply);

var buttonSubtract = document.querySelector("#subtract");
opFunction("-", buttonSubtract);

var buttonAdd = document.querySelector("#add");
opFunction("+", buttonAdd);

var buttonEquals = document.querySelector("#equals");
  buttonEquals.addEventListener("click", function(){
    memory.push(holder);
    switch(operator) {
      case "/":
        var totalD = parseFloat(memory[0]) / parseFloat(memory[1]);
        console.log("total is " + totalD);
        document.getElementById("display").innerHTML = totalD;
        memory = [];
        holder = "";
        console.log(display.innerHTML);
        break;

      case "*":
        var totalM = parseFloat(memory[0]) * parseFloat(memory[1]);
        console.log("total is " + totalM);
        document.getElementById("display").innerHTML = totalM;
        memory = [];
        holder = "";
        console.log(display.innerHTML);
        break;

      case "+":
        var totalA = parseFloat(memory[0]) + parseFloat(memory[1]);
        console.log("total is " + totalA);
        document.getElementById("display").innerHTML = totalA;
        memory = [];
        holder = "";
        console.log(display.innerHTML);
        break;


      case "-":
        var totalS = parseFloat(memory[0]) - parseFloat(memory[1]);
        console.log("total is " + totalS);
        document.getElementById("display").innerHTML = totalS;
        memory = [];
        holder = "";
        console.log(display.innerHTML);
        break;

    }

  });

