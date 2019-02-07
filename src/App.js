import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './containers/list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Шапка
        </header>
          <section>
              <List/>
          </section>
      </div>
    );
  }
}

export default App;
