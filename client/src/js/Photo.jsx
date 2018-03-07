import React from 'react';

const Photo = props => (
  <div className="div-photo-carousel-photo" onClick={() => props.onClick(props.index)}>
    <img src={props.photo.large}></img>
  </div>
);

export default Photo;
