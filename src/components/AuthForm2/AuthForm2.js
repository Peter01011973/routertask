import React, { useState } from 'react';
import './AuthForm2.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const initialState = {
    isFormValid: false,
    // isFormTouched: false,
    formControls: {
        email: {
            value: '',
            type: 'email',
            label: 'Email',
            errorMsg: 'Your input is not email...',
            valid: false,
            // touched: false,
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
            // touched: false,
            validation: {
                required: true,
                minLength: 6
            }               
        }
    }
}

const AuthForm2 = ({handleAuthSubmit}) => {

    const [formObject, setFormObject] = useState(initialState);

    const handleSubmit = (event) => {
        console.log('submit');
        
        event.preventDefault();
        const formControls = {...formObject.formControls};
        Object.keys(formControls).forEach(
            (control)=>{ console.log('control',event.target);
            
                // isFormValid = formControls[item].valid && isFormValid;
            }
        ); 
        // handleAuthSubmit(formObject.formControls['email'].value);
    }

    // const handleChange = (event, controlName) => {
    //     // const formControls = {...formObject.formControls};
    //     // console.log('formControls', formControls);
    //     // const control = {...formControls[controlName]};
    //     // console.log('control', control);
    //     // control.value = event.target.value;
    //     // console.log('control.value', control.value);
    //     const formControls = {...formObject.formControls};
    //     const control = {...formControls[controlName]};
    //     control.value = event.target.value;
        
        
    //     // setFormObject({ formControls. });   
    // }

    const renderInputs =() => {
        return Object.keys(formObject.formControls).map((controlName, index) => {
            const control = formObject.formControls[controlName];
            
            return (
                <Input 
                    key = {controlName + index}
                    type = {control.type}
                    // value = {control.value}
                    label = {control.label}
                    errorMsg = {control.errorMsg}
                    valid = {control.valid}
                    // ref = {input => }
                    // touched = {control.touched}
                    shouldValidate = {!!control.validation}
                    // onChange = {(event) => handleChange(event, controlName)}
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

    // const onChangeHandler = (event, controlName) => {
    //     const formControls = {...formObject.formControls};
    //     const control = {...formControls[controlName]};
    //     control.value = event.target.value;
    //     control.touched = true;
    //     control.valid = validateControl(control.value, control.validation)
    //     formControls[controlName] = control;
    //     let isFormValid = true;
    //     let isFormTouched = true;
    //     Object.keys(formControls).forEach(
    //         (item)=>{ 
    //             isFormValid = formControls[item].valid && isFormValid;
    //             isFormTouched = formControls[item].touched && isFormTouched 
    //         }
    //     ); 
    //     setFormObject({ formControls, isFormTouched, isFormValid }); 
    // }
    
    return (
        <div>
            <form className='login__form' onSubmit={handleSubmit}>
                {renderInputs()}
                {/* <p>{formObject.formControls['email'].value}</p> */}
                <Button type='success'>Submit</Button>
            </form>
        </div>
    )
}

export default AuthForm2