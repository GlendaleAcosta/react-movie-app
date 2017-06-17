import React, { Component } from 'react';
import Gallery from 'components/Gallery/Gallery';

const styles = {
  backgroundColor: 'lightblue',
  height: '2000px',
};

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="push-sm-2 col-sm-10" style={styles}>
        <Gallery />
      </div>
    );
  }
}

export default GalleryContainer;
