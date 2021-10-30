// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    input.toLowerCase(); 
    
    let result = ""; 
    

    if(!uniqueCheck(alphabet))
       return false;
    
    if (!input || !alphabet || alphabet.length !== 26) {
       return false;}
      
    
    let letters = "abcdefghijklmnopqrstuvwxyz";
   
    function uniqueCheck(string) {
   
      if(string === undefined)
        return false
      
      const duplicate = {}; 
    
      
      for (var i = 0; i < string.length; i++) {
        
       if (duplicate[string[i]] != null){
         duplicate[string[i]] = 1;
         return false; 
       } else {
         
         duplicate[string[i]] = 0; 
         
       }
      
      }
      
      return true; 
      
    }
  
    try {
      
      if (encode === true){
        
        for(let i = 0; i < input.length; i++){
          
          let index = letters.indexOf(input[i]);
          console.log(index); 
          if (index === -1 && input[i] === " "){
            
            result += " ";
            
          } else {
            
            result += alphabet[index]; 
            
          }
          
        }
        
      } else if (!encode) {
        
        for (let i = 0; i < input.length; i++){
          
          let index = alphabet.indexOf(input[i]);
          console.log(index); 
          if (index === -1 && input[i] === " "){
            
            result += " ";
            
          } else {
            
            result += letters[index]; 
            
          }
          
        }
        
      } 
      
      return result;
           
    } catch (error) {
      
      return error; 
      
    }// your solution code here
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
