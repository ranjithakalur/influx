// Level 1 content is set
//LEVEL 1 javascript

sessionStorage.setItem("levelx", 1);
var GameSpeed = 150;
var TimeInSeconds = 90;


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
