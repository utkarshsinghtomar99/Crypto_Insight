import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCoinDetail = createAsyncThunk( 'coinDetail/fetchCoinDetail', async ( coinId ) =>
{
    const response = await fetch( `https://api.coingecko.com/api/v3/coins/${ coinId }` );
    const data = await response.json();
    return data;

} );

// 
const coinDetailsSlice = createSlice( {
    name: 'COIN_DETAILS',
    initialState: {
        coinData: [],
        isLoading: false,
        isError: false,
    },
    reducers: {},
    extraReducers: ( builder ) =>
    {
        builder
            .addCase( fetchCoinDetail.pending, ( state ) =>
            {
                state.isLoading = true
            } )
            .addCase( fetchCoinDetail.fulfilled, ( state, action ) =>
            {
                state.isLoading = false
                state.coinData = action.payload
            } )
            .addCase( fetchCoinDetail.rejected, ( state ) =>
            {
                state.isLoading = false
                state.isError = true
            } )
    }
} );

export default coinDetailsSlice.reducer;