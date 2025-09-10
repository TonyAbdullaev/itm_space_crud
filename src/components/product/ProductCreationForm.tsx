import React, {memo} from 'react';
import {SInput, SInputWrapper, SLabel} from "../../assets/styles/app.styles";
import CButton from "../UI/CButton";
import AddNewProductModal from "../AddNewProductModal";
import {useAddProduct} from "../../hooks/product.add.hook";

interface IProductCreationForm {
    changeVisible: () => void,
}

const ProductCreationForm = ({changeVisible}: IProductCreationForm) => {
    const {newProductTitle, newProductDescription, newProductCategory, newProductPrice, onSubmit} = useAddProduct();
    return (
        <AddNewProductModal changeVisible={changeVisible} title="Add new product">
            <SInputWrapper>
                <SLabel>Title</SLabel>
                <SInput ref={newProductTitle} placeholder="Please, enter title" />
            </SInputWrapper>
            <SInputWrapper>
                <SLabel>Description</SLabel>
                <SInput ref={newProductDescription} placeholder="Please, enter description" />
            </SInputWrapper>
            <SInputWrapper>
                <SLabel>Price</SLabel>
                <SInput ref={newProductPrice} placeholder="Please, enter price" />
            </SInputWrapper>
            <SInputWrapper>
                <SLabel>Category</SLabel>
                <SInput ref={newProductCategory} placeholder="Please, enter Category" />
            </SInputWrapper>
            <CButton onClick={() => {
                changeVisible();
                return onSubmit()
            }}>Create</CButton>
        </AddNewProductModal>
    );
};

export default memo(ProductCreationForm);