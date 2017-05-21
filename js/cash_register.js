

var memory = [];
var operator = "divide";
var display;
console.log(memory);

var button7 = document.querySelector("#seven");
//push to memory
button7.addEventListener("click", function(){
  memory.push(7);
  document.getElementById("display").innerHTML="7";
});

//udpdate display
console.log(memory);













// var button = document.querySelector("divide");
// button.addEventListener ("click", function(){
//     if(typeof num === "number"){
//     total /= num;
//     }
//     else{
//       throw new Error("not a number");
//     }
//   });
