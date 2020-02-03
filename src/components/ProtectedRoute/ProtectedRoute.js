import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {CurrentUserContext} from '../../HOC/context/CurrentUser';

const ProtectedRoute = ({component: Component, ...rest}) => {
    const [user] = useContext(CurrentUserContext);
    
    return (
        <Route 
            {...rest} 
            render={({location})=>(
                user ? <Component /> : <Redirect 
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            )}
        />
    )
}

export default ProtectedRoute
