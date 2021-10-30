// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    if (!input) {
      return false
    }; 

    function isOdd(num) { return (num % 2) == 1;}

    if (!encode && isOdd(parseInt(input).toString().length)) {
      return false
    };

    input.toLowerCase()
    
    const alphabetGrid = { a: "11", b: "21", c: "31", d: "41", e: "51", 
    f: "12", g: "22", h: "32", i: "42", j: "42", k: "52", 
    l: "13", m: "23", n: "33", o: "43", p: "53", 
    q: "14", r: "24", s: "34", t: "44", u: "54", 
    v: "15", w: "25", x: "35", y: "45", z: "55", };
    
     let result = "";
     
     if (encode) {
      
      for (let i = 0; i < input.length; i++) {
        
        let count = input[i];
        
        if (count === " ") {
          
          result += " ";
          
        } else {
          
          let match = Object.entries(alphabetGrid).find(
            
            (letter) => count === letter[0]
            
          );
          
          result +=  match[1];
          
        }
        
      }
    }
      for (let i = 0; i < input.length; i += 2) {
      
        let decode = `${input[i]}${input[i + 1]}`;
        
        if (decode.includes(" ")) {
          
          result += " ";
          
          i -= 1;
          
        } else if (decode === "42") {
          
          result += "(i/j)";
          
        } else {
          
          let found = Object.entries(alphabetGrid).find(
            
            (letter) => decode === letter[1]
            
          );
          
          if (found) {
            
            result += found[0];
            
          }
          
        }
        
    }
    return result.trimEnd()  // your solution code here
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
