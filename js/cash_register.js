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

var button1 = document.querySelector("#one");
button1.addEventListener("click", function(){
  holder += "1";
  document.getElementById("display").innerHTML=holder;
});

var button2 = document.querySelector("#two");
button2.addEventListener("click", function(){
  holder += "2";
  document.getElementById("display").innerHTML=holder;
});

var button3 = document.querySelector("#three");
button3.addEventListener("click", function(){
  holder += "3";
  document.getElementById("display").innerHTML=holder;
});

var button4 = document.querySelector("#four");
button4.addEventListener("click", function(){
  holder += "4";
  document.getElementById("display").innerHTML=holder;
});

var button5 = document.querySelector("#five");
button5.addEventListener("click", function(){
  holder += "5";
  document.getElementById("display").innerHTML=holder;
});

var button6 = document.querySelector("#six");
button6.addEventListener("click", function(){
  holder += "6";
  document.getElementById("display").innerHTML=holder;
});

var button7 = document.querySelector("#seven");
button7.addEventListener("click", function(){
  holder += "7";
  document.getElementById("display").innerHTML=holder;
});

var button8 = document.querySelector("#eight");
button8.addEventListener("click", function(){
  holder += "8";
  document.getElementById("display").innerHTML=holder;
  console.log(memory);
});

var button9 = document.querySelector("#nine");
button9.addEventListener("click", function(){
  holder += "9";
  document.getElementById("display").innerHTML=holder;
  console.log(memory);
});

var button0 = document.querySelector("#zero");
button0.addEventListener("click", function(){
  holder += "0";
  document.getElementById("display").innerHTML=holder;
  console.log(memory);
});

var button00 = document.querySelector("#dub0");
button00.addEventListener("click", function(){
  holder += "00";
  document.getElementById("display").innerHTML=holder;
  console.log(memory);
});

var buttonPeriod = document.querySelector("#period");
buttonPeriod.addEventListener("click", function(){
  holder += ".";
  document.getElementById("display").innerHTML=holder;
  console.log(memory);
});

var buttonDivide = document.querySelector("#divide");
buttonDivide.addEventListener("click", function(){
  operator = "/";
  document.getElementById("display").innerHTML = "/";
  memory.push(holder);
  holder = "";
  console.log(operator);
});

var buttonMultiply = document.querySelector("#multiply");
buttonMultiply.addEventListener("click", function(){
  operator = "*";
  document.getElementById("display").innerHTML = "*";
  memory.push(holder);
  holder = "";
  console.log(operator);
});

var buttonSubtract = document.querySelector("#subtract");
buttonSubtract.addEventListener("click", function(){
  operator = "-";
  document.getElementById("display").innerHTML = "-";
  memory.push(holder);
  holder = "";
  console.log(operator);
});

var buttonAdd = document.querySelector("#add");
buttonAdd.addEventListener("click", function(){
  operator = "+";
  document.getElementById("display").innerHTML = "+";
  memory.push(holder);
  holder = "";
  console.log(operator);
});

var buttonEquals = document.querySelector("#equals");
  buttonEquals.addEventListener("click", function(){
    memory.push(holder);
    switch(operator) {
      case "/":
        var totalD = parseFloat(memory[0])/parseFloat(memory[1]);
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

