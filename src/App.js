import React, { Fragment } from 'react';
import './App.css';
import InputsList from './components/InputsForm/InputsForm';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <InputsList />
      </Fragment>
    </Provider>
  );
}

export default App;
