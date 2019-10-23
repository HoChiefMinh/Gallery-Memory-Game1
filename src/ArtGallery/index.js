import React from 'react';
import './card.css';

function ArtGallery (props) {
  return (
    <div className='card'> 
      <div className='img-container'>
        <img className='painting' alt={props.artist} src={props.image} onClick={() => props.handleClickedImage(props.id)} />
      </div>
      <div className='overlay'>
        <div className='text'>
          {props.title}
          <br />
          by
          <br />
          {props.artist} in {props.year}
        </div>
      </div>
    </div>
  );
}
export default ArtGallery;
