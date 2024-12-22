import React from 'react';
import { Button } from 'primereact/button';
import { useAuth } from './AuthContext';

const AuthStatus = () => {
    const { isAuthenticated, login, logout } = useAuth();

    return (
        <div className="text-center p-4">
            <h2 className="mb-3">
                {isAuthenticated ? 'Welcome, User!' : 'Please log in.'}
            </h2>
            {isAuthenticated ? (
                <Button label="Logout" icon="pi pi-sign-out" className="p-button-danger" onClick={logout} />
            ) : (
                <Button label="Login" icon="pi pi-sign-in" className="p-button-success" onClick={login} />
            )}
        </div>
    );
};

export default AuthStatus;
