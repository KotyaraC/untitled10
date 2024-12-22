import React from "react";
import { useOrderForm } from "./OrderFormContext";

const OrderForm = () => {
    const { orderData, updateOrderData } = useOrderForm();

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateOrderData(name, value);
    };

    return (
        <div className="card shadow mt-4">
            <div className="card-body">
                <h5 className="card-title text-center">Форма замовлення</h5>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Ім'я</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={orderData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Адреса</label>
                        <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={orderData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Кількість</label>
                        <input
                            type="number"
                            className="form-control"
                            name="quantity"
                            value={orderData.quantity}
                            onChange={handleChange}
                            min="1"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Продукт</label>
                        <input
                            type="text"
                            className="form-control"
                            name="product"
                            value={orderData.product}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;
