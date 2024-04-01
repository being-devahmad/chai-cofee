import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: [],
    reducers: {
        setProducts(state, action) {
            return action.payload
        }
    }
})

export const { setProducts } = productSlice.actions
export default productSlice.reducer

// Async thunk middleware
export const fetchDataFromAPI = () => {
    return async function fetchProductsThunk(dispatch) {
        try {
            const response = await fetch("https://api.sampleapis.com/coffee/hot");
            const data = await response.json();
            dispatch(setProducts(data)); 
            console.log(data);
        } catch (error) {
            console.log("Error fetching data", error);
        }
    };
};
