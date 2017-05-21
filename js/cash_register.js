//asdfs

var memory = [];
var operator;
var holder = "";
var balance = "55";

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

var buttonDivide = document.querySelector("#divide");
buttonDivide.addEventListener("click", function(){
  operator = "/";
  document.getElementById("display").innerHTML = "/";
  memory.push(holder);
  holder = "";
  console.log(operator);
});

var buttonEquals = document.querySelector("#equals");
  buttonEquals.addEventListener("click", function(){
    memory.push(holder);
    if (operator === "/"){
      console.log("mem1 = " + memory[0] +"\nmem2 = " + memory[1]);
      var total = parseInt(memory[0])/parseInt(memory[1]);
      console.log("total is " + total);
      document.getElementById("display").innerHTML = total;
    }

  });


//udpdate display
console.log(memory);


// total =
//   if operator === "/"{
//     memory[0]/memory[1]
//   }









// var button = document.querySelector("divide");
// button.addEventListener ("click", function(){
//     if(typeof num === "number"){
//     total /= num;
//     }
//     else{
//       throw new Error("not a number");
//     }
//   });
