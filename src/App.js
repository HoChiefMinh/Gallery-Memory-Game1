import React, { Component } from 'react';
import paintings from './paintings.json';
import ArtGallery from './ArtGallery/index';
import Wrapper from './Wrapper/index';
import './index.css';
// import './App.css';

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
    return (
      <React.Fragment>
        <nav className="nav-container">
            <h1 className="main-header">Art Gallery Clicky Game</h1>
            <ul className="nav-elements">
              <li className="each-nav-element">Score: {this.state.score}</li>
              <li className="each-nav-element">High Score: {this.state.highScore}</li>
              <li className="each-nav-element">{this.state.status}</li>
            </ul>
          </nav>
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
          <footer className='footer-container'>
            <p className='footer-content'>
              © 2019{' '}
              <a
                className='github-link'
                href='https://hochiefminh.github.io/Gallery-Memory-Game1/'
              >
                Minh Pham
              </a>
            </p>
          </footer>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
