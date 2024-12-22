import React from "react";
import { useOrderForm } from "./OrderFormContext";

const OrderPreview = () => {
    const { orderData } = useOrderForm();

    return (
        <div className="card shadow mt-4">
            <div className="card-body">
                <h5 className="card-title text-center">Перегляд замовлення</h5>
                <div>
                    <p><strong>Ім'я:</strong> {orderData.name}</p>
                    <p><strong>Адреса:</strong> {orderData.address}</p>
                    <p><strong>Кількість:</strong> {orderData.quantity}</p>
                    <p><strong>Продукт:</strong> {orderData.product}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderPreview;
