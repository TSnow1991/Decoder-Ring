// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
   if (!shift || shift === 0 || shift > 25 || shift < -25) {
     return false;
   }
   if (!encode) shift *= -1;
  
  const lowerCase = input.toLowerCase();

  let result = "";

  for (let i = 0; i < lowerCase.length; i++){
    const value = lowerCase[i];
    
    if (value.charCodeAt(lowerCase[i]) <= 122 && value.charCodeAt(lowerCase[i]) >= 97) {//match(/[a-z]/)) {
      let code = lowerCase.charCodeAt(i) + shift;

      if (code > 122) {
        code = code - 26;
      }
      else if (code < 97) {
        code = code + 26;
      }
      result += String.fromCharCode(code);
    } else {
      result += value;
    }
  }
  return result // your solution code here
}
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
