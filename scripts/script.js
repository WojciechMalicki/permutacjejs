var pwords = new Set();
var res = "";

function changeL(w, b, e) {  
  var r = "";
  if (b < e) {
    if (b > 0) {
      r = r + w.slice(0, b);
    }
    r = r + w[e];

    if (b < e - 1) {
      r = r + w.slice(b + 1, e);
    }

    r = r + w[b];

    if (e < w.length - 1) {
      r = r + w.slice(e + 1);
    }
  } else {
    r = w;
  }
  return r;
}

function addRes(v) {
  res = res + v + "\n";
}

function perm(par, w) {
  if (par == 0) {
    pwords.add(w);
    return 0;
  } else {
    for (var i = 0; i < par; i++) {
      var q = changeL(w, i, par - 1);

      perm(par - 1, q);
    }
  }
}

function calculate() {
  document.getElementById("results").innerHTML = "";
  res="";
  pwords.clear();
  var pword = document.getElementById("chartext").value;
  pword = pword.replace(" ","");
  pwords.add(pword);
  perm(pword.length, pword);
  pwords.forEach(addRes);
  document.getElementById("results").innerHTML = res;
}
