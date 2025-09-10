import React, {FC, ReactNode} from 'react';
import {CloseButton, ModalContent, ModalHeader, ModalLayout, ModalMain} from "../assets/styles/app.styles";
import {Typography} from "@mui/material";
import {GrClose} from "react-icons/gr";

interface IAddNewProductModal {
    changeVisible: () => void,
    title: string,
    children: ReactNode,
}

const AddNewProductModal: FC<IAddNewProductModal> = ({changeVisible, title, children}) => {
    return (
        <ModalLayout onClick={changeVisible}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <Typography variant="h4" component="h4">{title}</Typography>
                    <CloseButton onClick={changeVisible}><GrClose/></CloseButton>
                </ModalHeader>
                <ModalMain>
                    {children}
                </ModalMain>
            </ModalContent>
        </ModalLayout>
    );
};

export default AddNewProductModal;