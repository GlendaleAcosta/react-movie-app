import React, { Component } from 'react';
import PropTypes from 'prop-types';

const containerStyles = {
  display: 'flex',
  paddingRight: '8px',
  paddingLeft: '10px',
  alignItems: 'stretch',
};
const movieStyle = {
  width: '25%',
  boxSizing: 'border-box',
  padding: '10px',
};

const titleStyle = {
  color: '#fff',
  fontSize: '13px',
  marginBottom: '5px',
  marginTop: '5px',
};

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
  }

  decrementPage = () => {
    const { selectedPage } = this.state;
    if (selectedPage - 1 > -1) {
      this.setState({ selectedPage: selectedPage - 1});
    }
  }
 
  renderMainCast = () => {
    const { castArr } = this.props;
    const { selectedPage } = this.state;
    
    return castArr[selectedPage].map((castMember) => {
      const innerMovieStyle = {
        backgroundColor: 'maroon',
        width: '100%',
        height: '270px',
        backgroundImage: `url('http://image.tmdb.org/t/p/w185${castMember.profile_path}')`,
        backgroundSize: 'cover',
        cursor: 'pointer',
      };
      return (
        <div key={castMember.id} style={movieStyle}>
          <div style={innerMovieStyle} />
          <p style={titleStyle}>
            Cast: {castMember.character}
          </p>
          <p style={titleStyle}>
            Name: {castMember.name}
          </p>
        </div>
      )
    });
  }

  render() {
    const { credits } = this.props;
    return (
      <div className="movie-cast-container">
        <div className="row m-0 " style={containerStyles}>
          <p className="lead text-white col-md-12">Main Cast:</p>
          <div onClick={this.decrementPage} className="cast-pointer" >
            <i className="material-icons text-white lg-icon">arrow_back</i>
          </div>
          <div className="cast-carousel-container" style={containerStyles}>
            {this.renderMainCast()} 
          </div>
          <div onClick={this.incrementPage} className="cast-pointer">
            <i className="material-icons lg-icon text-white">arrow_forward</i>
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
