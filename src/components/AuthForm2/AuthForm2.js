import React, { useState, useRef } from 'react';
import './AuthForm2.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const AuthForm2 = ({ handleAuthSubmit }) => {

    const initialState = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMsg: 'Your input is not email...',
                valid: true,
                input: useRef(null),
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
                valid: true,
                input: useRef(null),
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    const [formObject, setFormObject] = useState(initialState);

    const handleSubmit = (event) => {

        event.preventDefault();
        const formControls = { ...formObject.formControls };
        Object.keys(formControls).forEach(
            controlName => {
                const control = { ...formControls[controlName] };
                control.value = formControls[controlName].input.current.value;
                control.valid = validateControl(control.value, control.validation)
                formControls[controlName] = control;
                let isFormValid = true;
                Object.keys(formControls).forEach(
                    item => isFormValid = formControls[item].valid && isFormValid
                );
                setFormObject({ formControls, isFormValid });
            }
        );       
    }

    const renderInputs = () => {

        return Object.keys(formObject.formControls).map((controlName, index) => {
            const control = formObject.formControls[controlName];

            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    // value = {control.value}
                    label={control.label}
                    errorMsg={control.errorMsg}
                    refInput={control.input}
                    valid={control.valid}
                    touched={true}
                    shouldValidate={!!control.validation}
                />
            )
        })
    }

    const validateControl = (value, validation) => {
        if (!validation) { return true }
        let isValid = true;
        if (validation.required) { isValid = value.trim() !== '' && isValid }
        if (validation.minLength) { isValid = value.trim().length >= validation.minLength && isValid }
        if (validation.email) { isValid = validateEmail(value) && isValid }
        return isValid
    }

    return (
        <div>
            <form className='login__form' onSubmit={handleSubmit}>
                {renderInputs()}
                <p>{formObject.isFormValid ? 'Ok' : null}</p>
                <Button type='success'>Submit</Button>
            </form>
        </div>
    )
}

export default AuthForm2