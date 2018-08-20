//reset sprite data

function shootFire(fx){
  fireobj = document.getElementById('fireshot');
  fireobj.style.left = fx + 'px';
  fireobj.style.visibility = 'visible';
}

function resetFire(){
  fireobj = document.getElementById('fireshot');
  fireobj.style.visibility = 'hidden';
}

function canonMove(tocanx) {
  var canon = document.getElementById("canon");
  var canvelocity = 10;
  var id = setInterval(frame, 2);
  function frame() {
    if (canx == tocanx) {
      var sf = setTimeout(resetFire, 200);
      shootFire(canx);
      clearInterval(id);
    } else {
      if(canx<tocanx){canx+=canvelocity;}
      else{canx-=canvelocity;}
      canon.style.left = canx + 'px';
    }
  }
}

function resetSS1(){
  if(ss1sum == canoncontent){
    hits++;
    canonMove(50);
    ss1y = 0;
    setss1content();
    setcanoncontent();

    ss1.style.top = ss1y + 'px';
  }
  else{
    miss--;
  }
}

function resetSS2(){
  if(ss2sum == canoncontent){
    hits++;
    canonMove(250);
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
    canonMove(450);
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
    canonMove(650);
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
    canonMove(850);
    ss5y = 0;
    setss5content();
    setcanoncontent();

    ss1.style.top = ss5y + 'px';
  }
  else {
    miss--
  }
}
