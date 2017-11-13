import React, { Component } from 'react';
import Navbar from 'components/Navbar/Navbar';
import { connect } from 'react-redux';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <Navbar {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    modalReducer: state.modalReducer,
  };
}

export default connect(mapStateToProps)(NavbarContainer);
