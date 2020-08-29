import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/cover.css';

const Cover = (props) => {
  return (
    <div className="center">
      <h1>The Enigma</h1>
      <h2>By The Turing Point</h2>
      <Button variant="outline-primary" onClick={props.onCoverClick} id="button">Enter</Button>
      <Button variant="outline-primary" onClick= {props.onResearchClick} id="button"> Research </Button>
    </div>
    // test
  );
}

export default Cover;