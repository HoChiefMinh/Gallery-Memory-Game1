import React, { Component } from 'react';
import paintings from './paintings.json';
import ArtGallery from './ArtGallery/index';
import Wrapper from './Wrapper/index';
import './index.css';
// import './App.css'

let highScoreCount = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    paintings,
    score: 0,
    highScore: 0,
    displayAlert: 0,
    message: 'Click on a work of art, but do not be greedy!'
  };

  handleClickedImage = id => {
    const paintingSelected = this.state.paintings.filter(
      paintings => paintings.id === id
    );
    console.log(paintingSelected);

    if (this.state.score < 11 && !paintingSelected[0].painting) {
      paintingSelected[0].painting = true;
      // console.log(paintingSelected);
      this.setState({ paintings });
      // console.log(paintings);
      this.randomize();
      this.setState({ score: this.state.score + 1 });
      this.setState({ message: 'Magnifecent Work, Keep it up!' });
      if (this.state.highScore <= this.state.score) {
        highScoreCount++;
        this.setState({ highScore: highScoreCount });
      }
    } else if (this.state.score <= 11 && paintingSelected[0].painting) {
      this.setState({ message: "Tsk tsk, don't be greedy!" });
      this.setState({ score: 0 });
      paintings.forEach(paintings => {
        paintings.painting = false;
      });
      this.setState({ paintings });
      console.log(paintings);
    } else if (this.state.score === 11 && !paintingSelected[0].painting) {
      this.setState({
        message:
          'Congratulations! You masterfully selected each individual work of Art!'
      });
      this.setState({ highScore: 12 });
      this.setState({ score: 0 });

      paintings.forEach(paintings => {
        paintings.painting = false;
      });

      this.setState({ paintings });
      console.log(paintings);

      this.randomize();
    }
  };

  randomize = () => {
    let newArray = paintings;
    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  render() {
    return (
      <React.Fragment>
        <div className='row'>
          <h1 className='main-header'>Museum Memory Game</h1>
          <div className='col-md-3 col-right'>
            <h6>Score: {this.state.score}</h6>
          </div>
          <div className='col-md-3 col-right'>
            <h6>High Score: {this.state.highScore}</h6>
          </div>
          <div className='col-md-12 col-right'>{this.state.message}</div>
        </div>
        <Wrapper>
        {/* <img src='/images/1bg.jpg' alt='empty gallery' /> */}
          {this.state.paintings.map(paintings => (
            <ArtGallery
              key={paintings.id}
              id={paintings.id}
              artist={paintings.artist}
              title={paintings.title}
              year={paintings.year}
              image={paintings.image}
              handleClickedImage={this.handleClickedImage}
            />
          ))}
          <footer className='footer-container'>
            <p className='footer-content'>
              Museum Memory Game © 2019{' '}
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
