import React from 'react';
import Rotor from '../../Rotor';

const Home = (props) => {
  return (
    <div className="App">
      <p> Play around with the Enigma and see what you can come up with! </p>
      <input onChange={props.handleTextChange} placeholder="Enter plaintext here..."/>
      <p>{props.cipherText}</p>
      <footer>*press space at the end of your string*</footer>
    </div>
  );
}

export default Home;