import React, { createContext, useContext, useState } from 'react';

const AuthRoleContext = createContext();

export const AuthRoleProvider = ({ children }) => {
    const [role, setRole] = useState('admin');

    const updateRole = (newRole) => setRole(newRole);

    return (
        <AuthRoleContext.Provider value={{ role, updateRole }}>
            {children}
        </AuthRoleContext.Provider>
    );
};

export const useAuthRole = () => useContext(AuthRoleContext);
