import React from 'react';
// import { Route } from 'react-router';
import { Route } from 'react-router-dom';

import NavbarContainer from 'containers/NavbarContainer';
import SidebarContainer from 'containers/SidebarContainer';
import GalleryContainer from 'containers/GalleryContainer';
import MoviePageContainer from 'containers/MoviePageContainer';
import LoginContainer from 'containers/LoginContainer';
import SignUpContainer from 'containers/SignUpContainer';
import ModalContainer from 'containers/ModalContainer';

const styles = {
  marginTop: '56px',
};
const App = (props) => {
  return (
    <div className="container-fluid">
      <Route path={'*'} component={NavbarContainer} />
      <div style={styles} className="row">
        <Route path={'*'} component={SidebarContainer} />
        <Route exact path={'/'} component={GalleryContainer} />
        <Route exact path={'/movies/:filter'} component={GalleryContainer} />
        <Route exact path={'/movies/genre/:genre'} component={GalleryContainer} />
        <Route exact path={'/movies/search/:query'} component={GalleryContainer} />
        <Route path={'/movie/:id'} component={MoviePageContainer} />
        <Route exact path={'/login'} component={LoginContainer} />
        <Route exact path={'/sign-up'} component={SignUpContainer} />
      </div>
      <ModalContainer {...props} />
    </div>
  );
};

export default App;

// function mapStateToProps(state) {
//   return {
//     modalReducer: state.modalReducer,
//   };
// }

// export default connect(mapStateToProps)(App);
