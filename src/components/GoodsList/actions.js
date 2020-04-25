import { SET_GOODS, SET_UPDATED_AT } from './constants';

export const setGoods = (goods) => ({
    type: SET_GOODS,
    payload: goods,
});

export const setUpdatedAt = () => ({
    type: SET_UPDATED_AT,
    payload: Date.now(),
});