var pwords = new Set();
var res = "";

function addRes(v) {
  res = res + v + "\n";
}

function perm(par, w) {
 
  if (par == 0) {
    pwords.add(w);
    console.log(w)
    return 0;
    
  } else {
    for (var i = 0; i < par; i++) {
      var tmp = w[i];
      w[i] = w[par - 1];
      w[par - 1] = tmp;
      perm(par - 1, w);
      tmp = w[i];
      w[i] = w[par - 1];
      w[par - 1] = tmp;
    }
  }
}

function calculate() {
  var pword = document.getElementById("chartext").value;
  perm(pword.length, pword);
  console.log(pwords)
  pwords.forEach(addRes);
  document.getElementById("results").innerHTML = res;
}
