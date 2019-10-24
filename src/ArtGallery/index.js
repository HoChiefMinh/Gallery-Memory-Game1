import React from 'react';
import './card.css';

function ArtGallery(props) {
  return (
    <div className='card'>
      <div className='img-container'>
        <img
          className='each-painting' 
          alt={props.title}
          src={props.image}
          onClick={() => props.handleClickedImage(props.id)}
        />
      </div>
      <div className='content'>
        <ul>
          <li>
            <strong>Name:</strong> {props.title}
          </li>
          <li>
            <strong>Artist:</strong> {props.artist}
          </li>
          <li>
            <strong>Year:</strong> {props.year}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ArtGallery;
