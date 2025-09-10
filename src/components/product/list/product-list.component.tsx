import React from 'react';
import ProductCard from "../card/product-card.component";
import {SCardList} from "../../../assets/styles/app.styles";
import {useProduct} from "../../../hooks/products.hook";
import Loading from "../../UI/Loading";
import Error from "../../UI/Error";


const ProductListComponent = () => {
    const {products, isLoading, error} = useProduct()
    if (isLoading) {
        return <Loading />
    }

    if (error.length !== 0) {
        return <Error />
    }

    return (
        <SCardList>
            {
                products.map(product => <ProductCard key={product.id} {...product} />)
            }
        </SCardList>
    );
};

export default ProductListComponent;