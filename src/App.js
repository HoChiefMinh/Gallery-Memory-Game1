import React from 'react';
import paintings from './artGallery.json';
import './App.css';

// shuffle upon each click
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    paintings: 0, 
    score: 0,
    highScore: 0,
    displayAlert: 0,
    displaySuccess: 0,
    clickedPainting: []
  };
}

export default App;
