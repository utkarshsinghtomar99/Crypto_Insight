import { Link, useParams } from "react-router-dom"
import { fetchSearchCoinData } from "../features/trendingcoin/SearchedCoinSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import SearchCard from "../components/SearchCard";
import { NavigateBeforeRounded } from "@mui/icons-material";
//  -**********************-
//  ^ IMPORTING STATEMENTS ^
//  -**********************-

const SearchedCoin = () =>
{
    const { searchData, isLoading, isError } = useSelector( state => state.searchCoin );
    const { searchTerm } = useParams();
    const dispatch = useDispatch();

    useEffect( () =>
    {
        dispatch( fetchSearchCoinData( searchTerm ) );

    }, [ dispatch, searchTerm ] );

    if ( searchData.length === 0 )
    {
        if ( isLoading )
        {
            return <h1 className="display-3 text-center">Loading...</h1>
        }
        else if ( isError )
        {
            return <h1 className="display-3 text-center">OOP's! Something Went Wrong..</h1>
        }
        else
        {
            return <h1 className="display-3 text-center">Coin Data Not Found...</h1>
        }
    }

    return (
        <>
            <Box sx={{ padding: '15px 10%' }}>
                <Box sx={{ margin: '5px 0 20px' }}>
                    <Typography variant="h5" color={'gray'}> {`search results for '${ searchTerm }'`} </Typography>
                </Box>
                <Grid container spacing={2} className="mb-3">
                    {
                        searchData.map( data => <SearchCard key={data.id} data={data} /> )
                    }
                </Grid>
                <Box sx={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                    <Link to={'/'}>
                        <button className="btn btn-danger rounded-pill"><NavigateBeforeRounded />back &nbsp; </button>
                    </Link>
                </Box>
            </Box>
        </>
    )
}

export default SearchedCoin