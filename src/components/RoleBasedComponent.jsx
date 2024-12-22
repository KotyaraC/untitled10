import React from 'react';
import { useAuthRole } from './AuthRoleContext';

const RoleBasedComponent = () => {
    const { role, setAdminRole, setGuestRole } = useAuthRole();

    const adminStyles = {
        backgroundColor: 'lightblue',
        padding: '10px',
        borderRadius: '5px',
    };

    const guestStyles = {
        backgroundColor: 'lightgray',
        padding: '10px',
        borderRadius: '5px',
    };

    return (
        <div>
            <h3>Роль користувача: {role}</h3>
            <div>
                {role === 'admin' ? (
                    <div style={adminStyles}>
                        <h4>Адмін панель</h4>
                        <button>Редагувати користувачів</button>
                        <button>Управління контентом</button>
                    </div>
                ) : (
                    <div style={guestStyles}>
                        <h4>Гостева панель</h4>
                        <button>Переглянути статті</button>
                        <button>Залишити відгук</button>
                    </div>
                )}
            </div>
            <div>
                <button onClick={setAdminRole}>Стати адміністратором</button>
                <button onClick={setGuestRole}>Стати гостем</button>
            </div>
        </div>
    );
};

export default RoleBasedComponent;
