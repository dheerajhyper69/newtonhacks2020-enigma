import React from 'react';
import Rotor from '../Rotor'

export default function Input(props) {
  return (
    <div>
      <input onChange={props.handleTextChange} placeholder="Enter plaintext here..."/>
    </div>
  );
}




