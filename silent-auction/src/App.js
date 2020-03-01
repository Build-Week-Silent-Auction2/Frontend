import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AuctionLogin from './Components/Login/AuctionLogin';
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Components/Home/HomePage'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path='/'>
        <HomePage/>
      </Route>
      <Route path='/login'>
        <AuctionLogin />
      </Route>
      
     </div>
  );
}

export default App;
