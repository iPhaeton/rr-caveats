import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUpdatedAt } from './actions';
import { getUpdatedAt } from './selectors';

export const GoodsList = ({ goods }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUpdatedAt());
    }, [goods]);

    const updatedAt = useSelector(getUpdatedAt);

    return (
        <div>
            {goods.map(
                (item, index) => <div key={index}>
                    {item.name}: {item.price}
                </div>
            )}
            Last updated at: {(new Date(updatedAt)).toString()}
        </div>
    )
};

export default GoodsList;
