import React, { Component } from 'react';
import Navbar from 'components/Navbar/Navbar';

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

export default NavbarContainer;
