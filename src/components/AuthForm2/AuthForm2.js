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
   select: 'coconut',
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
       
        event.preventDefault();
        const formControls = {...formObject.formControls};
        Object.keys(formControls).forEach(
            (control)=>{ console.log('control',event.target);
            
                // isFormValid = formControls[item].valid && isFormValid;
            }
        ); 
        alert(JSON.stringify(formObject))
        // handleAuthSubmit(formObject.formControls['email'].value);
    }

    const handleChange = (event, controlName) => {
        const formControls = {...formObject.formControls};
        const control = {...formControls[controlName]};
        control.value = event.target.value;
        formControls[controlName] = control;
        setFormObject({...formObject, formControls, isFormValid: formObject.isFormValid});   
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
                    // touched = {control.touched}
                    shouldValidate = {!!control.validation}
                    onChange = {(event) => handleChange(event, controlName)}
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

    const handleChange1 = (event) => {
       setFormObject({...formObject, select: event.target.value })
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
            <label>
               Выберите ваш любимый вкус:
          <select value={formObject.select} onChange={handleChange1}>
                  <option value="grapefruit">Грейпфрут</option>
                  <option value="lime">Лайм</option>
                  <option value="coconut">Кокос</option>
                  <option value="mango">Манго</option>
               </select>
            </label>
            <Button type='success'>Submit</Button>
         </form>
      </div>
   )
}

export default AuthForm2