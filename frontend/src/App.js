import React from 'react';
import Navigation from './navigation';
import LogingManager from './LogingManager';

function App() {
  return (
      <LogingManager>
        <Navigation />
      </LogingManager>
  );
}

export default App;
