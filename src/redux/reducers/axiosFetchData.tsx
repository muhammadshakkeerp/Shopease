import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


interface Product {
    id: number,
    title: string,
    description: string,
    price: number
}

interface CategoryMap {
    [key: string]: Product[]
}

interface AppState {
    categoryMap: CategoryMap
}

const initialState: AppState = {
    categoryMap: {}
}

export const fetchProductData = createAsyncThunk("product/fetchData", async () => {
    const [productsResponse, categoriesResponse] = await Promise.all(
        [axios.get<{ products: Product[] }>('https://dummyjson.com/products'),
        axios.get<string[]>('https://dummyjson.com/products')
        ])
    const _products = productsResponse.data.products
    console.log(_products)

    const categories = categoriesResponse.data

    const newCategoryMap: CategoryMap = {};

    for (const category of categories) {
        const categoryRespose = await axios.get<{ products: Product[] }>(
            `https://dummyjson.com/products/category/${category}`
        )
        newCategoryMap[category] = categoryRespose.data.products
    }
    return newCategoryMap
})


const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductData.fulfilled, (state, action) => {
            state.categoryMap = action.payload;
        });
    },
});

export default dataSlice.reducer;