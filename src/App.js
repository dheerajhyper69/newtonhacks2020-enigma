import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Rotor from './Rotor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      plainText: '',
      
    };
  }

  handleTextChange = (e) => {
    this.setState({ plainText: e.target.value });
    this.setState({ cipherText: Rotor.encoder(this.state.plainText) });
  }

  render() {
      return (
        <div className="App">
          <Input handleTextChange={this.handleTextChange} />
          <p>{this.state.cipherText}</p>
        </div>
      );
    }
  }

export default App;