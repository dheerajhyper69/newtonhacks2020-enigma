import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/research.css';


class Research extends React.Component {
  constructor(props) {
    super(props);

    this.state = { part: 1 };
  }

  handleNextClick = () => {
    if (this.state.part > 7) {
      this.setState({ part: 1 });
    } else {
      this.setState({ part: this.state.part + 1 });
    }
  }

  render() {
    switch(this.state.part) {
      case 1:
        return (
          <div className="App">
            <h1> Chapter 1: The Introduction </h1>
            <p> 
            Before World War II, the Germans used wires to transfer information, but they were fragile, could be cut, and were hard to move around. Then came wireless communication which allowed the ease, simplicity, and efficiency across the globe on land or overseas. Of course, wireless communication wasn’t everything. Enemies could still easily get a hold of the messages and read the contents. Until the Enigma was invented in 1918, the famous encryption machine used by the Germans during WWII to encode secret messages.
            </p>
            <p>
            So how does the Enigma Machine work, and why was it an “unbreakable code?”
            </p>
            <p>
              The Enigma Machine is a series of substitution ciphers. A substitution cipher is a method of encryption that exchanges the order of the alphabet as the key.
            </p>
            <p> 
              For example, we have the normal English alphabet on the top, and a randomized alphabet (key) on the bottom. 
              <br />
                A,B,C,D,E etc   
              <br />
                Y,T,O,Q,M etc
                <br />
              If we wanted to write “CAB”, using our substitution cipher, it would be “OYT”
            </p>
            <br />
            <span>
            <Button variant="outline-primary" clasName="nextButton" onClick={this.props.enigmaClick}>Go To Enigma.</Button>{' '}
            <Button variant="outline-primary" clasName="nextButton" onClick={this.handleNextClick}>Next...</Button>
          </span>
          </div>
        );
      case 2:
        return <div className = "App">
        <h1> Chapter 2: The What </h1>
          <img src="https://media.defense.gov/2007/Sep/18/2000450331/780/780/0/070918-F-1234S-004.JPG" alt = "Enigma in Action"/>
          <p> German forces used the Enigma machine (left) to transfer secret messages over the radio </p>
          <br />

           <span>
            <Button variant="outline-primary" clasName="nextButton" onClick={this.props.enigmaClick}>Go To Enigma.</Button>{' '}
            <Button variant="outline-primary" clasName="nextButton" onClick={this.handleNextClick}>Next...</Button>
            <br />
            <p font-size= "1px"> Img src: <a href="https://media.defense.gov/2007/Sep/18/2000450331/780/780/0/070918-F-1234S-004.JPG"> media.defense.gov/2007/Sep/18/JPG</a> </p>
          </span>
        </div>; 
      case 3:
       return (
        <div className="App">
          <h1> Chapter 3: The How </h1>
          <p> 
          Doesn’t seem that hard to break right? You can eventually guess the common letters like “e” or “a” and fill out the entire key. 
          </p>
          <p>
            But here’s the catch. The Enigma machine didn’t use only one substitution cipher. It used three! It accomplished this by using three rotors, each with their own substitution key. As an added encryption,each time a letter is pressed, the rotors moved which shifted the entire encryption scheme. This means if you typed “AA”, you would get two completely different letters. 
          </p>
          <br />

          <span>
            <Button variant="outline-primary" clasName="nextButton" onClick={this.props.enigmaClick}>Go To Enigma.</Button>{' '}
            <Button variant="outline-primary" clasName="nextButton" onClick={this.handleNextClick}>Next...</Button>
          </span>
          
        </div>
       );
      case 4: 
        return (
          <div className = "App">
          <h1> Chapter 4: The What (Again, but Picture Form) </h1>
          <img src="https://www.101computing.net/enigma/images/enigma-how-to.png" />
          <p> A visual guide of the Enigma and its parts </p>
        
          <br />
          <span>
            <Button variant="outline-primary" clasName="nextButton" onClick={this.props.enigmaClick}>Go To Enigma.</Button>{' '}
            <Button variant="outline-primary" clasName="nextButton" onClick={this.handleNextClick}>Next...</Button>
            <br /> 
            
              <p font-size= "1px"> Img src: <a href="https://www.101computing.net/enigma/images/enigma-how-to.png"> www.101computing.net/enigma/images/enigma-how-to.png</a> </p>
          </span>

        </div>
        ); 
      case 5:
        return (
          <div className="App">
            <h1> Chapter 5: The Challenge </h1>
            <p> 
            We have the what and how, but we’re missing the why. Why was the Enigma considered uncrackable?
            </p>
            <p>
              The basics of the machine isn’t complicated, people have been using substitution ciphers since Ancient Rome. The Enigma was hard because of the randomness. Each rotor could be positioned in 26 different starting positions which changed daily. Doing some calculations, an Enigma has 158,962,555,217,826,360,000 initial start positions! 
              <br />
                I wouldn’t want to test that many possibilities every day, would you?  
            </p>
            <br />

            <span>
            <Button variant="outline-primary" clasName="nextButton" onClick={this.props.enigmaClick}>Go To Enigma.</Button>{' '}
            <Button variant="outline-primary" clasName="nextButton" onClick={this.handleNextClick}>Next...</Button>
          </span>
          </div>
        );
      case 6:
        return (
          <div className = "App">
        
          <h1> Chapter 6: The Breakthrough </h1>
          <p> Although the Enigma seemed unbreakable, there were multiple vulnerabilities that the researchers at Bletchley Park found.
          <ol> 
          <li> The reflector at the end could not match the same letter with itself. That greatly reduces the possibilities needed to test </li>
          <li>The same messages were broadcasted everyday (the weather and the ending signature) which made it easy for researchers to guess the meaning </li>
          </ol>
          </p>
          <p>
          With that in mind, Alan Turing and Gordon Welchman invented the Bombe Machine could solve an encrypted message in under 20 minutes by finding the settings of the rotors and plugboard.
          It consisted of 36 Enigma machines inside that would test multiple combinations until a readable message would be produced. Although there were many unreadable messages at first, the Bombe Machine turned the tide of the war and the world of cryptography. 
          </p>
          <br />
          
          <span>
            <Button variant="outline-primary" clasName="nextButton" onClick={this.props.enigmaClick}>Go To Enigma.</Button>{' '}
            <Button variant="outline-primary" clasName="nextButton" onClick={this.handleNextClick}>Next...</Button>
          </span>

        </div>
        );
      case 7: 
        return (
          <div className = "App">
          <h1> Chapter 7: The Challenger </h1>
          <img src= "https://upload.wikimedia.org/wikipedia/commons/7/7a/Wartime_picture_of_a_Bletchley_Park_Bombe.jpg"  alt= "Bombe Machine" />
          <p> The Bombe Machine used to crack the Enigma </p>
          <span>
            <Button variant="outline-primary" clasName="nextButton" onClick={this.props.enigmaClick}>Go To Enigma.</Button>{' '}
            <Button variant="outline-primary" clasName="nextButton" onClick={this.handleNextClick}>Next...</Button>
            <br />
          <a href ="https://upload.wikimedia.org/wikipedia/commons/7/7a/Wartime_picture_of_a_Bletchley_Park_Bombe.jpg"> upload.wikimedia.org/wikipedia/commons/Wartime_picture_of_a_Bletchley_Park_Bombe.jpg </a>
          </span>

        </div>
        );
      case 8: 
        return (
          <div className = "App">
          <h1> Chapter 8: The Application </h1>
          <p> The Enigma was more than just a wartime machine. It proved that simply hiding the machine and its method of encryption could not last. This laid the groundwork for the fundamental principles of cryptography: a encryption scheme should be “secure,” even if all the details, except for the key, are publicly known.
          </p>
          <p> 
            The Enigma also proved that nothing can be completely secure for long and someone along the way will come up with something completely out of the blue and change the world. 
            <br />
            So what are you waiting for?  
          </p>
          <br />
          <span>
            <Button variant="outline-primary" clasName="nextButton" onClick={this.props.enigmaClick}>Go To Enigma.</Button>{' '}
            <Button variant="outline-primary" clasName="nextButton" onClick={this.handleNextClick}>Next...</Button>
          </span>
          </div>
        );
      default:
        return <div className="App">There was an Error</div>;
    }
  }
}

export default Research;