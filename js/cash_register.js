

var memory = [];
var operator =[];
var display;
console.log(memory);

var button7 = document.querySelector("#seven");
//push to memory
button7.addEventListener("click", function(){
  memory.push(7);
  document.getElementById("display").innerHTML="7";
});

var button8 = document.querySelector("#eight");
//push to memory
button8.addEventListener("click", function(){
  memory.push(8);
  document.getElementById("display").innerHTML="8";
  console.log(memory)
});

var buttonDivide = document.querySelector("#divide");
buttonDivide.addEventListener("click", function(){
  operator = "/";
  document.getElementById("display").innerHTML = "/";
  console.log(operator);
});

var buttonEquals = document.querySelector("#equals");
  buttonEquals.addEventListener("click", function(){
    if (operator === "/"){
      var total = memory[0]/memory[1];
      console.log(total);
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
