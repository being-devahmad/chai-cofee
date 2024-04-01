import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice"
import productReducer from "../features/ProductSlice"

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    }
})

export default store