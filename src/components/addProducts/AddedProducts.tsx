import React from "react";
import { useSelector } from "react-redux";
import { AddProductType } from "../../types/globalTypes";
import { RootState } from "../../redux/store";

export const AddedProducts: React.FC = () => {
    const products = useSelector((state: RootState) => state);
    console.log("Admin added console", products)
    return (
        <div>
            <h2>Added Products</h2>
            <ul>
                {products.map((product: AddProductType) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <img src={product.image} alt={product.name} />
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

