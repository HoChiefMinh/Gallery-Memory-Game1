import React, { Component } from 'react';
import './App.css';
import paintings from './paintings.json';
import ArtGallery from './ArtGallery/index';
import Wrapper from './Wrapper/index';

// // shuffle upon each click
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }
// let highScoreCount = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    paintings, 
    score: 0,
    // highScore: 0,
    displayAlert: 0,
    displaySuccess: 0,
    clickedPainting: []
  };

  render() {
    return(
      <React.Fragment>
        <Wrapper>
          {this.state.paintings.map(paintings => (
            <ArtGallery
              key={paintings.id}
              id={paintings.id}
              artist={paintings.artist}
              title={paintings.title}
              year={paintings.year}
              image={paintings.image}
              clickedPainting={this.clickedPainting}
            />
          ))}
        </Wrapper>
      </React.Fragment>
    )
  }
}


export default App;
