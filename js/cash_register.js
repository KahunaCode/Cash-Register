// link calculator.js
var cal = calculatorModule();
var holder;
var operator;

// create number buttons
var button8 = document.querySelector("#eight");
 button8.addEventListener("click", function(){
   director(8);
   document.getElementById("display").innerHTML="8";
   console.log(cal.getTotal());
  });

 function opFunction(op, button){
  button.addEventListener("click", function(){

    operator = op;
    document.getElementById("display").innerHTML = op;
    memory.push(holder);
    holder = "";
  });

}

// numButton updates cal.total
// operator button sets var operator = “operator”
// if cal.total && operator {
//   number button updates var holder
// }
// equals button calls operator(holder) // / * + -



function director(aaa){
  if (!cal.total && !operator) {
    cal.total = aaa;
  } else
  {
    if (cal.total && operator){
      holder = aaa;
    }
  }if (aaa === "/"){
    operator = "/";
  }if (aaa === "*"){
    operator = "*";
  }if (aaa === "+"){
    operator = "+";
  }if (aaa === "-"){
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
    cal.total = parseFloat(cal.total);

    cal.divide(parseFloat(holder));
  console.log("total = " + cal.total + ", holder is " + holder + ", operator is " + operator);
  break;
  }


  });