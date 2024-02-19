import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/addProduct/productActions";
import { AddProductType } from "../../types/globalTypes";

export const AddProduct: React.FC = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState<AddProductType>({
        id: 0,
        name: "",
        image: "",
        description: "",
        price: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    setProduct({
                        ...product,
                        image: reader.result as string,
                    });
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addProduct(product));
        setProduct({
            id: 0,
            name: "",
            image: "",
            description: "",
            price: 0,
        });
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        title="Add product title"
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        title="Add product image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        title="Add product description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        title="Add product price"
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

