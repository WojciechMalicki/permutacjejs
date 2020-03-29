var words = new Set();
var res = "";

function addRes(v) {
  res = res + v + "<br>";
}

function perm(par, w) {
  console.log(w);
  if (par == 0) {
    words.add(w);
    console.log(w);
  } else {
    for (var i = 0; i < par; i++) {
      var tmp = w[i];
      w[i] = w[par - 1];
      w[par - 1] = tmp;
      perm(par - 1);
      tmp = w[i];
      w[i] = w[par - 1];
      w[par - 1] = tmp;
    }
  }
}

function calculate() {
  
  var word = document.getElementById("chartext").value;
  perm(word.length, word);
  words.forEach(addRes);
  document.getElementById("results").innerHTML = res;
}
