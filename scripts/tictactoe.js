$(document).ready(function() 
{ 
  let myTurn = true
  let whoWonLastGame = 1
  let gameType = 2
  let player1marker = "X"
  let player2marker = "O"
  let p1score = 0
  let p2score = 0
  let TLC = "",TE = "",TRC = "",LE = "",C = "",RE = "",BLC = "",BE = "",BRC = ""
  let computerTurnNum = 1
  let firstP1move
  
  hide("board")
  hide("bottom")
  setScoreColors()
  displayTurn()
  
//----------------------------- Click Functions

$("#TLC").click(function() {
  if(TLC==="") {

    if(gameType===2) {
      if(myTurn) {
        mark(player1marker,"#TLC") 
        TLC = player1marker
      }
      else {
        mark(player2marker,"#TLC")
        TLC = player2marker
      }
      myTurn = !myTurn
    }
    else if(gameType===1) {
      if(myTurn) {
        mark(player1marker,"#TLC")
        TLC = player1marker
        if(computerTurnNum===5) {
          reset()
          return
        }
        myTurn = !myTurn
        displayTurn()
        setTimeout(function() { 
        computerTurn()
        myTurn = !myTurn
        },1500) 
        displayTurn()
      }
    }
  }
  checkWin()
  displayTurn()
})

$("#TE").click(function() {
  if(TE==="") {
    if(gameType===2) {
      if(myTurn) {
        mark(player1marker,"#TE") 
        TE = player1marker
      }
      else {
        mark(player2marker,"#TE")
        TE = player2marker
      }
      myTurn = !myTurn
    }
    else if(gameType===1) {
      if(myTurn) {
        mark(player1marker,"#TE")
        TE = player1marker
        if(computerTurnNum===5) {
          reset()
          return
        }
        myTurn = !myTurn
        displayTurn()
        setTimeout(function() { 
        computerTurn()
        myTurn = !myTurn
        },1500) 
        displayTurn()
      }
    }
  }
  checkWin()
  displayTurn()
})
  
$("#TRC").click(function() {
  if(TRC==="") {
    if(gameType===2) {
      if(myTurn){
        mark(player1marker,"#TRC") 
        TRC = player1marker
      }
      else {
        mark(player2marker,"#TRC")
        TRC = player2marker
      }
      myTurn = !myTurn
    }
    else if(gameType===1) {
      if(myTurn) {
        mark(player1marker,"#TRC") 
        TRC = player1marker
        if(computerTurnNum===5) {
          reset()
          return
        }
        myTurn = !myTurn
        displayTurn()
        setTimeout(function() { 
        computerTurn()
        myTurn = !myTurn
        },1500) 
        displayTurn()
      }
    }
  }
  checkWin()
  displayTurn()
})
  
$("#LE").click(function() {
  if(LE==="") {
    if(gameType===2) {
      if(myTurn){
        mark(player1marker,"#LE") 
        LE = player1marker
      }
      else {
        mark(player2marker,"#LE")
        LE = player2marker
      }
      myTurn = !myTurn
    }
    else if(gameType===1) {
      if(myTurn) {
        mark(player1marker,"#LE")
        LE = player1marker
        if(computerTurnNum===5) {
          reset()
          return
        }
        myTurn = !myTurn
        displayTurn()
        setTimeout(function() {
        computerTurn()
        myTurn = !myTurn
        },1500) 
        displayTurn()
      }
    }
  }
  checkWin()
  displayTurn()
})
  
$("#C").click(function() {
  if(C==="") {
    if(gameType===2) {
      if(myTurn) {
        mark(player1marker,"#C") 
        C = player1marker
      }
      else {
        mark(player2marker,"#C")
        C = player2marker
      }
      myTurn = !myTurn
    }
    else if(gameType===1) {
      if(myTurn) {
        mark(player1marker,"#C") 
        C = player1marker
        if(computerTurnNum===5) {
          reset()
          return
        }
        myTurn = !myTurn
        displayTurn()
        setTimeout(function() { 
        computerTurn()
        myTurn = !myTurn
        },1500)
        displayTurn()
      }
    }
  }
  checkWin()
  displayTurn()
})
  
$("#RE").click(function() {
  if(RE==="") {
    if(gameType===2) {
      if(myTurn) {
        mark(player1marker,"#RE")
        RE = player1marker
      }
      else {
        mark(player2marker,"#RE")
        RE = player2marker
      }
      myTurn = !myTurn
    }
    else if(gameType===1) {
      if(myTurn) {
        mark(player1marker,"#RE") 
        RE = player1marker
        if(computerTurnNum===5) {
          reset()
          return
        }
        myTurn = !myTurn
        displayTurn()
        setTimeout(function() { 
        computerTurn()
        myTurn = !myTurn
        },1500) 
        displayTurn()
      }
    }
  }
  checkWin()
  displayTurn()
})
  
$("#BLC").click(function() {
  if(BLC==="") {
    if(gameType===2) {
      if(myTurn) {
        mark(player1marker,"#BLC") 
        BLC = player1marker
      }
      else {
        mark(player2marker,"#BLC")
        BLC = player2marker
      }
      myTurn = !myTurn
    }
    else if(gameType===1) {
      if(myTurn) {
        mark(player1marker,"#BLC") 
        BLC = player1marker
        if(computerTurnNum===5) {
          reset()
          return
        }
        myTurn = !myTurn
        displayTurn()
        setTimeout(function() { 
        computerTurn()
        myTurn = !myTurn
        },1500)
        displayTurn()
      }
    }  
  }
  checkWin()
  displayTurn()
})
  
$("#BE").click(function() {
  if(BE==="") {
    if(gameType===2){
      if(myTurn){
        mark(player1marker,"#BE")
        BE = player1marker;
      }
      else {
        mark(player2marker,"#BE")
        BE = player2marker
      }
      myTurn = !myTurn
    }
    else if(gameType===1) {
      if(myTurn) {
        mark(player1marker,"#BE") 
        BE = player1marker
        if(computerTurnNum===5){
          reset()
          return
        }
        myTurn = !myTurn
        displayTurn()
        setTimeout(function() { 
        computerTurn()
        myTurn = !myTurn
        },1500) 
        displayTurn()
      }
    }
  }
  checkWin()
  displayTurn()
})
  
$("#BRC").click(function() {
  if(BRC==="") {
    if(gameType===2){
      if(myTurn){
        mark(player1marker,"#BRC")
        BRC = player1marker
      }
      else {
        mark(player2marker,"#BRC")
        BRC = player2marker
      }
      myTurn = !myTurn
    }
    else if(gameType===1) {
      if(myTurn) {
        mark(player1marker,"#BRC");
        BRC = player1marker
        if(computerTurnNum===5){
          reset()
          return
        }
        myTurn = !myTurn
        displayTurn()
        setTimeout(function() {
        computerTurn()
        myTurn = !myTurn
        },1500)
        displayTurn()
      }
    }
  }
  checkWin()
  displayTurn()
})

$("#gameTypeSelector").click(function() {
  if(gameType===1) {
    gameType = 2
    $("#gameTypeSelector").html("Two Player")
  }
  else {
    gameType = 1
    $("#gameTypeSelector").html("One Player")
  }
  console.log("GameType: "+ gameType)
}) 
 
$("#XOselector").click(function() {
  if(player1marker === "X") {
    player1marker = "O"
    player2marker = "X"
    $("#XOselector").html("Player 1: O");
    $("#XOselector").css("background-color","blue") 
    $("#player1Score").css("color","blue") 
    $("#player2Score").css("color","red") 
  }
  else {
    player1marker = "X"
    player2marker = "O"
    $("#XOselector").html("Player 1: X")
    $("#XOselector").css("background-color","red")
    $("#player1Score").css("color","red")
    $("#player2Score").css("color","blue") 
  }
  console.log("Player 1: "+ player1marker)
  console.log("Player 2: "+ player2marker)
});

$("#start").click(function() {
  hide("menuDIV")
  unhide("board")
  unhide("bottom")
  myTurn = true
  displayTurn()
  if(gameType === 1) {
    $("#player1Score").html("")
    $("#player2Score").html("") 
    $("#turnIndicator").html("You Can Never Win HAHA!")
  }
})

$("#reset").click(function() {
  hide("bottom")
  hide("board")
  unhide("menuDIV")
  p1score = 0
  p2score = 0
  reset()
  displayScore()
  myTurn = true
  displayTurn() 
})

//----------------------------------- Other Functions

function mark(xORo,space) {
  if(xORo === "X") {
    $(space).html("X")
    $(space).css("background-color","red")
    $(space).css("color","black")
  }
  if(xORo === "O") {
    $(space).html("O")
    $(space).css("background-color","blue")
    $(space).css("color","black")
  }
}

function hide(str) {
  let x = document.getElementById(str)
  x.style.display = 'none'
}

function unhide(str) {
  let x = document.getElementById(str)
  x.style.display = 'block'
}

function reset() {
  TLC = "";TE = "";TRC = "";LE = "";C = "";RE = "";BLC = "";BE = "";BRC = ""
  $("#TLC").css("background-color","white")
  $("#TLC").css("color","white")
  $("#TLC").html("E")
  $("#TE").css("background-color","white")
  $("#TE").css("color","white")
  $("#TE").html("E")
  $("#TRC").css("background-color","white")
  $("#TRC").css("color","white")
  $("#TRC").html("E")
  $("#LE").css("background-color","white")
  $("#LE").css("color","white")
  $("#LE").html("E")
  $("#C").css("background-color","white")
  $("#C").css("color","white")
  $("#C").html("E")
  $("#RE").css("background-color","white")
  $("#RE").css("color","white")
  $("#RE").html("E")
  $("#BLC").css("background-color","white")
  $("#BLC").css("color","white")
  $("#BLC").html("E")
  $("#BE").css("background-color","white")
  $("#BE").css("color","white")
  $("#BE").html("E")
  $("#BRC").css("background-color","white")
  $("#BRC").css("color","white")
  $("#BRC").html("E")
  firstP1move = ""
  displayTurn()
  if(gameType===1) {
      myTurn = true
      computerTurnNum = 1
  }
}
 
//---------------------------------------  

function checkWin() {

  let spaces = [TLC,TE,TRC,LE,C,RE,BLC,BE,BRC]
  let Xtaken = []
  let Otaken = []

  for(let i=0;i<spaces.length;i++) {
    if(spaces[i] === "X") {Xtaken.push(i)}
    else if(spaces[i]=== "O") {Otaken.push(i)}
  }
    
  let winningCases = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

  for(let j=0;j<winningCases.length;j++) {
    if(Xtaken.indexOf(winningCases[j][0]) !== -1  && Xtaken.indexOf(winningCases[j][1]) !== -1 && Xtaken.indexOf(winningCases[j][2]) !== -1) {
      console.log("X WINS")
      if(player1marker === "X") {
        p1score++
        displayScore()
        reset()
        whoWonLastGame = 1
        if(gameType===2) {myTurn = false}
        if(gameType===1) {computerTurnNum = 1}
      }
      else {
        p2score++
        displayScore()
        reset()
        whoWonLastGame = 2
        if(gameType===2) {myTurn = true}
        if(gameType===1) {computerTurnNum = 1}
      }
    }
    else if(Otaken.indexOf(winningCases[j][0]) !== -1  && Otaken.indexOf(winningCases[j][1]) !== -1 && Otaken.indexOf(winningCases[j][2]) !== -1) {
      console.log("O WINS")
      if(player1marker === "O") {
        p1score++
        displayScore()
        reset()
        whoWonLastGame = 1
        if(gameType===2) {myTurn = false}
        if(gameType===1) {computerTurnNum = 1}
      }
      else {
        p2score++
        displayScore()
        reset()
        whoWonLastGame = 2;
        if(gameType===2) {myTurn = true}
        if(gameType===1) {computerTurnNum = 1}
      }
    }
  }
  if(Xtaken.length + Otaken.length === 9) {
    console.log("TIE GAME")
    reset()
    whoWonLastGame=0
    if(gameType===1){computerTurnNum = 1}
  }  
}

//------------------------------ 

function displayScore() {
  if(gameType===2) {
    if(myTurn) {
      $("#player1Score").html("PLAYER 1 : " + p1score)
      $("#player2Score").html("PLAYER 2 : " + p2score)
    }
    else {
      $("#player1Score").html("PLAYER 1 : " + p1score)
      $("#player2Score").html("PLAYER 2 : " + p2score)
    }
  }
}

//------------------------------ 

function setScoreColors() {
  if(player1marker === "X") {
    $("#player1Score").css("color","red");
    $("#player2Score").css("color","blue");
  }
  else {
    $("#player1Score").css("color","blue");
    $("#player2Score").css("color","red"); 
  }
}

//------------------------------ 

function displayTurn() {
  if(myTurn) {
    $("#turnIndicator").html("Turn : P1");
    if(gameType===1) {$("#turnIndicator").html("You Can Never Win HAHA!")}
  }
  else {
    $("#turnIndicator").html("Turn : P2");
    if(gameType===1) {$("#turnIndicator").html("You Can Never Win HAHA!")}
  }
}
  
//------------------------------

function computerTurn() {
  displayTurn()
  whatFirstMoveP1()  //"center","corner","edge"
  console.log(firstP1move)
  console.log(computerTurnNum)
  if(firstP1move==="center") {
    console.log("entered center loop")
    switch(computerTurnNum) {
      case 1:
        chooseAnyCorner()
        break
      case 2:
        if(canP1Win()) {block()}
        else {chooseAdjacentCorner()}
        break
      case 3: 
        if(canWeWin()) {
          playWinner();
          setTimeout(function() {reset()},1000)
        }
        else if(canP1Win()) {block()}
        else {special()}
        break
      case 4:
        if(canWeWin()) {
          playWinner()
          setTimeout(function() {reset()},1000)
        }
        else if(canP1Win()) {block()}
        else {chooseRandom()}
        break
    }
    computerTurnNum++
  }
  if(firstP1move==="corner") {
    switch(computerTurnNum) {
      case 1:
        chooseCenter();
        break
      case 2:
        if(canP1Win()) {block()}
        else if(checkP1SameOppositeCorners()) {chooseAnyEdge()}
        else {chooseOppositeCornerFromP1()}
        break
      case 3: 
        if(canWeWin()) {
          playWinner()
          setTimeout(function(){reset()},1000)
        }
        else if(canP1Win()) {block()}
        else {chooseAnyCorner()}
        break
      case 4:
        if(canWeWin()) {
          playWinner()
          setTimeout(function(){reset()},1000)
        }
        else if(canP1Win()) {block()}
        else {chooseRandom()}
        break
    }
    computerTurnNum++
  }
  if(firstP1move==="edge") {
    switch(computerTurnNum) {
      case 1:
        chooseAnyCorner()
        break
      case 2:
        if(canP1Win()) {block()}
        else {chooseAdjacentCorner()}
        break;
      case 3: 
        if(canWeWin()){
          playWinner()
          setTimeout(function() {reset()},1000)
        }
        else if(canP1Win()) {block()}
        else if(isCenterFree()) {chooseCenter()}
        else {chooseRandom()}
        break
      case 4:
        if(canWeWin()) {
          playWinner()
          setTimeout(function() {reset()},1000)
        }
        else if(canP1Win()) {block()}
        else {chooseRandom()}
        break
    }
    computerTurnNum++
  }
}

//--------------------------------- 

function computerMark(space) {
  if(space===0) {space = "#TLC"}
  if(space===1) {space = "#TE"}
  if(space===2) {space = "#TRC"}
  if(space===3) {space = "#LE"}
  if(space===4) {space = "#C"}
  if(space===5) {space = "#RE"}
  if(space===6) {space = "#BLC"}
  if(space===7) {space = "#BE"} 
  if(space===8) {space = "#BRC"}
   
  if(player2marker === "X") {
    $(space).html("X")
    $(space).css("background-color","red")
    $(space).css("color","black")
  }
  if(player2marker === "O") {
    $(space).html("O")
    $(space).css("background-color","blue")
    $(space).css("color","black")
  }
  switch(space) {
    case "#TLC":
        TLC = player2marker
        break
    case "#TE":
        TE = player2marker
        break
    case "#TRC":
        TRC = player2marker
        break
    case "#LE":
        LE = player2marker
        break
    case "#C":
        C = player2marker
        break
    case "#RE":
        RE = player2marker
        break
    case "#BLC":
        BLC = player2marker
        break
    case "#BE":
        BE = player2marker
        break
    case "#BRC":
        BRC = player2marker
        break  
  }
}

//------------------------------   

function getBoardState() {
  let spaces = [TLC,TE,TRC,LE,C,RE,BLC,BE,BRC]
  let P1taken = []
  let P2taken = []
  let notTaken = []
  for(let i=0;i<spaces.length;i++) {
    if(spaces[i] === player1marker) {P1taken.push(i)}
    else if(spaces[i] === player2marker) {P2taken.push(i)}
    else {notTaken.push(i)}
  }
  let boardState = [P1taken,P2taken,notTaken]
  return boardState
}

//------------------------------  

function whatFirstMoveP1() {
  let state = getBoardState()
  if(state[0].length===1) {
    if(state[0][0] === 4) {
      firstP1move = "center"
      return firstP1move
    }
    else if(state[0][0] === 0 || state[0][0] === 2 || state[0][0] === 6 || state[0][0] === 8) {
      firstP1move = "corner"
      return firstP1move
    }
    else if(state[0][0] === 1|| state[0][0] === 3 || state[0][0] === 5|| state[0][0] === 7) {
      firstP1move = "edge"
      return firstP1move
    }
  }
}

//------------------------------  
 
function isOpen(num) {
  let state = getBoardState()
  if(state[2].indexOf(num)===-1) {return false}
  else {return true}
}
  
//------------------------------  

function chooseAnyCorner() { 
  let corners = [0,2,6,8]
  let availableCorners = []
  for(let i = 0;i<corners.length;i++) {
    if(isOpen(corners[i])) {availableCorners.push(corners[i])}
  }
  let randomNum = Math.floor((Math.random() * availableCorners.length))
  computerMark(availableCorners[randomNum]) 
}

//------------------------------  

function chooseCenter() {
    if(isOpen(4)) {computerMark(4)}
}

//------------------------------  

function chooseAnyEdge() { 
  let edges = [1,3,5,7]
  let availableEdges = []
  for(let i = 0;i<edges.length;i++) {
    if(isOpen(edges[i])) {availableEdges.push(edges[i])}
  }
  let randomNum = Math.floor((Math.random() * availableEdges.length))
  computerMark(availableEdges[randomNum]) 
} 

//------------------------------  

function chooseAdjacentCorner() {
  if(TLC === player2marker) {
    if(isOpen(2)) {computerMark(2)}
    else if(isOpen(6)) {computerMark(6)}
  }
  else if(TRC === player2marker) {
    if(isOpen(0)) {computerMark(0)}
    else if(isOpen(8)) {computerMark(8)}
  }
  else if(BLC=== player2marker) {
    if(isOpen(8)) {computerMark(8)}
    else if(isOpen(0)) {computerMark(0)}
  }
  else if(BRC === player2marker) {
    if(isOpen(6)) {computerMark(6)}
    else if(isOpen(2)) {computerMark(2)}
  }
}
//------------------------------  
// find row or column with a p2 mark in a corner and two empty spaces, then mark adjacent corner
function special() {
  if(TLC === player2marker && TE === "" && TRC === "") {
    computerMark(2)
  }
  else if(TRC === player2marker && TE === "" && TLC === "") {
    computerMark(0)
  }
  else if(TRC === player2marker && RE === "" && BRC === "") {
    computerMark(8)
  }
  else if(BRC === player2marker && RE === "" && TRC === "") {
    computerMark(2)
  }
  else if(BRC === player2marker && BE === "" && BLC === "") {
    computerMark(6)
  }
  else if(BLC === player2marker && BE === "" && BRC === "") {
    computerMark(8)
  }
  else if(BLC === player2marker && LE === "" && TLC === "") {
    computerMark(0)
  }
  else if(TLC === player2marker && LE === "" && BLC === "") {
    computerMark(6)
  }
}

//------------------------------   

function chooseRandom() {   
  let available = []
  for(let i = 0;i<9;i++) {
    if(isOpen(i)) {available.push(i)}
  }
  console.log("available = " + available)
  let randomNum = Math.floor((Math.random() * available.length))
  console.log(randomNum);
  computerMark(available[randomNum])  
}

//------------------------------  

function chooseOppositeCornerFromP1() {
  if(TLC === player1marker && BRC === "") {
    computerMark(8)
  }
  else if(TRC === player1marker && BLC === "") {
    computerMark(6)
  }
  else if(BRC === player1marker && TLC === "") {
    computerMark(0)
  }
  else if(BLC === player1marker && TRC === "") {
    computerMark(2)
  }
}

//------------------------------  

function canP1Win() {
  if(TLC === player1marker && LE === player1marker && BLC === "") {return true}
  if(TLC === player1marker && LE === "" && BLC === player1marker) {return true}
  if(TLC === "" && LE === player1marker && BLC === player1marker) {return true}
    
  if(BLC === player1marker && BE === player1marker && BRC === "") {return true}
  if(BLC === player1marker && BE === "" && BRC === player1marker) {return true}
  if(BLC === "" && BE=== player1marker && BRC === player1marker) {return true}
    
  if(TRC === player1marker && RE === player1marker && BRC === "") {return true} 
  if(TRC === player1marker && RE === "" && BRC === player1marker) {return true}
  if(TRC === "" && RE=== player1marker && BRC === player1marker) {return true}
    
  if(TLC === player1marker && TE === player1marker && TRC === "") {return true}
  if(TLC === player1marker && TE === "" && TRC === player1marker) {return true} 
  if(TLC === "" && TE === player1marker && TRC === player1marker) {return true}
    
  if(TE === player1marker && C === player1marker && BE === "") {return true} 
  if(TE === player1marker && C === "" && BE === player1marker) {return true} 
  if(TE === "" && C === player1marker && BE === player1marker) {return true}
    
  if(LE === player1marker && C === player1marker && RE === "") {return true} 
  if(LE === player1marker && C === "" && RE === player1marker) {return true} 
  if(LE === "" && C === player1marker && RE === player1marker) {return true}
    
  if(TLC === player1marker && C === player1marker && BRC === "") {return true} 
  if(TLC === player1marker && C === "" && BRC === player1marker) {return true} 
  if(TLC === "" && C === player1marker && BRC === player1marker) {return true}
    
  if(TRC === player1marker && C === player1marker && BLC === "") {return true} 
  if(TRC === player1marker && C === "" && BLC === player1marker) {return true} 
  if(TRC === "" && C === player1marker && BLC === player1marker) {return true}
    
  return false
}

//------------------------------  

function canWeWin() {
  if(TLC === player2marker && LE === player2marker && BLC === "") {return true}
  if(TLC === player2marker && LE === "" && BLC === player2marker) {return true}
  if(TLC === "" && LE === player2marker && BLC === player2marker) {return true}
    
  if(BLC === player2marker && BE === player2marker && BRC === "") {return true}
  if(BLC === player2marker && BE === "" && BRC === player2marker) {return true}
  if(BLC === "" && BE=== player2marker && BRC === player2marker) {return true}
    
  if(TRC === player2marker && RE === player2marker && BRC === "") {return true} 
  if(TRC === player2marker && RE === "" && BRC === player2marker) {return true}
  if(TRC === "" && RE=== player2marker && BRC === player2marker) {return true}
    
  if(TLC === player2marker && TE === player2marker && TRC === "") {return true}
  if(TLC === player2marker && TE === "" && TRC === player2marker) {return true} 
  if(TLC === "" && TE === player2marker && TRC === player2marker) {return true}
    
  if(TE === player2marker && C === player2marker && BE === "") {return true} 
  if(TE === player2marker && C === "" && BE === player2marker) {return true} 
  if(TE === "" && C === player2marker && BE === player2marker) {return true}
    
  if(LE === player2marker && C === player2marker && RE === "") {return true} 
  if(LE === player2marker && C === "" && RE === player2marker) {return true} 
  if(LE === "" && C === player2marker && RE === player2marker) {return true}
    
  if(TLC === player2marker && C === player2marker && BRC === "") {return true} 
  if(TLC === player2marker && C === "" && BRC === player2marker) {return true} 
  if(TLC === "" && C === player2marker && BRC === player2marker) {return true}
    
  if(TRC === player2marker && C === player2marker && BLC === "") {return true} 
  if(TRC === player2marker && C === "" && BLC === player2marker) {return true} 
  if(TRC === "" && C === player2marker && BLC === player2marker) {return true}
    
  return false
}

//------------------------------  

function isCenterFree() { 
  if(isOpen(4)) {return true}
  return false
}

//------------------------------ 

  function checkP1SameOppositeCorners() {
    if(TRC === player1marker &&  BLC === player1marker) {return true} 
    if(TLC === player1marker && BRC === player1marker) {return true} 
    return false
  }

//------------------------------  

function block() {
  if(TLC === player1marker && LE === player1marker && BLC === "") {computerMark(6);return}
  if(TLC === player1marker && LE === "" && BLC === player1marker) {computerMark(3);return}
  if(TLC === "" && LE === player1marker && BLC === player1marker) {computerMark(0);return}
    
  if(BLC === player1marker && BE === player1marker && BRC === "") {computerMark(8);return}
  if(BLC === player1marker && BE === "" && BRC === player1marker) {computerMark(7);return}
  if(BLC === "" && BE=== player1marker && BRC === player1marker) {computerMark(6);return}
    
  if(TRC === player1marker && RE === player1marker && BRC === "") {computerMark(8);return}
  if(TRC === player1marker && RE === "" && BRC === player1marker) {computerMark(5);return}
  if(TRC === "" && RE=== player1marker && BRC === player1marker) {computerMark(2);return}
    
  if(TLC === player1marker && TE === player1marker && TRC === "") {computerMark(2);return}
  if(TLC === player1marker && TE === "" && TRC === player1marker) {computerMark(1);return}
  if(TLC === "" && TE === player1marker && TRC === player1marker) {computerMark(0);return}
    
  if(TE === player1marker && C === player1marker && BE === "") {computerMark(7);return} 
  if(TE === player1marker && C === "" && BE === player1marker) {computerMark(4);return} 
  if(TE === "" && C === player1marker && BE === player1marker) {computerMark(1);return}
    
  if(LE === player1marker && C === player1marker && RE === "") {computerMark(5);return}
  if(LE === player1marker && C === "" && RE === player1marker) {computerMark(4);return}
  if(LE === "" && C === player1marker && RE === player1marker) {computerMark(3);return}
    
  if(TLC === player1marker && C === player1marker && BRC === "") {computerMark(8);return} 
  if(TLC === player1marker && C === "" && BRC === player1marker) {computerMark(4);return} 
  if(TLC === "" && C === player1marker && BRC === player1marker) {computerMark(0);return}
    
  if(TRC === player1marker && C === player1marker && BLC === "") {computerMark(6);return} 
  if(TRC === player1marker && C === "" && BLC === player1marker) {computerMark(4);return}
  if(TRC === "" && C === player1marker && BLC === player1marker) {computerMark(2);return}
}

//------------------------------  

function playWinner() {
  if(TLC === player2marker && LE === player2marker && BLC === "") {computerMark(6);return}
  if(TLC === player2marker && LE === "" && BLC === player2marker) {computerMark(3);return}
  if(TLC === "" && LE === player2marker && BLC === player2marker) {computerMark(0);return}
    
  if(BLC === player2marker && BE === player2marker && BRC === "") {computerMark(8);return}
  if(BLC === player2marker && BE === "" && BRC === player2marker) {computerMark(7);return}
  if(BLC === "" && BE=== player2marker && BRC === player2marker) {computerMark(6);return}
    
  if(TRC === player2marker && RE === player2marker && BRC === "") {computerMark(8);return}
  if(TRC === player2marker && RE === "" && BRC === player2marker) {computerMark(5);return}
  if(TRC === "" && RE=== player2marker && BRC === player2marker) {computerMark(2);return}
    
  if(TLC === player2marker && TE === player2marker && TRC === "") {computerMark(2);return}
  if(TLC === player2marker && TE === "" && TRC === player2marker) {computerMark(1);return}
  if(TLC === "" && TE === player2marker && TRC === player2marker) {computerMark(0);return}
    
  if(TE === player2marker && C === player2marker && BE === "") {computerMark(7);return} 
  if(TE === player2marker && C === "" && BE === player2marker) {computerMark(4);return} 
  if(TE === "" && C === player2marker && BE === player2marker) {computerMark(1);return}
    
  if(LE === player2marker && C === player2marker && RE === "") {computerMark(5);return}
  if(LE === player2marker && C === "" && RE === player2marker) {computerMark(4);return}
  if(LE === "" && C === player2marker && RE === player2marker) {computerMark(3);return}
    
  if(TLC === player2marker && C === player2marker && BRC === "") {computerMark(8);return} 
  if(TLC === player2marker && C === "" && BRC === player2marker) {computerMark(4);return} 
  if(TLC === "" && C === player2marker && BRC === player2marker) {computerMark(0);return}
    
  if(TRC === player2marker && C === player2marker && BLC === "") {computerMark(6);return} 
  if(TRC === player2marker && C === "" && BLC === player2marker) {computerMark(4);return}
  if(TRC === "" && C === player2marker && BLC === player2marker) {computerMark(2);return}
} 

//------------------------------ 

})
