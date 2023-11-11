import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchChartData = createAsyncThunk( 'FETCH/CHARTDATA', async ( id ) =>
{
    const res = await fetch( `https://api.coingecko.com/api/v3/coins/${ id }/market_chart?vs_currency=inr&days=1` );
    const data = await res.json();
    return data.prices.map( price => price[ 1 ] );
    // console.log( data.prices );
} )

const ChartDataSlice = createSlice( {
    name: "Chart_Data",
    initialState: {
        chartData: [],
        isLoading: false,
        isError: false
    },
    reducers: {},
    extraReducers: ( builder ) =>
    {
        builder
            .addCase( fetchChartData.pending, ( state ) =>
            {
                state.isLoading = true
            } )
            .addCase( fetchChartData.fulfilled, ( state, action ) =>
            {
                state.isLoading = false;
                state.chartData = action.payload;
            } )
            .addCase( fetchChartData.rejected, ( state ) =>
            {
                state.isLoading = false;
                state.isError = true;
            } )
    }
} );

export default ChartDataSlice.reducer;