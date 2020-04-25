import React, { memo } from 'react';

const InputField = (props) => {
    const { value, index, onChange } = props;
    console.log('InputField render');

    return (
        <input
            style={{ display: 'block', borderColor: 'black', height: 40, width: 300 }}
            value={value}
            onChange={(e) => onChange(e.target.value, index)}
        />
    )
};

// export default memo(InputField, (prevProps, nextProps) => (
//     prevProps.value === nextProps.value
// ));

export default InputField;