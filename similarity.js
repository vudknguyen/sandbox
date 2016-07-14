// Implementation of finding percentage of similarity between 2 words by using Levenshtein distance algorithm

Number.prototype.toPercentage = function(){
  return this  * 100 + "%";
};

Number.prototype.subtract = function(a){
  return this - a;
};

Number.prototype.devideFor = function(a){
  return this / a;
};

function levDistanceAlgorithm(s1,s2) {
  function levDistance(s,slen,t,tlen) {
     if(slen === 0) return tlen;
     if(tlen === 0) return slen;
  
     var cost = (s[slen - 1] == t[tlen - 1]) ? 0 : 1;  
  
     return Math.min(levDistance(s,slen - 1, t, tlen) + 1,
                     levDistance(s,slen, t, tlen - 1) + 1,
                     levDistance(s,slen - 1, t, tlen - 1) + cost);
  }
  
  return levDistance(s1,s1.length, s2, s2.length);
}

function similarity(dAlgorithm) {
  return function(s1,s2) {
      var biggerLength = Math.max(s1.length, s2.length);
  
      return biggerLength.
              subtract(dAlgorithm(s1,s2)).
              devideFor(biggerLength).
              toPercentage();
  };
}

// Test
console.log(similarity(levDistanceAlgorithm)("test", "test2"));
