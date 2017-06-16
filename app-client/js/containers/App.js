import React from 'react';
import { Route } from 'react-router';
import NavbarContainer from 'containers/NavbarContainer';

const App = () => {
  return (
    <div>
      <Route path={'*'} component={NavbarContainer} />
    </div>
  );
};

export default App;
