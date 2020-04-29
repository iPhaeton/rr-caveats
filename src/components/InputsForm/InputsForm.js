import React, { useState, useCallback, Fragment, useReducer } from 'react';
import InputField from './InputField';

const InputsForm = () => {
    const [values, setValues] = useState(['', '', '', '', '']);

    // const [values, dispatch] = useReducer((state, action) => {
    //     const { value, index } = action;
    //         const newValues = [...state];
    //         newValues[index] = value;
    //         return newValues
    // }, ['', '', '', '', '']);

    const onChange = useCallback((value, index) => {
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);
    }, [values]);

    // const onChange = useCallback((value, index) => {
    //     dispatch({ value, index });
    // }, [values]);

    return (
        <Fragment>
            <InputField
                value={values[0]}
                index={0}
                onChange={onChange}
            />
            <InputField
                value={values[1]}
                index={1}
                onChange={onChange}
            />
            <InputField
                value={values[2]}
                index={2}
                onChange={onChange}
            />
            <InputField
                value={values[3]}
                index={3}
                onChange={onChange}
            />
            <InputField
                value={values[4]}
                index={4}
                onChange={onChange}
            />
        </Fragment>
    );
}

export default InputsForm;