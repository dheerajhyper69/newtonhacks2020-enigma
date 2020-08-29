import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rotor from './Rotor';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// pages
import Cover from './components/pages/Cover';
import Home from './components/pages/Home';
import Research from './components/pages/Research';

const slowRotor = ["B", "D", "F", "H", "J", "L", "C", "P","R", "T", "X", "V", "Z","N", "Y", "E", "I", "W", "G", "A", "K", "M", "U", "S", "Q", "O"];

const medRotor = ["A", "J", "D", "K", "S", "I", "R", "U", "X", "B", "L", "H", "W", "T", "M", "C", "Q", "G", "Z", "N", "P", "Y", "F", "V", "O", "E"];

const fastRotor = ["E", "K", "M", "F","L", "G", "D", "Q", "V", "Z", "N", "T", "O", "W", "Y", "H", "X", "U", "S", "P", "A", "I", "B", "R", "C", "J"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'cover',
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
    this.setState({ cipherText: Rotor.revEncoder(Rotor.revEncoder(Rotor.revEncoder(Rotor.reflectorEncoder(Rotor.encoder(Rotor.encoder(Rotor.encoder(this.state.plainText, slowRotor), medRotor), fastRotor)), fastRotor), medRotor), slowRotor) });
  }

  handleCoverClick = () => {
    this.setState({ page: 'home' });
  }

  handleResearchClick = () => {
    this.setState({ page: 'research' });
  }

  handleEnigmaClick = () => {
    this.setState({ page: 'home' });
  }

  textSubmit = (e) => {
     let input = document.getElementById('input');
    // let symbollessString = '';

    // for(var i = 0; i < input.value; i++) {
    //   if (this.isLetter(input.value.charAt(i))) symbollessString = symbollessString + e.target.value.charAt(i);
    // }

    this.setState({ plainText: input.value });
    this.setState({ cipherText: Rotor.revEncoder(Rotor.revEncoder(Rotor.revEncoder(Rotor.reflectorEncoder(Rotor.encoder(Rotor.encoder(Rotor.encoder(this.state.plainText, slowRotor), medRotor), fastRotor)), slowRotor), medRotor), fastRotor) });
  }

  pageSelect = () => {
    switch(this.state.page) {
      case 'cover':
        return <Cover onCoverClick={this.handleCoverClick} onResearchClick={this.handleResearchClick}/>
      case 'home':
        return <Home handleTextChange={this.handleTextChange} cipherText={this.state.cipherText} textSubmit={this.textSubmit} />
      case 'research':
        return <Research enigmaClick={this.handleEnigmaClick} />
      default:
        return <p>Error</p>
    }
  }
  render() {
    return(
      <div>
         {/*} <Navbar>
           <Nav>
           
           </Nav>
         </Navbar> */}
        {this.pageSelect()}
      </div>  
    );
  }
}
export default App;