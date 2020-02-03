export const initialState = {
    isFormValid: false,
    isFormTouched: false,
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