import React from 'react';
import Photo from './Photo.jsx';

class LightBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPic: props.currentPic,
    };
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
  }

  nextClick () {
    this.setState({ currentPic: (this.state.currentPic + 1) % this.props.photos.length});
  }

  prevClick () {
    if (this.state.currentPic > 0) {
      this.setState({ currentPic: this.state.currentPic - 1 });
    } else {
      this.setState({ currentPic: this.props.photos.length - 1 });
    }
  }

  render () {
    return (
      <div className="div-lightbox-container">
        <button onClick={this.prevClick} className="div-photo-lightbox-prev-button">
          <i className="glyphicon glyphicon-menu-left"></i>
        </button>
        <Photo photo={this.props.photos[this.state.currentPic]} index={undefined} onClick={() => {}}></Photo>
        <button onClick={this.nextClick} className="div-photo-lightbox-next-button">
          <i className="glyphicon glyphicon-menu-right"></i>
        </button>
      </div>
    );
  }
}

export default LightBox;
