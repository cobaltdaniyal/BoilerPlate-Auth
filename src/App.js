import React, { Component } from 'react';
import './App.css';
import Facebook from './components/Facebook'
import Google from './components/Google'
import Mail from './components/Mail';
import Signout from './components/Signout';

class App extends Component {
  render() {
    return (
      <div>
        <Facebook />
        <Google />
        <Mail />
        <Signout />
      </div>
    )
  }
}

export default App;
