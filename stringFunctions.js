const reverseString = (inputString) => {
  let result = [];
  if (inputString.length < 1) return "no string detected";
  else if (typeof inputString == "number") {
    return "inputString is not a string but a number , please enter a string instead";
  } else {
    for (let index = inputString.length - 1; index > -1; index--) {
      result.push(inputString[index]);
    }
    let myString = result.join("");
    return myString;
  }
};
const isPalindrome = (inputString) => {
  let result = false;
  if (inputString.length < 2) return "no string detected";
  else if (typeof inputString == "number") {
    return "inputString is not a string but a number , please enter a string instead";
  } else {
    let first, last;
    first = 0;
    last = inputString.length - 1;
    while (first < last) {
      if (inputString[first] !== inputString[last]) {
        return false;
      }
      first++;
      last--;
    }
    return true;
  }
};

module.exports = { reverseString, isPalindrome };
