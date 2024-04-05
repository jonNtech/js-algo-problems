//how to revers a str
function reversed(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}
//console.log(reversed("coding is fun"));

//how to reverse a str array
function reversedAry(str) {
  const strToArray = str.split("");
  strToArray.reverse();
  return strToArray.join("");
}
//console.log(reversedAry("coding is for fun and money"));

//reverseing an int
function reverseInt(intNum) {
  const reversed = intNum.toString().split("").reverse().join("");
  return pasrseInt(reversed) * Math.sign(intNum);
}
//console.log(reverseInt(123456));

//Palindrome
function isPalindrome(str) {
  let reverseStr = str.toLower().split("").reverse().join("");
  // if (str == reverseStr) {
  //   return true;
  // }
  // return false;
  return str == reverseStr;
}
console.log(isPalindrome("kayak"));
console.log(isPalindrome("speed"));
//2 pointer method of sovling the palindrome problem
// function isPalindrome(str) {
//   let min = 0
//   let max = str.length - 1

//   do {
//     if(str[min] == str[max]) {
//       min++
//       max--
//     } else {
//       return false
//     }
//   }while(min < max)

//   return true
// }
