import React, { Component } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import eventsReducer from './reducers'

const store = createStore(eventsReducer, applyMiddleware(thunk))

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
