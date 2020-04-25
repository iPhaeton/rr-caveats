import { SET_GOODS, SET_UPDATED_AT } from './constants';

const initialState = {
    list: [],
    updatedAt: null,
};

const goods = (state = initialState, action) => {
    switch (action.type) {
        case SET_GOODS:
            return {
                ...state,
                list: action.payload,
            };

        case SET_UPDATED_AT:
            return {
                ...state,
                updatedAt: action.payload,
            }

        default:
            return state;
    }
};

export default goods;