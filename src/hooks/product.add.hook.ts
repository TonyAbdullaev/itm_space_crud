import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {addProduct} from "../store/product/ProductSlice";

interface IUseAddProduct {
    newProductTitle: React.RefObject<HTMLInputElement>,
    newProductDescription: React.RefObject<HTMLInputElement>,
    newProductCategory: React.RefObject<HTMLInputElement>,
    newProductPrice: React.RefObject<HTMLInputElement>,
    onSubmit: () => void,
}

export const useAddProduct = (): IUseAddProduct => {
    const productsInState = useSelector((state: RootState) => state.products.products);
    const dispatch = useDispatch();
    const newProductTitle = useRef<HTMLInputElement>(null);
    const newProductDescription = useRef<HTMLInputElement>(null);
    const newProductCategory = useRef<HTMLInputElement>(null);
    const newProductPrice = useRef<HTMLInputElement>(null);
    const onSubmit = () => {
        const newProduct = {
            id: productsInState.length + 1,
            title: newProductTitle.current?.value,
            description: newProductDescription.current?.value,
            price: newProductPrice.current?.value,
            category: newProductCategory.current?.value,
            image: "",
            rating: {
                rate: 0,
                count: 0,
            }
        }
        dispatch(addProduct(newProduct));
    }

    return {
        newProductTitle, newProductDescription, newProductCategory, newProductPrice, onSubmit
    }
};
