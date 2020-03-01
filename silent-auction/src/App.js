import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AuctionSignUp from './Components/Signup/SignUp';
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Components/Home/HomePage'
import AuctionLogin from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path='/'>
        <HomePage/>
      </Route>
      <Route path='/signup'>
        <AuctionSignUp />
      </Route>
      <Route path='/login'>
        <AuctionLogin />
      </Route>
      
     </div>
  );
}

export default App;
