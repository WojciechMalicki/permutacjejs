var pwords = new Set();
var res = "";

function changeL(w, b, e) {
  var r = w.slice(0, b) + w.slice(e);
  if (b < e - 1) {
    r = r + w.slice(b + 1, e);
  }

  r = r + w.slice(b);
  if (e < w.length - 1) {
    r = r + w.slice(e + 1,);
  }
  return r;
}

function addRes(v) {
  res = res + v + "\n";
}

function perm(par, w) {
  if (par == 0) {
    pwords.add(w);
    console.log(w);
    return 0;
  } else {
    for (var i = 0; i < par; i++) {
      var q = changeL(w, i, par);
      perm(par - 1, q);
    }
  }
}

function calculate() {
  var pword = document.getElementById("chartext").value;
  perm(pword.length, pword);
  console.log(pwords);
  pwords.forEach(addRes);
  document.getElementById("results").innerHTML = res;
}
