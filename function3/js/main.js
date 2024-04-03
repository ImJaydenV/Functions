  
  function isPalindrome(word) {
    var reversed = [];
    var word = Array.from(word);
    for(let i = word.length  -1; i >= 0; i--){
      reversed.push(word[i]);
    }
     word = word.join("");
     reversed = reversed.join("");
     console.log(word);
     console.log(reversed);
  
     if(word === reversed){
      return true;
     }
     else{
      return false;
     }
  }
  