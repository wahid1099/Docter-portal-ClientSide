import React, {createContext} from 'react';
import UseFirebase from "../Hooks/UseFirebase";



export  const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const allcontexts=UseFirebase();
    return (
        <AuthContext.Provider value={allcontexts}>
            {children}

            
        </AuthContext.Provider>
    );
};

export default AuthProvider;