// main JavaScript file
var GameOver = "False"

var loc = 300;
var miss = 5;
var hits = 0;
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
var canx = 450;

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

canon.style.left = canx + 'px';

function mainGameLoop() {
  var id = setInterval(frame, GameSpeed);

  var t = setInterval(timeUpdate, 1000);
  function timeUpdate(){
    if(GameOver == "False"){
      leveltimer.innerHTML = "Time Left: " + TimeInSeconds--;
    }
  }

  function frame() {
        if(ss1y == loc || ss2y == loc || ss3y == loc || ss4y == loc || ss5y == loc || miss<1 ){

          GameOver = "True";
          clearInterval(id);
          storeReportVar("Failed!");
          newpage('report.html');
        }
          if (TimeInSeconds<1) {
            clearInterval(id);
            storeReportVar("Congrats!");
            newpage("report.html");
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


function newpage(pageurl) {
    window.location.assign(pageurl);
}


//Start the game
setss1content();
setss2content();
setss3content();
setss4content();
setss5content();
setcanoncontent()
mainGameLoop();
