import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rotor from './Rotor';

const slowRotor = ["B", "D", "F", "H", "J", "L", "C", "P","R", "T", "X", "V", "Z","N", "Y", "E", "I", "W", "G", "A", "K", "M", "U", "S", "Q", "O"];

const medRotor = ["A", "J", "D", "K", "S", "I", "R", "U", "X", "B", "L", "H", "W", "T", "M", "C", "Q", "G", "Z", "N", "P", "Y", "F", "V", "O", "E"];

const fastRotor = ["E", "K", "M", "F","L", "G", "D", "Q", "V", "Z", "N", "T", "O", "W", "Y", "H", "X", "U", "S", "P", "A", "I", "B", "R", "C", "J"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      plainText: '',
      
    };
  }

  isLetter = (str) => {
    return str.length === 1 && (str.match(/[a-z A-Z]/i));
  }

  handleTextChange = (e) => {
    let symbollessString = '';

    for(var i = 0; i < e.target.value.length; i++) {
      if (this.isLetter(e.target.value.charAt(i))) symbollessString = symbollessString + e.target.value.charAt(i);
    }

    this.setState({ plainText: symbollessString });
    this.setState({ cipherText: Rotor.encoder(Rotor.encoder(Rotor.encoder(Rotor.reflectorEncoder(Rotor.encoder(Rotor.encoder(Rotor.encoder(this.state.plainText, slowRotor), medRotor), fastRotor)), slowRotor), medRotor), fastRotor) });
  }

  render() {
      return (
        <div className="App">
          <p> Play around with the Enigma and see what you can come up with! </p>
          <input onChange={this.handleTextChange} placeholder="Enter plaintext here..."/>
          <p>{this.state.cipherText}</p>
          <footer>*press space at the end of your string*</footer>
        </div>
      );
    }
  }

export default App;