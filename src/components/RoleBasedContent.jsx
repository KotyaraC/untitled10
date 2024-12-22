import React from "react";
import { useAuthRole } from "./AuthRoleContext";

const RoleBasedContent = () => {
    const { role, setAdminRole, setGuestRole } = useAuthRole();

    return (
        <div className="p-5">
            <div className="mb-4">
                <button
                    onClick={setAdminRole}
                    className="bg-blue-500 text-white p-2 rounded mr-2"
                >
                    Set Admin Role
                </button>
                <button
                    onClick={setGuestRole}
                    className="bg-gray-500 text-white p-2 rounded"
                >
                    Set Guest Role
                </button>
            </div>
            {role === "admin" ? (
                <div className="bg-green-500 text-white p-4 rounded">
                    <h2>Welcome Admin</h2>
                    <p>This section is only visible to admins.</p>
                </div>
            ) : (
                <div className="bg-red-500 text-white p-4 rounded">
                    <h2>Welcome Guest</h2>
                    <p>This section is only visible to guests.</p>
                </div>
            )}
        </div>
    );
};

export default RoleBasedContent;
