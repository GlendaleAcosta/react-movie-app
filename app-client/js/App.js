import React from 'react';
import { Route } from 'react-router';
import Navbar from 'components/Navbar';

const App = () => {
  return (
    <div>
      <Route path="*" component={Navbar} />
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
