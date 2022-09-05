import { combineReducers, legacy_createStore as createStore } from "redux";

import {currencyFilterReducer} from './features/currencyFilter/currencyFilterSlice';
import {inventoryReducer} from './features/inventory/inventorySlice';
import { cartReducer } from "./features/cart/cartSlice";

export const store = createStore(combineReducers({
    currencyFilter: currencyFilterReducer,
    inventory: inventoryReducer,
    cart: cartReducer
}))