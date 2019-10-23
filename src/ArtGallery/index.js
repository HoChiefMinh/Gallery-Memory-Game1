import React from 'react';
import './style.css';

const ArtGallery = props => {
  (
    <div className='card' onClick={() => props.removeFriend(props.id)}>
      <div className='img-container'>
        <img alt={props.artist} src={props.image} />
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
