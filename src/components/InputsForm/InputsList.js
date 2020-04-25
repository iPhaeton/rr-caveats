import React from 'react';
import InputField from './InputField';

export const InputsList = ({ values, onChange }) => {
    return (
        values.map((value, index) => <InputField
            key={index}
            value={value}
            index={index}
            onChange={onChange}
        />)
    )
};

export default InputsList