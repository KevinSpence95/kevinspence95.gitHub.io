$(document).ready(function() 
{
//------------------------------------------------ 
  //GLOBAL VARIABLES
  var breakLength = 5;
  var sessionLength = 25;
  var start = 0; //toggled by #startStop
  var breakORsession = true;//true=session, false=break 
  var resetting = false;
  var minutes;
  var seconds;
  var sound1 = '../sounds/simonSound1.mp3';
  main();
  
//-----------------------------------------------  
  //BUTTONS
  $("#BRKminus").click(function(){
    if(start===0){
    breakLength--;
    if(breakLength===0){breakLength = 1;}
    $("#BRKlength").html(breakLength);
    }
  });
    $("#BRKplus").click(function(){
    if(start===0){
    breakLength++;
    if(breakLength===61){breakLength = 60;}
    $("#BRKlength").html(breakLength);
    }
  });
  $("#SESSminus").click(function(){
    if(start===0){
    sessionLength--;
    if(sessionLength===0){sessionLength = 1;}
    $("#SESSlength").html(sessionLength);
    }
  });
  $("#SESSplus").click(function(){
    if(start===0){
    sessionLength++;
    if(sessionLength===61){sessionLength = 60;}
    $("#SESSlength").html(sessionLength);
    }
  });
  
  $("#startStop").click(function(){
    //running = true; //never changes
    if(start === 0){
      console.log("stop")
      $("#startStop").html("STOP");
      start = 1;  
    }
    else{
      console.log("start")
      $("#startStop").html("START");
      start = 0;  
    }

  });
  
  //-------------------------------------------
  //FUNCTIONS
  
  function playSound(val) {
    var audioElement = document.createElement('audio');           
    audioElement.setAttribute('autoplay', 'autoplay');
    switch(val) {
    case "blue":
      audioElement.setAttribute('src', sound1);
      break;
    default:
      alert("Something Went Wrong!");
  }
  audioElement.pause();
  audioElement.currentTime = 0;
  audioElement.play();
}
  
  function main(){
    if(breakORsession===true){
      $("#clock").html(sessionLength + ":00"); 
      $("#breakORsession").html("SESSION");
      minutes = sessionLength-1; seconds = 60;
      var origSESSminutes = sessionLength;
    }
    else{
      $("#clock").html(minutes+":00");
      $("#breakORsession").html("BREAK");
      minutes = breakLength-1; seconds = 60;
      var origBRKminutes = breakLength;
    }
    
    var counting = setInterval(function(){
      /*
      if(resetting===true)// if clock is stopped and reset is pressed, a new countdown of length sessionLength will begin
      {
        clearInterval(counting); 
        resetting = false; 
        breakORsession = true; 
        $("#startStop").html("STOP");
        start = 1;  
        main();
      } 
      */
      if(start===0) //continues to display same time when stopped
        {
          if(seconds===60){$("#clock").html((minutes+1)+":00");}
          else if(seconds>9){$("#clock").html(minutes+":"+seconds);}
          else{$("#clock").html(minutes+":0"+seconds);}
          
          if(breakORsession===true && sessionLength !== origSESSminutes){clearInterval(counting); main();}
          if(breakORsession===false && breakLength !== origBRKminutes){clearInterval(counting); main();}
        }
      else // update clock every seconds
        {
          if(seconds===60){$("#clock").html((minutes+1)+":00");}
          else if(seconds>9){$("#clock").html(minutes+":"+seconds);}
          else{$("#clock").html(minutes+":0"+seconds);}
          seconds--;
          if(seconds===-1 && minutes !== 0)
            {
              minutes--;
              seconds=59;
            }
          if(minutes===0 && seconds===0)
          {
            setTimeout(function(){playSound("blue"); setTimeout(function(){playSound("blue");},400); },400);
            playSound("blue");
            breakORsession=!breakORsession;
            clearInterval(counting);
            main();
          }
        }

    },1000);
  }
  
  
  
 /*
 function countDown(minutes){
    var seconds = 60
    minutes--;
    var counting = setInterval(function(){

      seconds--;
      if(seconds>9){$("#clock").html(minutes + ":" + seconds);}
      else{$("#clock").html(minutes + ":0" + seconds);}
      if(seconds===0){
        minutes--;
        if(minutes>0){countDown(minutes)}
        else{
          if(seconds>9){$("#clock").html("00:" + seconds);}
          else{$("#clock").html("00:0" + seconds);}
          if(seconds===0)
            {
          breakORsession = !breakORsession;
          if(breakORsession === true){countDown(sessionLength); $("#breakORsession").html("SESSION")}
          else{countDown(breakLength); $("#breakORsession").html("BREAK")}
            }
        }
        clearInterval(counting);
      }
    },1000);
  }
 */
  
  
  
//------------------------------------------------  
});