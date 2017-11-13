import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { connect } from 'react-redux';
import { closeModal } from 'actions/modalActions';
import SignUpContainer from 'containers/SignUpContainer';

class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal
        visible={this.props.modalReducer.showModal}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={() => this.props.dispatch(closeModal())}
      >
        <SignUpContainer />
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    modalReducer: state.modalReducer,
  };
}

export default connect(mapStateToProps)(ModalContainer);
