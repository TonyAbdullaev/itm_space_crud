import React from 'react';
import {ErrorText, SLoading} from "../../assets/styles/app.styles";
import {BiSolidError} from "react-icons/bi";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const Error = () => {
    const error = useSelector((state: RootState) => state.products.error);

    return (
        <SLoading>
            <BiSolidError style={{color: 'red', width: "50px", height: "50px"}} />
            <ErrorText>{error}</ErrorText>
        </SLoading>
    );
};

export default Error;