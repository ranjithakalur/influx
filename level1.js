var GameOver = "False"

var GameSpeed = 15;
var loc = 300;
var TimeInSeconds = 90;
var miss = 5;
hits = 0;
var score = 0;

var ss1 = document.getElementById('ss1');
var ss2 = document.getElementById('ss2');
var ss3 = document.getElementById('ss3');
var ss4 = document.getElementById('ss4');
var ss5 = document.getElementById('ss5');

var canon = document.getElementById('canon');

var missedQuestions = document.getElementById('missed');
var nofHits = document.getElementById('hits');

var leveltimer = document.getElementById('leveltimer');

var ss1y = 0;
var ss2y = 0;
var ss3y = 0;
var ss4y = 0;
var ss5y = 0;

var ss1sum;
var ss2sum;
var ss3sum;
var ss4sum;
var ss5sum;

var ss1content;
var ss2content;
var ss3content;
var ss4content;
var ss5content;

var canoncontent;

var ssVelocity = 5;

var canon = document.getElementById('canon');

function mainGameLoop() {
  var id = setInterval(frame, GameSpeed);

  var t = setInterval(timeUpdate, 1000);
  function timeUpdate(){
    if(GameOver == "False"){
      leveltimer.innerHTML = "Time Left: " + TimeInSeconds--;
    }
  }

  function frame() {
    if (ss1y == loc || ss2y == loc || ss3y == loc || ss4y == loc || ss5y == loc || miss<1 || TimeInSeconds<1) {
      GameOver = "True"
      clearInterval(id);
      storeReportVar();
      newpage("report.html");
      alert("GAME OVER!" + "\nHits: " + hits + "\nMiss Left: " + miss + "\nScore: " + hits*10);
    }
    else {
      missedQuestions.innerHTML = "Miss: " + miss;
      nofHits.innerHTML = "<p>HITS: " + hits + "</p><p>Score: " + hits*10 + "</p>";

      ss1y++;
      ss1.style.top = ss1y + 'px';
      ss2y++;
      ss2.style.top = ss2y + 'px';
      ss3y++;
      ss3.style.top = ss3y + 'px';
      ss4y++;
      ss4.style.top = ss4y + 'px';
      ss5y++;
      ss5.style.top = ss5y + 'px';
    }
  }
}

function storeReportVar(){
  if (typeof(Storage) !== "undefined") {
    // Store
    sessionStorage.setItem("miss", miss);
    sessionStorage.setItem("hits", hits);
    sessionStorage.setItem("score", hits*10);
  }
}

function printReport(){
  if (typeof(Storage) !== "undefined") {
    // Store
    getElementById('report.html/#report').innerHTML = sessionStorage.getItem("score");
  }
}

function newpage(pageurl) {
    window.location.assign(pageurl);
}

function resetSS1(){
  if(ss1sum == canoncontent){
    hits++;
    ss1y = 0;
    setss1content();
    setcanoncontent();
    ss1.style.top = ss1y + 'px';}

  else{
    miss--;
  }
}

function resetSS2(){
  if(ss2sum == canoncontent){
    hits++;
    ss2y = 0;
    setss2content();
    setcanoncontent();
    ss1.style.top = ss2y + 'px';
  }
  else{
    miss--;
  }
}

function resetSS3(){
  if(ss3sum == canoncontent){
    hits++;
    ss3y = 0;
    setss3content();
    setcanoncontent();
    ss1.style.top = ss3y + 'px';
  }
  else{
    miss--;
  }
}

function resetSS4(){
  if(ss4sum == canoncontent){
    hits++;
    ss4y = 0;
    setss4content();
    setcanoncontent();
    ss1.style.top = ss4y + 'px';
  }
  else {
    miss--;
  }
}

function resetSS5(){
  if(ss5sum == canoncontent){
    hits++;
    ss5y = 0;
    setss5content();
    setcanoncontent();
    ss1.style.top = ss5y + 'px';
  }
  else {
    miss--
  }
}


function setcanoncontent(){
  ssno = Math.floor(Math.random() * 5) + 1;
  switch(ssno){
    case 1: canoncontent = ss1sum;
            break;
    case 2: canoncontent = ss2sum;
            break;
    case 3: canoncontent = ss3sum;
            break;
    case 4: canoncontent = ss4sum;
            break;
    case 5: canoncontent = ss5sum;
            break;
  }
  canon.innerHTML = "<p style='color: white;padding-left:46px;'><b>" + canoncontent + "</b></p>";
}


function setss1content(){
  r1 = Math.floor(Math.random() * 25) + 1;
  r2 = Math.floor(Math.random() * 9) + 1;
  ss1sum = r1 + r2;
  ss1.innerHTML = "<p style='color: white;padding-top:53px;padding-left:85px;'>" + r1 + " + " + r2 + "</p>";
}

function setss2content(){
  r1 = Math.floor(Math.random() * 25) + 1;
  r2 = Math.floor(Math.random() * 9) + 1;
  ss2sum = r1 + r2;
  ss2.innerHTML = "<p style='color: white;padding-top:53px;padding-left:85px;'>" + r1 + " + " + r2 + "</p>";
}

function setss3content(){
  r1 = Math.floor(Math.random() * 25) + 1;
  r2 = Math.floor(Math.random() * 9) + 1;
  ss3sum = r1 + r2;
  ss3.innerHTML = "<p style='color: white;padding-top:53px;padding-left:85px;'>" + r1 + " + " + r2 + "</p>";
}

function setss4content(){
  r1 = Math.floor(Math.random() * 25) + 1;
  r2 = Math.floor(Math.random() * 9) + 1;
  ss4sum = r1 + r2;
  ss4.innerHTML = "<p style='color: white;padding-top:53px;padding-left:85px;'>" + r1 + " + " + r2 + "</p>";
}

function setss5content(){
  r1 = Math.floor(Math.random() * 25) + 1;
  r2 = Math.floor(Math.random() * 9) + 1;
  ss5sum = r1 + r2;
  ss5.innerHTML = "<p style='color: white;padding-top:53px;padding-left:85px;'>" + r1 + " + " + r2 + "</p>";
}

function ifsumcorrect(ss, cc){
  if(ss == cc){
    return 1;
  }
  else{
    return 0;
  }
}

//Start the game
setss1content();
setss2content();
setss3content();
setss4content();
setss5content();
setcanoncontent()
mainGameLoop();
