

var memory = [];
var operator;
var holder = "";
console.log(memory);

var button7 = document.querySelector("#seven");
//push to memory
button7.addEventListener("click", function(){
  holder += "7";
  document.getElementById("display").innerHTML=holder;
});

var button8 = document.querySelector("#eight");
//push to memory
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
