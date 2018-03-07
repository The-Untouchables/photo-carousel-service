import React from 'react';
import Photo from './Photo.jsx';

const PrevButton = clickHandler => (
  <button onClick={clickHandler} className="div-photo-lightbox-prev-button">
    <i className="glyphicon glyphicon-menu-left"></i>
  </button>
);

const NextButton = clickHandler => (
  <button onClick={clickHandler} className="div-photo-lightbox-next-button">
    <i className="glyphicon glyphicon-menu-right"></i>
  </button>
);

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
    if (this.state.currentPic < this.props.photos.length - 1) {
      this.setState({ currentPic: this.state.currentPic + 1 });
    }
  }

  prevClick () {
    if (this.state.currentPic > 0) {
      this.setState({ currentPic: this.state.currentPic - 1 });
    }
  }

  render () {
    let prevButton = <div></div>;
    let nextButton = <div></div>;

    if (this.state.currentPic > 0) {
      prevButton = PrevButton(this.prevClick);
    }

    if (this.state.currentPic !== this.props.photos.length - 1) {
      nextButton = NextButton(this.nextClick);
    }

    return (
      <div className="div-lightbox-container">
        {prevButton}
        <Photo photo={this.props.photos[this.state.currentPic]} index={undefined} onClick={() => {}}></Photo>
        {nextButton}
      </div>
    );
  }
}

export default LightBox;
