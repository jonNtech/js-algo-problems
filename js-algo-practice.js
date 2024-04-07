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
//console.log(isPalindrome("kayak"));
//console.log(isPalindrome("speed"));
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

//max char problem
function maxChar(str) {
  const charMap = {};
  let highest = 0;
  let maxChar = "";
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  // older method
  // for (const [key, value] of Object.entries(charMap)) {
  //   if (value > highest) {
  //     highest = value;
  //     maxChar = key;
  //   }
  // }
  for (let key in charMap) {
    if (charMap[key] > highest) {
      highest = charMap[key];
      maxChar = key;
    }
  }
  return maxChar;
}
//console.log(maxChar("abbcccdgee"));

// Array chunking
function chunk(arr, size) {
  let chunky = [];
  let index = 0;
  if (arr.length == size) {
    return arr;
  }
  while (index < arr.length) {
    chunky.push(arr.slice(0, index + size));
    index += size;
  }
  return chunky;
}
//console.log(chunk([1, 2, 3, 4], 2));
//console.log(chunk([1, 2, 3, 4, 5, 6], 3));

//capitalize first in str
function capitalize(str) {
  let words = str.split(" ");
  //let result = [];
  // for (let word of words) {
  //   result.push(word[0].toUpperCase() + word.slice(1));
  // }
  // return result.join(" ");
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}
//console.log(capitalize("this is a fun problem"));

// Anagrams - create helper function
function charMapping(str) {
  const charMap = {};
  str.toLowerCase().replace(/[\w]/g, "");
  for (let char of str) {
    charMap[char] = ++charMap[char] || 1;
  }
  return charMap;
}

function isAnagram(str1, str2) {
  const charMap1 = charMapping(str1);
  const charMap2 = charMapping(str2);

  if (Object.keys(charMap1).length !== Object.keys(charMap2).length)
    return false;

  for (key in charMap1) {
    if (charMap1[key] !== charMap2[key]) return false;
  }
  return true;
}
console.log(isAnagram("Rail Safety!", "fairy tales"));
