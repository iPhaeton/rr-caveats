import React, { useState, useCallback, Fragment } from 'react';
import InputsList from './InputsList';

const InputsForm = () => {
    const [values, setValues] = useState([]);

    const onChange = useCallback((value, index) => {
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);
    }, [values]);

    const addValue = useCallback(() => {
        setValues(values.concat(''));
    }, [values]);

    return (
        <Fragment>
            <InputsList values={values} onChange={onChange} />
            <button
                style={{width: 150, height: 40}}
                onClick={addValue}
            >
                Add
            </button>
        </Fragment>
    );
}

export default InputsForm;