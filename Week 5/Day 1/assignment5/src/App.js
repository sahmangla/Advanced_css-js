import logo from './logo.svg';
import './App.css';
import Category from "./Category";
import React from 'react';


function App() {

  return (
    <React.Fragment>
    <Category/>
    <Category category=""></Category>
    <Category category="headphones"></Category>
    <Category category="sports"></Category>
    <Category category="mobiles"></Category>
    </React.Fragment>

  );
}

export default App;
