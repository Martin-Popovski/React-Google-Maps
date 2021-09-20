import React from 'react';
import Navigation from './components/Nav/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <React.Fragment>
      <Navigation title={'React Google Maps'}/>
      <main>
        <Home/>
      </main>
    </React.Fragment>
  );
}

export default App;
