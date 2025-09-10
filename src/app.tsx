import React, {useState} from 'react';
import ProductListComponent from "./components/product/list/product-list.component";
import {store} from './store/store'
import {Provider} from 'react-redux'
import CreateNewProduct from "./components/CreateNewProduct";
import ProductCreationForm from "./components/product/ProductCreationForm";




const App = () => {
    const [isVisible, setVisible] = useState<boolean>(false);
    const changeVisible = () => setVisible(prevState => !prevState);


    return (
        <Provider store={store}>
            <CreateNewProduct changeVisible={changeVisible} />
            {
                isVisible && <ProductCreationForm changeVisible={changeVisible} />
            }
            <ProductListComponent />
        </Provider>
    );
};

export default App;