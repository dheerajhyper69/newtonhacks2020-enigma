//import 
// military grade Enigma rotors
const fastRotor = ["B", "D", "F", "H", "J", "L", "C", "P","R", "T", "X", "V", "Z","N", "Y", "E", "I", "W", "G", "A", "K", "M", "U", "S", "Q", "O"];

const medRotor = ["A", "J", "D", "K", "S", "F", "I", "R", "U", "X", "B", "L", "H", "w", "T", "M", "C", "Q", "G", "Z", "N", "P", "Y", "F", "V", "O", "E"];

const slowRotor = ["E", "K", "M", "F","L", "G", "D", "Q", "V", "Z", "N", "T", "O", "W", "Y", "H", "X", "U", "S", "P", "A", "I", "B", "R", "C", "J"];


// Reflector needed to return the ciphertext back through the three rotors
const reflector = ["F", "V", "P", "J", "I", "A", "O", "Y", "E", "D", "R", "Z", "X", "W", "G", "C", "T", "K", "U", "Q", "S", "B", "N", "M", "H", "L"];

// Main class that does the encrypting 
export default class Rotor {
    static encoder = (plaintext) => { 
      let cipher = plaintext.toUpperCase();
      let cipherText = [];
      let num = 0;
      let encoded_word = " ";

      for (var i = 0; i < cipher.length; i++) {
        cipherText[i] = cipher[i];
      }

      for (var d = 0; d < cipherText.length; d++ ){
        num = cipher.charCodeAt(d);
        if (num === 32) {
          encoded_word = encoded_word+ " ";
        }
      
        // takes the letter in the array corresponding to the plaintext
        encoded_word += fastRotor[num - 65];

        //shift part 
        let firstVal = 
        fastRotor.concat(fastRotor.shift());
      }
      

    return encoded_word;
    }
}

 