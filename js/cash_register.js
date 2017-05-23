// link calculator.js
var cal = calculatorModule();
var holder;
var operator;

// create number buttons

// var button;
// numButtons = ["7","8","9","4","5","6","1","2","3","0","00","."];
// for (i = 0; i < numButtons.length; i++){
//   button = document.createElement('button');
//   var numValue = numButtons[i];
//   button.innerHTML = numButtons[i];
//   button.addEventListener('click', numFunc);
//   document.getElementsByClassName("numbers")[0].appendChild(button);
// }

var numButtons = document.getElementsByClassName("nums");
console.log(numButtons);
for (i = 0; i < numButtons.length; i++){
  numButtons[i].addEventListener("click", numFunc);
}

function numFunc(){
  director(parseFloat(this.textContent));
  console.log(this.textContent);
}


// var button8 = document.querySelector("#eight");
//   button8.addEventListener("click", function(){
//   director(8);
//   console.log(cal.getTotal());
//   document.getElementById("display").innerHTML="8";
//   });

 function opFunction(op, button){
  button.addEventListener("click", function(){

  operator = op;
  document.getElementById("display").innerHTML = op;
  memory.push(holder);
  holder = "";
  });

}



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
    break;

    case "*":
    cal.multiply(parseFloat(holder));
    console.log("total = " + cal.getTotal() + ", holder is " + holder + ", operator is " + operator);
    break;

    case "-":
    cal.subtract(parseFloat(holder));
    console.log("total = " + cal.getTotal() + ", holder is " + holder + ", operator is " + operator);
    break;

    case "+":
    cal.add(parseFloat(holder));
    console.log("total = " + cal.getTotal() + ", holder is " + holder + ", operator is " + operator);
    break;
  }
  });

var buttonClear = document.querySelector("#clear");
buttonClear.addEventListener("click", function(){
  cal.clearMemory();
  operator = "";
  holder = "";
  document.getElementById("display").innerHTML = "0.00";
});