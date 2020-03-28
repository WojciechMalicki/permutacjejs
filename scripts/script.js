var words = new Set();

function perm(par, w)
{
  if (par==1)
    {
      words.add(w);
    }
  else
    {
      for(var i=0;i<par;i++)
        {
          var tmp=w[i];
          w[i]=w[par-1];
          w[par-1]=tmp;
          perm(par-1)
          tmp=w[i];
          w[i]=w[par-1];
          w[par-1]=tmp;
        }
    }
}

function calculate()
{
    var res = "";
    var word = document.getElementById("chartext");
    perm(word.length, word);
    
  words.forEach(function(value)
  {
      res = res + value + "<br>";          
                });
  document.getElementById("results").innerHTML=res;
}
