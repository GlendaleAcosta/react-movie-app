import React from 'react';
import { Route } from 'react-router';
import Navbar from 'containers/Navbar';

const App = () => {
  return (
    <div>
      <Route path={'*'} component={Navbar} />
    </div>
  );
};

export default App;
