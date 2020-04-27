import { createSelector } from 'reselect';

export const getGoods = state => state.goods.list;
export const getUpdatedAt = state => state.goods.updatedAt;

export const getSortedGoods = state => {
    console.log('selecting');
    const goods = getGoods(state);
    return goods.slice().sort((a, b) => a.price - b.price);
};

export const getSortedGoodsMemoizedCurried = () => createSelector(
    getGoods,
    goods => {
        console.log('selecting');
        return goods.slice().sort((a, b) => a.price - b.price)
    },
);

export const getSortedGoodsMemoized = createSelector(
        getGoods,
        goods => {
            console.log('selecting');
            return goods.slice().sort((a, b) => a.price - b.price)
        },
    );
