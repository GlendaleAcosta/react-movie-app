import React from 'react';
import { Route } from 'react-router';
import NavbarContainer from 'containers/NavbarContainer';
import SidebarContainer from 'containers/SidebarContainer';
import GalleryContainer from 'containers/GalleryContainer';
import MoviePageContainer from 'containers/MoviePageContainer';

const styles = {
  marginTop: '56px',
};
const App = () => {
  return (
    <div className="container-fluid">
      <Route path={'*'} component={NavbarContainer} />
      <div style={styles} className="row">
        <Route path={'*'} component={SidebarContainer} />
        <Route exact path={'/'} component={GalleryContainer} />
        <Route exact path={'/movies/:filter'} component={GalleryContainer} />
        <Route path={'/movie/:id'} component={MoviePageContainer} />
      </div>
    </div>
  );
};

export default App;
