import React from 'react';
import ReactDOM from 'react-dom';
import PhotoCarousel from './PhotoCarousel.jsx';

let roomId = window.location.href.split('/')[4];

ReactDOM.render( <PhotoCarousel roomId={roomId} />, document.getElementById('photo-carousel-service'));
