//import 
// military grade Enigma rotors
const slowRotor = ["B", "D", "F", "H", "J", "L", "C", "P","R", "T", "X", "V", "Z","N", "Y", "E", "I", "W", "G", "A", "K", "M", "U", "S", "Q", "O"];

const medRotor = ["A", "J", "D", "K", "S", "I", "R", "U", "X", "B", "L", "H", "W", "T", "M", "C", "Q", "G", "Z", "N", "P", "Y", "F", "V", "O", "E"];

const fastRotor = ["E", "K", "M", "F","L", "G", "D", "Q", "V", "Z", "N", "T", "O", "W", "Y", "H", "X", "U", "S", "P", "A", "I", "B", "R", "C", "J"];

const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 


// Reflector needed to return the ciphertext back through the three rotors
const reflector = ["F", "V", "P", "J", "I", "A", "O", "Y", "E", "D", "R", "Z", "X", "W", "G", "C", "T", "K", "U", "Q", "S", "B", "N", "M", "H", "L"];

// Main class that does the encrypting 
export default class Rotor {
    static encoder = (plaintext, rotor) => { 
      let cipher = plaintext.toUpperCase();
      let num = 0;
      let encoded_word = " ";

      for (var d = 0; d < cipher.length; d++ ){
        num = cipher.charCodeAt(d);
          if (num === 32) {
           encoded_word = encoded_word + " ";
          }
        // takes the letter in the array corresponding to the plaintext
        encoded_word += rotor[num - 65]; 

        var tempLet = rotor.shift();
        rotor.push(tempLet);
        
      }

     return encoded_word.substring(1, encoded_word.length).split('NWKSFUWSK').join('').split('undefined').join('');
    }

    static reflectorEncoder = (plaintext) => { 
      let cipher = plaintext.toUpperCase();
      let num = 0;
      let encoded_word = " ";

      for (var d = 0; d < cipher.length; d++ ){
        num = cipher.charCodeAt(d);
        
         if (num === 32) {
           encoded_word = encoded_word + " ";
        }
      
        // takes the letter in the array corresponding to the plaintext
        encoded_word += reflector[num - 65];
        
      }

      return encoded_word.substring(1, encoded_word.length).split('NWKSFUWSK').join('').split('undefined').join('');
    }

    static revEncoder = (plaintext, rotor) => { 
      let cipher = plaintext.toUpperCase();
      let num = 0;
      let encoded_word = " ";

      for (var d = 0; d < cipher.length; d++ ){
        for (var i = 0; i <rotor.length; i++){
          if (cipher.charAt(d) === rotor[i]){
            num = i;
          }
        }

        if (cipher.charAt(d) === " ") {
          encoded_word = encoded_word + " ";
        }
        
        // takes the letter in the array corresponding to the plaintext
        encoded_word += alpha[num];
      }

      return encoded_word.substring(1, encoded_word.length).split('NWKSFUWSK').join('').split('undefined').join('');
    }


}