import './App.css';
import './assets/sass/components/home.scss';
import './assets/sass/components/variables.scss'
import './assets/sass/components/nav-bar.scss';
import './assets/sass/components/card.scss';

import React, { Component } from 'react'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}

export default App;
