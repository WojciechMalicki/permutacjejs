var pwords = new Set();
var res = "";

function changeL(w, b, e) {
  var r = "";
  if (b > 0)
  {
    r = r + w.slice(0, b);
    console.log("1 " + w + ":" + b + ", " + e + " -> " + r);
  }
  r = r + w[e];
  console.log("2 " + w + ":" + b + ", " + e + " -> " + r);
  if (b < e - 1) {
    r = r + w.slice(b + 1, e);
    console.log("3 " + w + ":" + b + ", " + e + " -> " + r);
  }

  r = r + w[b];
  console.log("4 " + w + ":" + b + ", " + e + " -> " + r);
  if (e < w.length - 1) {
    r = r + w.slice(e + 1,);
    console.log("5 " + w + ":" + b + ", " + e + " -> " + r);
  }
  console.log("100 " + w + ":" + b + ", " + e + " -> " + r);
  return r;
}

function addRes(v) {
  res = res + v + "\n";
}

function perm(par, w) {
  if (par == 0) {
    console.log("funct_perm: " + w);
    pwords.add(w);
    return 0;
  } else {
    for (var i = 0; i < par; i++) {
      if (i<par-1)
        {
          var q = changeL(w, i, par-1);
          console.log("funct_perm_q: " + q);
        }
      perm(par - 1, q);
    }
  }
}

function calculate() {
  var pword = document.getElementById("chartext").value;
  pwords.add(pword);
  perm(pword.length, pword);
  console.log(pwords);
  pwords.forEach(addRes);
  document.getElementById("results").innerHTML = res;
  console.log(res);
}
