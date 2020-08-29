import React from 'react';
import Rotor from '../../Rotor';
import Button from 'react-bootstrap/Button';
import PlugboardInput from '../PlugboardInput';

const Home = (props) => {
  return (
    <div className="App">
      <p> Play around with the Enigma and see what you can come up with! </p>
      <input id="input" placeholder="Enter plaintext here..."/>
      <Button variant="outline-primary" onClick={props.textSubmit}>Encrypt!</Button>
      <p>{props.cipherText}</p>
      <footer>*press space at the end of your string*</footer>
      {/* <PlugboardInput /> */}
    </div>
  );
}

export default Home;