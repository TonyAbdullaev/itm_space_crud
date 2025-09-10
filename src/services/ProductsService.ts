import axios, {AxiosResponse} from "axios";
import {IProductModel} from "../models/product.model";
import {PRODUCT_URL} from "../constants/api.constants";

export default class ProductsService {
    static async getAll(): Promise<AxiosResponse<IProductModel[]>> {
        return await axios.get(PRODUCT_URL);
    };
    
}