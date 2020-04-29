import React, { Fragment } from 'react';
import './App.css';
import InputsForm from './components/InputsForm/InputsForm';
import { Provider } from 'react-redux';
import store from './store';
import GoodsList from './components/GoodsList/Goods';
import SignInForm from './components/SignInForm/SignInForm';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <InputsForm />
        {/* <GoodsList /> */}
        {/* <SignInForm /> */}
      </Fragment>
    </Provider>
  );
}

export default App;
