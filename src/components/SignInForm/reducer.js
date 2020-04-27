import { SET_VISIBLE, SET_ERROR, SET_VALUE } from './constants';

const initialState = {
    visible: false,
    value: null,
    error: null,
}

const signIn = (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIBLE:
            return {
                ...state,
                visible: action.payload,
            };

        case SET_VALUE:
            return {
                ...state,
                value: action.payload,
            };

        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default signIn;