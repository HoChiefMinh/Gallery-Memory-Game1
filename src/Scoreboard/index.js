import React from 'react';
import './scoreboard.css';

// function Scoreboard(props) {
//   return (
//     <header className='score'>
//       <div className='row'>
//         <div className='col-md-6 col-left'>
//           <h5>{props.title}</h5>
//         </div>
//         <div className='col-md-3 col-right'>
//           <h6>Current Score {props.score}</h6>
//         </div>
//         <div className='col-md-3 col-right'>
//           <h6>High Score: {props.highScore}</h6>
//         </div>
//       </div>
//       <div className='row'>
//         <div className='col-md-12 col-right'>
//           <h6>
//             Click on a famous art work, but don't click on it more than once!
//           </h6>
//         </div>
//       </div>
//     </header>
//   );
// }
const Scoreboard = props => {
  (
      <div className="navbar navbar-expand-lg text-white">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item space">
                  <h1>Art Gallery Game</h1>
              </li>
              <li id='message' className="nav-item">
                  <h3>{props.message}</h3>
              </li>
              <li id='score' className="nav-item">
                  <h3>Score: {props.score}</h3>
              </li>
              <li id='highscore' className="nav-item">
                  <h3>High Score: {props.highScore}</h3>
              </li>
          </ul>
      </div>  
  );
}

export default Scoreboard;
