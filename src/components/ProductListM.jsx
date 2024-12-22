import React from "react";
import { useProductFilter } from "./ProductFilterContext";

const ProductListM = ({ products }) => {
    const { selectedCategory } = useProductFilter();

    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="row">
            {filteredProducts.map((product) => (
                <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p>{product.description}</p>
                            <p><strong>Ціна:</strong> {product.price} грн</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductListM;
