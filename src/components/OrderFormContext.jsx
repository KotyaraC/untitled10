import React, { createContext, useState, useContext } from "react";

const OrderFormContext = createContext();

export const useOrderForm = () => useContext(OrderFormContext);

export const OrderFormProvider = ({ children }) => {
    const [orderData, setOrderData] = useState({
        name: "",
        address: "",
        quantity: 1,
        product: "",
    });

    const updateOrderData = (key, value) => {
        setOrderData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    return (
        <OrderFormContext.Provider value={{ orderData, updateOrderData }}>
            {children}
        </OrderFormContext.Provider>
    );
};
