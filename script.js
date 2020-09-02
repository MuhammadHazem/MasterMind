var numb1 = document.getElementById("numb1");
var numb2 = document.getElementById("numb2");
var numb3 = document.getElementById("numb3");
var numb4 = document.getElementById("numb4");
var guess = ["_", "_", "_", "_"];
var an1 = document.getElementById("1");
var an2 = document.getElementById("2");
var an3 = document.getElementById("3");
var an4 = document.getElementById("4");
var an5 = document.getElementById("5");
var an6 = document.getElementById("6");
var an7 = document.getElementById("7");
var an8 = document.getElementById("8");
var an9 = document.getElementById("9");
var ans = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var num1;
var num2;
var num3;
var num4;
var rando1;
var rando2;
var rando3;
var rando4;
var rando;
var numCount = document.getElementById("numCount");
var numCounter = 0;
var placeCount = document.getElementById("placeCount");
var placeCounter = 0;
var limit = 0;
var guesses = 0;
var tries = 0;
var winner = document.getElementById("winner");
var ids=[];
var win = false;
var diff = localStorage.getItem('mode');
var players = [];
var player;
function setDifficulty(){
  if (diff == 3) {
    numb4.style.display = "none";
    rando = [rando1, rando2, rando3];
    document.getElementById("choose").innerText = "Choose 3 numbers";
    guess = ["_", "_", "_"];
    for (var i = 0; i < ans.length; i++) {
      document.getElementById(ans[i]).innerText = "_ _ _";
    }
  } else if (diff == 4) {
    numb4.style.display = "inline-block";
    rando = [rando1, rando2, rando3, rando4];
    document.getElementById("choose").innerText = "Choose 3 numbers";
    guess = ["_", "_", "_", "_"];
    for (var i = 0; i < ans.length; i++) {
      document.getElementById(ans[i]).innerText = "_ _ _ _";
    }
  }
}

function ready(){
  randomize();
  setDifficulty();
  console.log(rando);
  numCounter = 0;
  numCount.innerText = numCounter;
  placeCounter = 0;
  placeCount.innerText = placeCounter;
  tries = 0;
  document.getElementById("array").value = "";
}
ready();
function setGame() {
  if (win == true){
    randomize();
    setDifficulty();
    console.log(rando);
    numCounter = 0;
    numCount.innerText = numCounter;
    placeCounter = 0;
    placeCount.innerText = placeCounter;
    tries = 0;
    limit = 0;
    guesses = 0;
    numb1.innerText = "_";
    numb2.innerText = "_";
    numb3.innerText = "_";
    numb4.innerText = "_";
    document.getElementById("counters").style.display = "block";
    document.getElementById("new").style.display = "none";
    for (var i = 0; i < ans.length; i++) {
      if (diff == 3){
        document.getElementById(ans[i]).innerText = "_ _ _";
      } else if (diff == 4){
        document.getElementById(ans[i]).innerText = "_ _ _ _";
      }
      document.getElementById(
        ans[i]
      ).style.color = document.getElementsByTagName("BODY")[0].style.color;
    }
    win = false;
    document.getElementById("sub").style.display = "inline-block";
    document.getElementById("del").style.display = "inline-block";
    document.getElementById("save").style.display = "none";
    document.getElementById("save").innerHTML = "Save Score";
    document.getElementById("save").disabled = false;
    winner.style.display = "none";
    document.getElementById("ender").style.width = "100%";
    winner.innerText = "You have won in " + tries + " times!";
    for (var i = 0; i < ids.length; i++) {
      document.getElementById(ids[i]).disabled = false;
    }
    ids = [];
  document.getElementById("array").value = "";
  }
}
function randomize(){
  rando1 = Math.floor(Math.random() * 9 + 1);
  do {
    rando2 = Math.floor(Math.random() * 9 + 1);
  } while ((rando2 == rando1));
  do {
    rando3 = Math.floor(Math.random() * 9 + 1);
  } while ((rando3 == rando2) || (rando3 == rando1));
  do {
   rando4 = Math.floor(Math.random() * 9 + 1);
  } while ((rando4 == rando3) || (rando4 == rando2) || (rando4 == rando1));
}
function setNum(value, id) {
  if (limit == 0) {
    guess[0] = value;
    console.log(guess);
    numb1.innerText = value;
    num1 = value;
    limit++;
  } else if (limit == 1) {
    guess[1] = value;
    console.log(guess);
    numb2.innerText = value;
    num2 = value;
    limit++;
  } else if (limit == 2) {
    guess[2] = value;
    console.log(guess);
    numb3.innerText = value;
    num3 = value;
    limit++;
  } else if (limit == 3 && diff == 4) {
    guess[3] = value;
    console.log(guess);
    numb4.innerText = value;
    num4 = value;
    limit++;
  }
  if ((ids.length < 4 && diff == 4) || (ids.length < 3 && diff == 3)) {
    ids.push(id);
    document.getElementById(id).disabled = true;
  }
}
function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
function setGuess(i) {
  i --;
  if (i != 9){
    if (diff == 3){
      document.getElementById(ans[i]).innerText =
        num1 + " " + num2 + " " + num3;
    } else if (diff == 4){
      document.getElementById(ans[i]).innerText =
        num1 + " " + num2 + " " + num3 + " " + num4;
    }
    if (i > 0) {
      document.getElementById(ans[i-1]).style.color = "blue";
    }  
    document.getElementById(ans[i]).style.color = "red";;
    num1 = "_";
    num2 = "_";
    num3 = "_";
    num4 = "_";
  } else if (i==9) {
    if (diff == 3){
      an1.innerText = num1 + " " + num2 + " " + num3;
    } else if (diff == 4){
      an1.innerText = num1 + " " + num2 + " " + num3 + " " + num4;
    } 
    an9.style.color = "blue";
    an1.style.color = "red";        
    num1 = "_";
    num2 = "_";
    num3 = "_";
    num4 = "_";
    guesses = 1;
  }
}
function guessAnswer(id) {
  if ((limit == 4 && diff == 4) || (limit == 3 && diff == 3)) {
    if (arrayEquals(guess, rando) == true) {
      tries++;
      won();
      document.getElementById("sub").style.display = "none";
      document.getElementById("del").style.display = "none";
      document.getElementById("save").style.display = "inline-block";
    } else {
      tries++;
      guesses++;
      limit = 0;
      placeCorrect();
      numCorrect();
      numb1.innerText = "_";
      numb2.innerText = "_";
      numb3.innerText = "_";
      numb4.innerText = "_";
      setGuess(guesses);
    }
    
    if (win == false) {
      for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).disabled = false;
      }
      ids = [];
    } 
  } else if (diff == 4) {
    alert("plz enter the 4 digits.");
  } else if (diff == 3) {
    alert("plz enter the 3 digits.");
  }
  
}
function won() {
  document.getElementById("counters").style.display = "none";
  win = true;
  document.getElementById("new").style.display = "inline-block";
  winner.style.display = "block";
  winner.innerText = "You have won in " + tries + " times!";
}
function delAnswer() {
  if (limit == 1) {
    guess.splice(0, 1, "_");
     
    numb1.innerText = "_";
    document.getElementById(ids[0]).disabled = false;
      ids.splice(0, 1);
    limit--;
  } else if (limit == 2) {
    guess.splice(1, 1, "_");
    numb2.innerText = "_";
    document.getElementById(ids[1]).disabled = false;
    ids.splice(1, 1);
    limit--;
  } else if (limit == 3) {
    guess.splice(2, 1, "_");
    numb3.innerText = "_";
    document.getElementById(ids[2]).disabled = false;
    ids.splice(2, 1);
    limit--;
  } else if (limit == 4 && diff == 4) {
    guess.splice(3, 1, "_");
    document.getElementById(ids[3]).disabled = false;
    ids.splice(3, 1);
    numb4.innerText = "_";
    limit--;
  } 
  console.log(guess);
}
function numCorrect() {
  numCounter = 0;
  if ((rando.includes(num1)) == true) {
    numCounter++;
  }
  if (rando.includes(num2) == true) {
    numCounter++;
  }
  if (rando.includes(num3) == true) {
    numCounter++;
  }
  if (rando.includes(num4) == true) {
    numCounter++;
  }
  numCount.innerText = numCounter;
}
function placeCorrect() {
  placeCounter = 0;
  if (rando[0] == guess[0]) {
    placeCounter++;
  }
  if (rando[1] == guess[1]) {
    placeCounter++;
  }
  if (rando[2] == guess[2]) {
    placeCounter++;
  }
  if (rando[3] == guess[3] && diff == 4) {
    placeCounter++;
  }
  placeCount.innerText = placeCounter;
}
function start(){
   console.log(document.getElementById("difficulty").value);
   localStorage.setItem(
    "mode",
    document.getElementById("difficulty").value);
  window.location.href = "/index2.html";
}
function scores(){
  window.location.href = "http://localhost:5000/scores";
}
function save(){
  document.getElementById("pop").style.display = "block";
}
function saving() {
  if (localStorage.getItem("scr")) {
    console.log(JSON.parse(localStorage.getItem("users")));
    players = JSON.parse(localStorage.getItem("users"));
  }
  var username = document.getElementById("name").value;
  console.log(players.length);
  players.push({username, diff, tries});
  
  player = JSON.stringify(players);
  
  // document.cookie = player;
  localStorage.setItem("users", player);
  localStorage.setItem("scr", true);
  document.getElementById("array").value = player;
  console.log(document.getElementById("array").value);
  document.getElementById("pop").style.display = "none";
  document.getElementById("save").innerHTML = "Saved!";
  document.getElementById("save").disabled = true;
}
document.getElementById("update").disabled = false;
async function update() {
  var response = await fetch("/users.json");
  var data = await response.json();
  for (var i = 0; i < data.length; i++){
    $(".board").append(
      `<tr><td align="center">${data[i].username}</td><td align="center">${data[i].diff}</td><td align="center">${data[i].tries}</td></tr>`
    );
  }
  document.getElementById("update").disabled = true;
}

