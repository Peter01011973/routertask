import React, { useState } from 'react';
import './AuthForm.css';
import {initialState} from './consts';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import {validateEmail} from '../../Utils/validateEmail';

const AuthForm = ({handleAuthSubmit, isLoading}) => {   

    const [formObject, setFormObject] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAuthSubmit(formObject.formControls['email'].value, formObject.formControls['password'].value);
    }

    const renderInputs = Object.keys(formObject.formControls).map((controlName, index) => {

        const {type, value, label, errorMsg, valid, touched, validation } = formObject.formControls[controlName];   
        
        return (
            <Input
                key={controlName + index}
                type={type}
                value={value}
                label={label}
                errorMsg={errorMsg}
                valid={valid}
                touched={touched}
                shouldValidate={!!validation}
                onChange={(event) => onChangeHandler(event, controlName)}
            />
        )
    })       

    const validateControl = (value, validation) => {
        let isValid = true;
        if (validation.required) { isValid = value.trim() !== '' && isValid}
        if (validation.minLength) { isValid = value.trim().length >= validation.minLength && isValid}
        if (validation.email) { isValid = validateEmail(value) && isValid }
        return isValid
    }

    const onChangeHandler = (event, controlName) => {
        const formControls = {...formObject.formControls};
        const control = {...formControls[controlName]};
        control.value = event.target.value;
        control.touched = true;
        control.valid = validateControl(control.value, control.validation)
        formControls[controlName] = control;
        let isFormValid = true;
        let isFormTouched = true;
        Object.keys(formControls).forEach(
            (item)=>{ 
                isFormValid = formControls[item].valid && isFormValid;
                isFormTouched = formControls[item].touched && isFormTouched 
            }
        ); 
        setFormObject({ formControls, isFormTouched, isFormValid }); 
    }
    
    return (
        <div>
            <form className='login__form' onSubmit={handleSubmit} >
                {renderInputs}
                <Button type='success' disabled={!(formObject.isFormValid && formObject.isFormTouched) || isLoading}>Submit</Button>
            </form>
        </div>
    )
}

export default AuthForm
