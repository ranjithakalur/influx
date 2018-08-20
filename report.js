function changeHrefs(){
  if (typeof(Storage) !== "undefined"){
    lno = sessionStorage.getItem('levelx');
    document.getElementById('tryagain-link').href = "level"+lno+".html";
    document.getElementById('tryagainfail-link').href = "level"+lno+".html";
    lno++;
    document.getElementById('nextlevel-link').href = "level"+lno+".html";
  }
}

function printReport(){
  if (typeof(Storage) !== "undefined") {
    // Store
    document.getElementById('sco').innerHTML = sessionStorage.getItem("score");
    document.getElementById('hit').innerHTML = sessionStorage.getItem("hits");
    document.getElementById('mis').innerHTML = sessionStorage.getItem("miss");
    document.getElementById('status').innerHTML = sessionStorage.getItem("status");

    if(sessionStorage.getItem("status") == "Congrats!"){
      document.getElementById("status").style.color = "green";
      document.getElementById("fail-btn-panel").style.display = "none";
    }
    else{
      document.getElementById("status").style.color = "red";
      document.getElementById("success-btn-panel").style.display = "none";
    }

  }
}

function storeReportVar(s){
  if (typeof(Storage) !== "undefined") {
    // Store
    sessionStorage.setItem("miss", miss);
    sessionStorage.setItem("hits", hits);
    sessionStorage.setItem("score", hits*10);
    sessionStorage.setItem("status", s);
  }
}
