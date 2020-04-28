import React, { useState, useCallback, Fragment, useReducer } from 'react';
import InputsList from './InputsList';

const InputsForm = () => {
    const [values, setValues] = useState([]);

    // const [values, setValues] = useReducer((state, action) => {
    //     const { value, index } = action;
    //         const newValues = [...state];
    //         newValues[index] = value;
    //         return newValues
    // }, []);

    const onChange = useCallback((value, index) => {
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);
    }, [values]);

    // const onChange = useCallback((value, index) => {
    //     setValues({ value, index });
    // }, [values]);

    const addValue = useCallback(() => {
        setValues(values.concat(''));
    }, [values]);

    // const addValue = useCallback(() => {
    //     setValues({value: '', index: values.length});
    // }, [values]);

    return (
        <Fragment>
            <InputsList values={values} onChange={onChange} />
            <button
                style={{ width: 150, height: 40 }}
                onClick={addValue}
            >
                Add
            </button>
        </Fragment>
    );
}

export default InputsForm;