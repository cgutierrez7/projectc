import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/home';
import Friends from './pages/friends';
import Navbar from './features/navbar/navbar'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact={true} path={'/'} component={Home} />
        <Route exact={true} path={'/pages/friends'} component={Friends} />
      </div>
    </Router>
  );
}

export default App;
