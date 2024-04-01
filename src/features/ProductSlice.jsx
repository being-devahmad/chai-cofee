import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// createAsyncThunk
export const fetchDataFromAPI = createAsyncThunk('fetchDataFromAPI', async () => {
    try {
        const response = await fetch("https://api.sampleapis.com/coffee/hot");
        return response.json();
    } catch (error) {
        console.log("Error fetching data", error);
    }
})


const productSlice = createSlice({
    name: "product",
    initialState: {
        isLoading: false,
        isError: false,
        data: null
    },
    extraReducers: (buiilder) => {
        buiilder.addCase(fetchDataFromAPI.pending, (state, action) => {
            state.isLoading = true
        })
        buiilder.addCase(fetchDataFromAPI.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        buiilder.addCase(fetchDataFromAPI.rejected, (state, action) => {
            console.log("Error from API fetch", action.payload)
            state.isError = true
        })
    }

})

export default productSlice.reducer

