import React, { Component } from 'react';

import { Provider } from 'react-redux';
import configureStore from './configureStore';

import './App.css';
import HomePage from './containers/HomePage';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>Github Explorer</h1>
          </header>
          <section>
            <HomePage />
          </section>
        </div>
      </Provider>
    );
  }
}

export default App;
