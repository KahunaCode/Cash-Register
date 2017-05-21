
console.log("calculator.js");

var calculatorModule = function(){

  var memory = 0;
  var total = 0;

  function load(num){
    if(typeof num === "number"){

    total = num;
    return total;
  }
  else{
    throw new Error("not a number");
  }
  }

  function getTotal(){
    return total;
   }

  function add(num){
    if(typeof num === "number"){
    total += num;
  }else
  {
    throw new Error("not a number");
  }

  }

  function subtract(num){
    if(typeof num === "number"){
      total -= num;
  }
  else
    {throw new Error("not a number");}
}

  function multiply(num){
    if(typeof num === "number"){
    total *= num;
    }
    else{
      throw new Error("not a number");
    }
  }

  function divide(num){
    if(typeof num === "number"){
    total /= num;
    }
    else{
      throw new Error("not a number");
    }
  }

  function recallMemory(){
    return memory;
  }

  function saveMemory(){
    memory = total;
    return memory;
  }

  function clearMemory(){
    memory = 0;
    return memory;
  }



   return {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory
   };
};