import React, { Component } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import eventsReducer from './reducers'

const store = createStore(eventsReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Calendar />
        </div>
      </Provider>
    );
  }
}

export default App;
