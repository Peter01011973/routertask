import {useEffect, useContext} from 'react';
import {CurrentUserContext} from '../../HOC/context/CurrentUser';

const AuthInit = (history) => {
    const [, setCurrentUserState] = useContext(CurrentUserContext);

    useEffect(
      ()=> {
        history.replace('/');
        const email = localStorage.getItem('email');
        const token = localStorage.getItem('token');
        if (token) {setCurrentUserState(email)};
      }, [history, setCurrentUserState]
    )
}

export default AuthInit
