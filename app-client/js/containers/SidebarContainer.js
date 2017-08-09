import React, { Component } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';
import { connect } from 'react-redux';

class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Sidebar {...this.props} />
    );
  }
}
function mapStateToProps(state) {
  return {
    sidebarReducer: state.sidebarReducer,
  };
}
// function matchDispatchToProps(dispatch) {
//   return bindActionCreators({ getMovies });
// }
export default connect(mapStateToProps)(SidebarContainer);
