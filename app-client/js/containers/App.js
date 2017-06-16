import React from 'react';
import { Route } from 'react-router';
import NavbarContainer from 'containers/NavbarContainer';
import SidebarContainer from 'containers/SidebarContainer';
import GalleryContainer from 'containers/GalleryContainer';

const styles = {
  marginTop: '56px',
};
const App = () => {
  return (
    <div className="container-fluid">
      <Route path={'*'} component={NavbarContainer} />
      <div style={styles} className="row">
        <Route path={'*'} component={SidebarContainer} />
        <Route path={'*'} component={GalleryContainer} />
      </div>
    </div>
  );
};

export default App;
