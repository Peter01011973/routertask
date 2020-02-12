import React, {createContext, useState} from 'react';

export const CurrentUserContext = createContext([ {}, () => {} ]);

export const CurrentUserProvider = ({children}) => {
const [user, setUser] = useState(null)

    return (
        <CurrentUserContext.Provider value = {[user, setUser]}>
            {children}
        </CurrentUserContext.Provider>
    )
}