import './App.css';
import './assets/sass/components/home.scss';
import './assets/sass/components/variables.scss'
import './assets/sass/components/nav-bar.scss';
import './assets/sass/components/card.scss';
import './assets/sass/components/book-details.scss';

import React, { Component } from 'react'
import HomePage from './pages/HomePage'

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
      </div>
    )
  }
}

export default App;
