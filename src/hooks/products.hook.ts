import {useEffect, useState} from "react";
import {IProductModel} from "../models/product.model";
import ProductsService from "../services/ProductsService";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {setError, setLoading, setProductsReducer} from "../store/product/ProductSlice";

export const useProduct = () => {
    const productsInState = useSelector((state: RootState) => state.products);
    const isLoading = useSelector((state: RootState) => state.products.isLoading);
    const error = useSelector((state: RootState) => state.products.error);
    const [products, setProducts] = useState<IProductModel[]>(productsInState.products);
    const dispatch = useDispatch();

    const fetchingProducts = async () => {
        try {
            dispatch(setLoading(true))
            const {data} =await ProductsService.getAll()
            setProducts(data)
            dispatch(setProductsReducer(data))
            dispatch(setLoading(false))
        } catch (e: any) {
            dispatch(setError(e.message))
        } finally {
            dispatch(setLoading(false))
        }
    }

    useEffect(() => {
        setProducts(productsInState.products);
    }, [productsInState])

    useEffect(() => {
        fetchingProducts();
    }, []);

    return {
        products, error, isLoading
    }
};
