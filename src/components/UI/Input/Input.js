import React from 'react';
import './Input.css';

const Input = ({ valid, touched, shouldValidate, type, label, value, onChange, errorMsg }) => {

    const isInvalidV = !valid && shouldValidate && touched;
    const inputType = type || 'text'
    const htmlFor = `${label}-${Math.random()}`;
    let _class = 'Input';

    if (isInvalidV) { _class += ' invalid' }
    return (
        <div className = {_class}>
            <label htmlFor = {htmlFor}>{label}
                <input
                    type = {inputType}
                    id = {htmlFor}
                    value = {value}
                    onChange = {onChange}
                />
            </label>
            {isInvalidV ? <span>{errorMsg}</span> : null}
        </div>
    )
}

export default Input