import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import { Button } from 'reactstrap';

import Navigation from "./components/Navigation"
import SignUp  from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div>
      
      <Navigation/>
      
      <SignUp/>
    
    
  
      
    </div>
  );
}

export default App;
