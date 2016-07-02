1. Minimum

Write a function min that takes two arguments and returns their minimum.

function min(x,y) {
  if (x < y) {
      return x;
    } else {
      return y;
    }  
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


2. Recursion

Define a recursive function isEven corresponding to this description. 
The function should accept a number parameter and return Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of 
a way to fix this?

function isEven(n) {
  if (n == 0) {
      return true;
    } else if (n == 1) {
      return false;
      } else if (n < 0) {
          return isEven(-n);
        } else {
          return isEven(n - 2);
          }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false


3. Bean Counting

Write a function countBs that takes a string as its only argument and 
returns a number that indicates how many uppercase "B" characters are 
in the string.

Next,write a function called countChar that behaves like countBs, except 
it takes a second argument that indicates the character that is to be 
counted (rather than counting only uppercase "B" characters). Rewrite 
countBs to make use of this new function.

function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == ch) {
      counted += 1;
      return counted;
    }
  }
}

function countBs(string) {
  return countChar(string, "B");
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4