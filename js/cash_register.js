// link calculator.js
var cal = calculatorModule();
var holder;
var operator;

/* MAKE NUMBER BUTTONS
   1. Render number to display when clicked
   2. Store the number
   3.
*/

var numButtons = document.getElementsByClassName("nums");
console.log(numButtons);
for (i = 0; i < numButtons.length; i++){
  numButtons[i].addEventListener("click", numHelper);
}

function numHelper(){//helper function for number buttons
  director(parseFloat(this.textContent));
  console.log(this.textContent);
  document.getElementById("display").innerHTML = this.textContent;
}



//  function opFunction(op, button){
//   button.addEventListener("click", function(){
//   operator = op;
//   document.getElementById("display").innerHTML = op;
//   memory.push(holder);
//   holder = "";
//   });

// }



function director(aaa){
  console.log("in the director");
  if (!cal.getTotal() && !operator) {
    cal.load(aaa);
    console.log("cal.loading");
  } else if (cal.getTotal() && operator){
      holder = aaa;
  } else if (aaa === "/"){
    operator = "/";
  } else if (aaa === "*"){
    operator = "*";
  } else if (aaa === "+"){
    operator = "+";
  } else if (aaa === "-"){
    operator = "-";
  }
}

var buttonDivide = document.querySelector("#divide");
buttonDivide.addEventListener("click", function() {
  director("/");
  document.getElementById("display").innerHTML="/";
  console.log(operator);
});

var buttonMultiply = document.querySelector("#multiply");
buttonMultiply.addEventListener("click", function() {
  director("*");
  document.getElementById("display").innerHTML="*";
  console.log(operator);
});

var buttonSubtract = document.querySelector("#subtract");
buttonSubtract.addEventListener("click", function() {
  director("-");
  document.getElementById("display").innerHTML="-";
  console.log(operator);
});

var buttonAdd = document.querySelector("#add");
buttonAdd.addEventListener("click", function() {
  director("+");
  document.getElementById("display").innerHTML="+";
  console.log(operator);
});

var buttonEquals = document.querySelector("#equals");
  buttonEquals.addEventListener("click", function(){
  switch (operator) {
    case "/":
    cal.divide(parseFloat(holder));
    console.log("total = " + cal.getTotal() + ", holder is " + holder + ", operator is " + operator);
    document.getElementById("display").innerHTML=cal.getTotal();
    break;

    case "*":
    cal.multiply(parseFloat(holder));
    console.log("total = " + cal.getTotal() + ", holder is " + holder + ", operator is " + operator);
    document.getElementById("display").innerHTML=cal.getTotal();
    break;

    case "-":
    cal.subtract(parseFloat(holder));
    console.log("total = " + cal.getTotal() + ", holder is " + holder + ", operator is " + operator);
    document.getElementById("display").innerHTML=cal.getTotal();
    break;

    case "+":
    cal.add(parseFloat(holder));
    console.log("total = " + cal.getTotal() + ", holder is " + holder + ", operator is " + operator);
    document.getElementById("display").innerHTML=cal.getTotal();
    break;
  }
  });

var buttonClear = document.querySelector("#clear");
buttonClear.addEventListener("click", function(){
  cal.clearMemory();
  // console.log(cal.clearMemory());
  cal.load(0);
  // console.log(cal.load(0));
  operator = "";
  holder = "";
  document.getElementById("display").innerHTML = "0.00";
});

var buttonBalance = document.querySelector("#getBalance");
buttonBalance.addEventListener("click", function(){
  cal.recallMemory();
  document.getElementById("display").innerHTML = cal.recallMemory();
});

var buttonDeposit = document.querySelector("#depositCash");
buttonDeposit.addEventListener("click", function(){
  cal.saveMemory();
  document.getElementById("display").innerHTML = cal.recallMemory();
});

// var buttonWithdraw = document.querySelector("#withdrawCash");
// buttonWithdraw.addEventListener("click", function(){

// })