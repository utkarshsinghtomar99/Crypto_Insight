import { configureStore } from "@reduxjs/toolkit";
import coinDetailReducer from './trendingcoin/CoinDetailsSlice'
import searchedCoinReducer from "./trendingcoin/SearchedCoinSlice";
import chartDataReducer from "./trendingcoin/ChartDataSlice";

const store = configureStore( {
    reducer: {
        coinDetail: coinDetailReducer,
        searchCoin: searchedCoinReducer,
        chartData: chartDataReducer,
    },
} );

// 
export default store;