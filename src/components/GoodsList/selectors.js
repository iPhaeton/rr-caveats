import { createSelector } from 'reselect';

export const getGoods = state => state.goods.list;
export const getUpdatedAt = state => state.goods.updatedAt;

export const getSortedGoods = state => {
    const goods = getGoods(state);
    return goods.slice().sort((a, b) => a.price - b.price);
};

export const getSortedGoodsMemoized = createSelector(
    getGoods,
    goods => {
        console.log('getSortedGoodsMemoized')
        return goods.slice().sort((a, b) => a.price - b.price)
    },
);
