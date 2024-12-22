import React from 'react';
import { Button } from 'primereact/button';
import { useCart } from './CartContext';

const ProductList = () => {
    const { addToCart, removeFromCart, cartItems } = useCart();

    const products = [
        { id: 1, name: 'Product 1', price: '$10' },
        { id: 2, name: 'Product 2', price: '$20' },
        { id: 3, name: 'Product 3', price: '$30' },
    ];

    return (
        <div>
            <h4 className="text-center mb-4">Available Products</h4>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Price: {product.price}</p>
                                <Button
                                    label="Add to Cart"
                                    icon="pi pi-plus"
                                    className="p-button-success mb-2"
                                    onClick={() => addToCart(product)}
                                />
                                <Button
                                    label="Remove"
                                    icon="pi pi-minus"
                                    className="p-button-danger"
                                    onClick={() => removeFromCart(product.id)}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <h5>Items in Cart:</h5>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductList;
