$(document).ready(function() 
{  

  let power = false; //false=off,true=on
  let start = false;
  let strict = false;
  let myTurn = false; //false=computer turn, true = accepting user inputs
  let currentPattern = [];
  let userInput = [];
  let howManyPressed = 0;
  let round = 1;
  let startNewGame = true;
  // const sound1 = `../sounds/simonSound1.mp3`;
  
  //----------------------------------------
  //GAME STATE BUTTONS
  $("#on-off").click(function(){
    if(power===false){
      $("#on-off").css("color","red");
      $("#display").css("color","red");
      $("#display").html("0");
      power = true;
      start = false;
      strict = false;
      myTurn = false;
      startNewGame = true;
    }
    else if(power===true){
      $("#on-off").css("color","grey"); 
      $("#start").css("color","black"); 
      $("#strict").css("color","black"); 
      $("#display").css("color","black"); 
      power = false;
      start = false;
      strict = false;
      myTurn = false;
    }
  console.log("pressed on-off..." + " power = " + power);
  });
  
  $("#start").click(function(){
    if(power===true && start===false){
      console.log("pressed start..." + " start = " + start);
      $("#start").css("color","red"); 
      start = true;
      startNewGame = true;
      round = 1;
      playGame();
    }
  });
  
  $("#strict").click(function(){
    if(power===true){
      if(strict===false){$("#strict").css("color","red"); strict = true;}
      else if(strict===true){$("#strict").css("color","black"); strict = false;}
      console.log("pressed strict..." + " strict = " + strict);
    }
  });
  //----------------------------------------
  //SOUND GENERATOR FUNCTION
  function playSound(val) {
    let audioElement;
    switch(val) {
    case "blue":
      audioElement = document.querySelector('#sound1');
      break;
    case "red":
      audioElement = document.querySelector('#sound2');
      break;
    case "green":
      audioElement = document.querySelector('#sound3');;
      break;
    case "yellow":
      audioElement = document.querySelector('#sound4');
      break;
    default:
      alert("Something Went Wrong!");
  }
  audioElement.pause();
  audioElement.currentTime = 0;
  audioElement.play();
  }

//---------------------------------
//COLOR BUTTONS
  $("#btn-blue").click(function(){
    if(power===true && start ===true && myTurn===true){
      press(0);
      userInput.push(0);
      howManyPressed++;
      console.log("user input: " + userInput);
    }
  });
  
  $("#btn-red").click(function(){
    if(power===true && start ===true && myTurn===true){
      press(1);
      userInput.push(1);
      howManyPressed++;
      console.log("user input: " + userInput);
    }
  });
  
  $("#btn-green").click(function(){
    if(power===true && start ===true && myTurn===true){
      press(2);
      userInput.push(2);
      howManyPressed++;
      console.log("user input: " + userInput);
    }
  });
  
  $("#btn-yellow").click(function(){
    if(power===true && start ===true && myTurn===true){
      press(3);
      userInput.push(3);
      howManyPressed++;
      console.log("user input: " + userInput);
    }
  });

//---------------------------------
//GENERAL FUNCTIONS

  //called whenever game is turned on, whenever user wins game, or when user errors while strict is true
  function reset(){
    var start = false;
    var strict = false;
    var myTurn = false;
    var currentPattern = [];
  }

  // play sound, light up button, nothing else
  function press(colorNum){
    if(colorNum===0){
      setTimeout(function(){ 
      playSound("blue"); 
      $("#btn-blue").css("background-color","#4da6ff");
      setTimeout(function(){$("#btn-blue").css("background-color","#108fe8");
      },400); 
      //console.log("pressed blue");
      },400); 
    }
    else if(colorNum===1){
      playSound("red");
      $("#btn-red").css("background-color","#ff8080");
      setTimeout(function(){$("#btn-red").css("background-color","#e53030");
       },400); 
      //console.log("pressed red");
    }
    else if(colorNum===2){
      playSound("green");
      $("#btn-green").css("background-color","#80ff80");
      setTimeout(function(){$("#btn-green").css("background-color","#0ec518");
      },400); 
      //console.log("pressed green");
    }
    else if(colorNum===3){
      playSound("yellow");
      $("#btn-yellow").css("background-color","#ffe680");
      setTimeout(function(){$("#btn-yellow").css("background-color","#ffc334");
      },400); 
      //console.log("pressed yellow");
    }   
  }
  
  function generatePattern(){
    currentPattern = [];
    for(var j=0;j<20;j++){
      var rand = Math.floor(Math.random()*4);
      currentPattern.push(rand);
    }
    console.log("The pattern is: " + currentPattern)
  }

  function playPattern(length){
    //console.log("Playing pattern...")
    myTurn = false;
    var i = 0;
    var playing = setInterval(function(){
      if(power===true){
        if(i<length){
          press(currentPattern[i]);
          i++;
        }
        else{
          myTurn = true; 
          clearInterval(playing);
        }
      }
    },700); 
  }

  function playGame(){
    if(power===true){
      if(startNewGame===true){
      generatePattern(); 
      }
      setTimeout(function(){
        $("#display").html(round); 
        playPattern(round); 
      },1500);
    //continuously check if user input is correct
    let checking = setInterval(function(){ 
      if(howManyPressed>0 && power === true){
        //should always evaluates true when nothing has been clicked
        if(userInput[howManyPressed - 1] === currentPattern[howManyPressed - 1]){
          //if this is true move on to the next round
          if(userInput.length === round){
            round++;
            console.log("on to the next round...")
            $("#display").html(round);
            howManyPressed = 0;
            userInput = [];
            myTurn = false;
            clearInterval(checking);
            startNewGame=false;
            if(round===21){
              round = 1;
              startNewGame = true;
              $("#display").html("W");
              $("#display").css("background-color","#196619");
              setTimeout(function(){
                $("#display").css("background-color","#000000");
                playGame(); 
              },5000);
            }
            else{
              playGame();
            }
          }
        }
        //wrong button has been pressed at this point, if strict mode is true exit for loop entirely
        else if(strict === true){
          $("#display").css("background-color","#800000");
          round = 1;
          setTimeout(function(){
            $("#display").css("background-color","#000000");
            $("#display").html(round);
          },1000);
          howManyPressed = 0;
          userInput = [];
          myTurn = false;
          startNewGame=true;
          clearInterval(checking);
          playGame();
        }
        else{
          $("#display").css("background-color","#800000");
          setTimeout(function(){
            $("#display").css("background-color","#000000");
          },400);
          howManyPressed = 0;
          userInput = [];
          myTurn = false;
          startNewGame = false;
          clearInterval(checking);
          playGame();
        }
      }
    }
    ,100); 
    }
  }
});