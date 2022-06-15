function palindrome(str) {
  let formattedString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedString = formattedString.split("").reverse().join("");
  if(formattedString !== reversedString) {
    return false;
  }
  return false;
}

let result = palindrome("not a palindrome");
console.log(result)
