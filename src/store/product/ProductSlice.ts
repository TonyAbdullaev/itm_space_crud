import { createSlice } from '@reduxjs/toolkit'
import {IProductModel} from "../../models/product.model";

export interface IProductsSlice {
    products: IProductModel[],
    isLoading: boolean,
    error: '',
}

const initialState: IProductsSlice = {
    products: [],
    isLoading: false,
    error: ''
}

export const productsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setProductsReducer: (state, action) => {
            state.products = action.payload
        },
        addProduct: (state, action, ) => {
            state.products.unshift(action.payload)
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
    },
})

export const { setProductsReducer,setLoading, setError, addProduct } = productsSlice.actions

export default productsSlice.reducer