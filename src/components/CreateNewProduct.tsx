import React, {FC} from 'react';
import {CreateButton} from "../assets/styles/app.styles";

interface ICreateNewProduct {
    changeVisible: () => void,
}

const CreateNewProduct: FC<ICreateNewProduct> = ({changeVisible}) => {
    return (
        <CreateButton onClick={changeVisible}><div style={{fontSize: "24px"}}>+</div></CreateButton>
    );
};

export default CreateNewProduct;