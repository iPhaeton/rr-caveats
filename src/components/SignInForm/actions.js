import { START_SIGNIN, CANCEL_SIGNIN, SET_VISIBLE, SET_ERROR, SIGN_IN, SET_VALUE } from './constants';

export const startSignIn = () => ({
    type: START_SIGNIN,
});

export const cancelSignIn = () => ({
    type: CANCEL_SIGNIN,
});

export const signIn = (values) => ({
    type: SIGN_IN,
    payload: values,
})

export const setVisible = (visible) => ({
    type: SET_VISIBLE,
    payload: visible,
});

export const setValue = (value) => ({
    type: SET_VALUE,
    payload: value,
})

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
});