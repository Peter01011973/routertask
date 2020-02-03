import { useContext } from 'react';
import { CurrentUserContext } from '../../HOC/context/CurrentUser';

const Logout = ({ history }) => {
    const [, setUser] = useContext(CurrentUserContext)

    localStorage.clear();
    setUser(null);
    history.push('/');
    return (null)
}

export default Logout
