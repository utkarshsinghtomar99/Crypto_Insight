import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSearchCoinData = createAsyncThunk( 'FETCH/SEARCHCOIN', async ( searchTerm ) =>
{
    const res = await fetch( `https://api.coingecko.com/api/v3/search?query=${ searchTerm }` );
    const data = await res.json();
    return data.coins;
} )

// 
const searchedCoinSlice = createSlice( {
    name: "SEARCHED_COIN",
    initialState: {
        searchData: [],
        isLoading: false,
        isError: false,
    },
    reducers: {},
    extraReducers: ( builder ) =>
    {
        builder
            .addCase( fetchSearchCoinData.pending, ( state ) =>
            {
                state.isLoading = true;
            } )
            .addCase( fetchSearchCoinData.fulfilled, ( state, action ) =>
            {
                state.isLoading = false;
                state.searchData = action.payload;
            } )
            .addCase( fetchSearchCoinData.rejected, ( state ) =>
            {
                state.isLoading = false;
                state.isError = true;
            } )
    }
} );

export default searchedCoinSlice.reducer;