import {RootState} from "../store";
import {IProductStateModel} from "../../models/state/product-state.model";

const selectProductState: (state: RootState) => IProductStateModel = (state: RootState) =>
    state.products;

export const selectProducts = (state: RootState) => selectProductState(state).products;
