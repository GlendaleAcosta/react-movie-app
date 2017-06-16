import React, { Component } from 'react';

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
        <h1>GalleryContainer</h1>
      </div>
    );
  }
}

export default GalleryContainer;
