//reset sprite data


function resetSS1(){
  if(ss1sum == canoncontent){
    hits++;
    ss1y = 0;
    setss1content();
    setcanoncontent();
    ss1.style.top = ss1y + 'px';
    canon.style.left = 50 + 'px'; }
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
    canon.style.left = 250 + 'px';
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
    canon.style.left = 450 + 'px';
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
    canon.style.left = 650 + 'px';
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
    canon.style.left = 850 + 'px';
  }
  else {
    miss--
  }
}
