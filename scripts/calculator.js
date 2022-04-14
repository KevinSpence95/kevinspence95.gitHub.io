//additional functionality to implement: minimize input length, cant press 0 first, add +/- button, if equals is pressed after inputing a number just display that number

$(document).ready(function() 
{
  let answer = 0;
  let entriesSoFar = []; 
  let currentDisplay = "";
  //----------------------------
  function convertToNumber(str)
  {
    if(str.indexOf(".") === -1)
      {
       return parseInt(str);
      }
    else
      {
       return parseFloat(str);
      }
  }
  //---------------------------------------------------------------------
  function getEquationArray()
  {
    let index = 0;
    let currentNumber = "";
    let equationArray = [];
   
    while(index<entriesSoFar.length) //get first number entered
      {
        if(entriesSoFar[index] != "x" && entriesSoFar[index] != "÷"  && entriesSoFar[index] != "+"  && entriesSoFar[index] != "-" )
          {
            currentNumber = currentNumber.concat(entriesSoFar[index]);
          }
        else
          {
            equationArray.push(convertToNumber(currentNumber));
            currentNumber = "";
            equationArray.push(entriesSoFar[index]);
          }
        if(index === entriesSoFar.length -1){ equationArray.push(convertToNumber(currentNumber))}
          index++;
      }
    console.log(equationArray);
    return equationArray;
  }
  //---------------------------------------------------------------------  
  function clear(){ //use only when clear is pressed
    answer = 0;
    entriesSoFar = [];
    currentDisplay = "";
    $("#display").html(answer);
  }
 //---------------------------------------------------------------------
  function displayAnswer(){ //use only when = is pressed
    let eqArr = getEquationArray();
    while(eqArr.length != 1)
      {
      switch(eqArr[1])
      {
      case "x":
      answer = eqArr[0]*eqArr[2];
      break;
      case "÷":
      answer = eqArr[0]/eqArr[2];
           break;
      case "+":
      answer = eqArr[0]+eqArr[2];
           break;
      case "-":
      answer = eqArr[0]-eqArr[2]; 
           break;
      }
      eqArr.splice(0,3,answer);
      console.log(eqArr);
      }
    $("#display").html(Math.round(answer * 100000) / 100000);
    entriesSoFar = [answer]; //need to address case where addition symbols and number can be pressed
  }
  //---------------------------------------------------------------------
  function displaySymbol(sym){ // use when x ÷ + or - is pressed
    
    if(entriesSoFar.length != 0) 
    {
      if(entriesSoFar[entriesSoFar.length-1] != "." && entriesSoFar[entriesSoFar.length-1] != "x" && entriesSoFar[entriesSoFar.length-1] != "+" && entriesSoFar[entriesSoFar.length-1] != "-" && entriesSoFar[entriesSoFar.length-1] != "÷")
        {
      currentDisplay = "";
    if(sym==="x")
      {
        $("#display").html("x");
        entriesSoFar.push("x");
      }
    else if(sym==="÷")
      {
        $("#display").html("÷");
        entriesSoFar.push("÷");
      }
    else if(sym==="+")
      {
        $("#display").html("+");
        entriesSoFar.push("+");
      }
    else if(sym==="-")
      {
        $("#display").html("-");
        entriesSoFar.push("-");
      }
        }
    }
  }
  //---------------------------------------------------------------------
  function displayNextChar(char){//use when any number or . is pressed
    let possibleChars = ["1","2","3","4","5","6","7","8","9","0","."]; 
    if(possibleChars.indexOf(char) != -1)
      {
        if(char==="." && currentDisplay.indexOf(".") === -1)
        {
          currentDisplay = currentDisplay.concat(char)
          entriesSoFar.push(".");
        } 
        else if(char==="." && currentDisplay.indexOf(".") != -1){}
        else
          {
            currentDisplay = currentDisplay.concat(char)
            entriesSoFar.push(char);
          }
      }
    $("#display").html(currentDisplay);
  }
  //---------------------------------------------------------------------

  $("#clear").click(function(){
  clear();
  });
  $("#num1").click(function(){
  displayNextChar("1");
  });
   $("#num2").click(function(){
  displayNextChar("2");
  });
   $("#num3").click(function(){
  displayNextChar("3");
  });
   $("#num4").click(function(){
  displayNextChar("4");
  });
   $("#num5").click(function(){
  displayNextChar("5");
  });
   $("#num6").click(function(){
  displayNextChar("6");
  });
   $("#num7").click(function(){
  displayNextChar("7");
  });
   $("#num8").click(function(){
  displayNextChar("8");
  });
   $("#num9").click(function(){
  displayNextChar("9");
  });
   $("#num0").click(function(){
  displayNextChar("0");
  });
   $("#point").click(function(){
  displayNextChar(".");
  });
  $("#mult").click(function(){
  displaySymbol("x");
  });
  $("#div").click(function(){
  displaySymbol("÷");
  });
  $("#add").click(function(){
  displaySymbol("+");
  });
  $("#sub").click(function(){
  displaySymbol("-");
  });
  $("#enter").click(function(){
  displayAnswer();
  });
});