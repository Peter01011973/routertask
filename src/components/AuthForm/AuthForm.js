import React, { useState } from 'react';
import './AuthForm.css';
import Input from '../UI/Input/Input';

function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const initialState = {
    isFormValid: false,
    formControls: {
        email: {
            value: '',
            type: 'email',
            label: 'Email',
            errorMsg: 'Your input is not email...',
            valid: false,
            touched: false,
            validation: {
                required: true,
                email: true
            }
        },
        password: {
            value: '',
            type: 'password',
            label: 'Password',
            errorMsg: 'Your should input proper password...',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 6
            }               
        }
    }
}

const AuthForm = ({handleAuthSubmit}) => {

    const [formObject, setFormObject] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAuthSubmit(formObject.formControls['email'].value);
    }

    const renderInputs =() => {
        return Object.keys(formObject.formControls).map((controlName, index) => {
            const control = formObject.formControls[controlName];
            return (
                <Input 
                    key = {controlName + index}
                    type = {control.type}
                    value = {control.value}
                    label = {control.label}
                    errorMsg = {control.errorMsg}
                    valid = {control.valid}
                    touched = {control.touched}
                    shouldValidate = {!!control.validation}
                    onChange = {(event) => onChangeHandler(event, controlName)}
                />
            )
        })    
    }

    const validateControl = (value, validation) => {
        if (!validation) { return true }
        let isValid = true;
        if (validation.required) { isValid = value.trim() !== '' && isValid}
        if (validation.minLength) { isValid = value.trim().length >= validation.minLength && isValid}
        if (validation.email) { isValid = validateEmail(value) && isValid }
        return isValid
    }

    const onChangeHandler = (event, controlName) => {
        console.log(`${controlName}: `, event.target.value);
        const formControls = {...formObject.formControls};
        const control = {...formControls[controlName]};
        control.value = event.target.value;
        control.touched = true;
        control.valid = validateControl(control.value, control.validation)
        formControls[controlName] = control;
        let isFormValid = true;
        Object.keys(formControls).forEach((item)=>isFormValid = formControls[item].valid && isFormValid)      
        setFormObject({ formControls, isFormValid });
    }

    return (
        <div>
            <form className='login__form' onSubmit={handleSubmit}>
                {renderInputs()}
                {/* <p>{formObject.formControls['email'].value}</p> */}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AuthForm
