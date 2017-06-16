import React, { Component } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';

class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Sidebar />
    );
  }
}

export default SidebarContainer;
