import React from 'react';
import axios from 'axios';
import Photo from './Photo.jsx';
import LightBox from './LightBox';
import ReactModal from 'react-modal';
import '../../css/style.scss';

class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentPic: undefined
    }
    this.photos = [];
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal (index) {
    this.setState({
      showModal: true,
      currentPic: index
    });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  componentWillMount() {
    ReactModal.setAppElement('body');
  }

  componentDidMount() {
    this.getPhotosForRoom(this.props.roomId);
  }

  getPhotosForRoom(roomId) {
    axios.get(`/api/rooms/${roomId}/carousel`, { crossdomain: true })
      .then((photos) => {
        this.photos = photos.data.photos;
        if (this.photos.length > 0) {
          this.setState({
            currentPic: 0
          });
        }
      })
      .catch(err => {
        let debug = err;
        console.log('Error retrieving room ', roomId);
      });
  }

  render () {
    return (
      <div className="div-photo-carousel">
        <ReactModal
          isOpen={this.state.showModal}
          className="modal-lightbox-container"
          contentLabel="LightBox"
          onRequestClose={this.handleCloseModal}
        >
          <div className="modal-lightbox-container-content">
              <button className="button-lightbox-modal-close" onClick={this.handleCloseModal}>
                <i className="glyphicon glyphicon-remove"></i>
              </button>
            <div className="div-lightbox-scroll-wrapper">
              <LightBox photos={this.photos} currentPic={this.state.currentPic}></LightBox>
            </div>
          </div>
        </ReactModal>
        {this.photos !== undefined ? this.photos.map((photo, idx) => <Photo key={idx} index={idx} onClick={this.handleOpenModal} photo={photo}></Photo>) : <div></div>}
      </div>
    );
  }
}

export default PhotoCarousel;
