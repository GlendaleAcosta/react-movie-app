import React from 'react';
import { Route } from 'react-router';
import NavbarContainer from 'containers/NavbarContainer';
import SidebarContainer from 'containers/SidebarContainer';

const styles = {
  backgroundColor: 'lightblue',
  marginTop: '56px',
};
const App = () => {
  return (
    <div>
      <Route path={'*'} component={NavbarContainer} />
      <div style={styles}>
        <Route path={'*'} component={SidebarContainer} />
        <div style={{ height: '2000px' }} />
      </div>
    </div>
  );
};

export default App;
