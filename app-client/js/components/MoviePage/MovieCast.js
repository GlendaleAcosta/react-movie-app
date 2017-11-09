import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: 0,
    };
  }

  incrementPage = () => {
    const { castArr } = this.props;
    const { selectedPage } = this.state;
    if (selectedPage + 1 < castArr.length) {
      this.setState({ selectedPage: selectedPage + 1});
    }
    console.log(selectedPage);
  }

  decrementPage = () => {
    const { selectedPage } = this.state;
    if (selectedPage - 1 > -1) {
      this.setState({ selectedPage: selectedPage - 1});
    }
    console.log(selectedPage);
  }
 
  renderMainCast = () => {
    console.log(this.props);
    const { castArr } = this.props;
    const { selectedPage } = this.state;
    
    return castArr[selectedPage].map((castMember) => {
      return (
        <div key={castMember.id} className="card col-md-2">
          <img className="card-img-top"      src="http://image.tmdb.org/t/p/w342/iczG0WVwwifbOTY5JWvBVz9DVaj.jpg"
            alt="Card image cap" />
          <div className="card-block">
            <h4 className="card-title">{castMember.character}</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      )
    });
  }

  render() {
    const { credits } = this.props;
    this.renderMainCast();
    return (
      <div className="movie-cast-container">
        <div className="row m-0">
          <p className="lead text-white col-md-12">Main Cast:</p>
          <div onClick={this.decrementPage} className="card col-md-2">
            <div className="card-block">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">This is the left Arrow</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
            {this.renderMainCast()} 
          <div onClick={this.incrementPage} className="card col-md-2">
            <div className="card-block">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">This is the right arrow!</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieCast.propTypes = {
  credits: PropTypes.object.isRequired,
};

export default MovieCast;
