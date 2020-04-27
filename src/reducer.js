import { combineReducers } from 'redux';
import goods from './components/GoodsList/reducer';
import signIn from './components/SignInForm/reducer';

export default combineReducers({
    goods,
    signIn,
})