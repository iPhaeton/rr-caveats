import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import { signInFlow, signInWatcher } from './components/SignInForm/saga';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [sagaMiddleware];

    const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));

    sagaMiddleware.run(signInFlow);

    return store;
};

export default configureStore();