import React from 'react';
import { useCart } from './CartContext';
import { Badge } from 'primereact/badge';

const CartStatus = () => {
    const { cartItems } = useCart();

    return (
        <div className="text-center">
            <h4 className="mb-3">Shopping Cart</h4>
            <div>
                <span className="p-overlay-badge">
                    <i className="pi pi-shopping-cart" style={{ fontSize: '2rem', color: '#28a745' }}></i>
                    <Badge value={cartItems.length} severity="info" />
                </span>
            </div>
        </div>
    );
};

export default CartStatus;
