import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({auth, component: Component, ...rest}) => {
    console.log(auth);
    
    return (
        <Route 
            {...rest} 
            render={({location})=>(
                auth ? <Component /> : <Redirect 
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
