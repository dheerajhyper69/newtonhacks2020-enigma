class Plugboard {
  // user input for plugboard
  plugInput = []; 
  plugOutput = [];

  firstLet = ""; 
  newLet= ""; 
  for (var i = 0; i < plugInput.length; i++) {
    // testing if the letter typed matches any plugboard 
    if (firstLet === plugInput[i]){
        newLet = plugOutput[i]; 
    }
  } 

  // runs encoder with new letter 
}