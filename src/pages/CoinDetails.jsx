import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { fetchCoinDetail } from "../features/trendingcoin/CoinDetailsSlice";
import { Avatar, Box, Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { fetchChartData } from "../features/trendingcoin/ChartDataSlice";
import BarChart from "../components/BarChart";
import { GitHub, Home, Reddit } from "@mui/icons-material";

const CoinDetails = () =>
{
    const { id } = useParams();
    const dispatch = useDispatch();
    const { coinData, isLoading, isError } = useSelector( state => state.coinDetail );
    const { chartData } = useSelector( state => state.chartData )
    console.log( coinData );

    // Creating Time
    const quarterHours = [ '00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55' ];
    const times = [];
    for ( let i = 0; i < 24; i++ )
    {
        for ( let j = 0; j < quarterHours.length; j++ )
        {
            times.push( `${ i }:${ quarterHours[ j ] }` );
        }
    }
    //

    // Chart Data
    const data = {
        labels: times.map( time => time ),
        datasets: [ {
            label: 'Last 24hr INR Prices',
            data: chartData.map( price => price ),
        } ]
    }
    //

    // UseEffect
    useEffect( () =>
    {
        dispatch( fetchCoinDetail( id ) );
        dispatch( fetchChartData( id ) );

    }, [] );
    //

    // Handling Error...
    if ( !coinData || coinData.length === 0 )
    {
        if ( isLoading )
        {
            return <h1>Loading...</h1>
        }
        else if ( isError )
        {
            return <h1>Error</h1>
        }
        else
        {
            return <h1 className="my-5">Data Storage is Empty</h1>
        }
    }
    //

    return (
        <>
            <Box sx={{ padding: '2%' }}>
                <Grid container spacing={3}>
                    <Grid item lg={9} md={8} sm={8} xs={12}>
                        <Card className="shadow-none">
                            <CardHeader avatar={<Avatar src={coinData.image.large} sx={{ width: '75px', height: '75px' }} />} title={<Typography variant="h4">{coinData.id}</Typography>} subheader={<Typography variant="subtitle1">{coinData.name} ~ #{coinData.market_cap_rank ? coinData.market_cap_rank : 'not available'} </Typography>} />
                            <CardContent>
                                <Box component={'section'} className="container-fluid">
                                    <BarChart chartData={data} />
                                </Box>
                                <Box component={'section'} className="d-flex flex-wrap align-items-center py-5">
                                    <section className={`m-2 bg-body-secondary rounded-4 p-3 ${ coinData.market_data.current_price.inr ? 'd-block' : 'd-none' }`}>
                                        <Typography variant="h5">Current Price:</Typography>
                                        <Typography variant="body1">&#8377; {coinData.market_data.current_price.inr}</Typography>
                                    </section>
                                    <section className={`m-2 bg-body-secondary rounded-4 p-3 ${ coinData.market_data.market_cap.inr ? 'd-block' : 'd-none' }`}>
                                        <Typography variant="h5">Market Capital INR:</Typography>
                                        <Typography variant="body1">{coinData.market_data.market_cap.inr}</Typography>
                                    </section>
                                    <section className={`m-2 bg-body-secondary rounded-4 p-3 ${ coinData.market_data.high_24h.inr ? 'd-block' : 'd-none' }`}>
                                        <Typography variant="h5">High 24h INR:</Typography>
                                        <Typography variant="body1">{coinData.market_data.high_24h.inr}</Typography>
                                    </section>
                                    <section className={`m-2 bg-body-secondary rounded-4 p-3 ${ coinData.market_data.price_change_24h_in_currency.inr ? 'd-block' : 'd-none' }`}>
                                        <Typography variant="h5">Price Change INR:</Typography>
                                        <Typography variant="body1">{coinData.market_data.price_change_24h_in_currency.inr}</Typography>
                                    </section>
                                    <section className={`m-2 bg-body-secondary rounded-4 p-3 ${ coinData.market_data.total_volume.inr ? 'd-block' : 'd-none' }`}>
                                        <Typography variant="h5">Total Volume INR:</Typography>
                                        <Typography variant="body1">{coinData.market_data.total_volume.inr}</Typography>
                                    </section>
                                </Box>
                                <Box component={'section'} className={`my-1 px-3 ${ coinData.description.en ? 'd-block' : 'd-none' }`}>
                                    <Typography variant="h4" className="border-bottom">
                                        About
                                    </Typography>
                                    <Typography variant="body1" className="my-3" textAlign={'justify'}>
                                        {coinData.description.en ? coinData.description.en : 'Sorry! No description for this one...'}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={4} sm={4} xs={12}>
                        <Box component={'section'} sx={{ display: { lg: 'block', md: 'block', sm: 'flex', xs: 'flex' } }}>
                            <Card className={`shadow-none border rounded-4 my-2 mx-auto ${ coinData.categories.length === 0 ? 'd-none' : 'd-block' }`}>
                                <CardContent>
                                    <ul className="list-group list-group-flush">
                                        <p className="mb-2">Categories</p>
                                        {
                                            coinData.categories.map( ( category, index ) => <Typography variant="body2" key={index} className="me-3 list-group-item text-secondary py-1 px-2">{category}</Typography> )
                                        }
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="shadow-none border rounded-4 my-2 mx-auto">
                                <CardContent>
                                    <p className="p-0 m-0">
                                        Links
                                    </p>
                                    <ButtonGroup
                                        orientation="vertical"
                                        variant="text"
                                    >
                                        <Link to={coinData.links.homepage[ 0 ]} target="_blank" className={coinData.links.homepage[ 0 ] ? 'd-flex' : 'd-none'}><Button startIcon={<Home />}>Homepage</Button></Link>
                                        <Link to={coinData.links.repos_url.github[ 0 ]} target="_blank" className={coinData.links.repos_url.github[ 0 ] ? 'd-flex' : 'd-none'}><Button startIcon={<GitHub />}>Github</Button></Link>
                                        <Link to={coinData.links.subreddit_url} target="_blank" className={coinData.links.subreddit_url ? 'd-flex' : 'd-none'}><Button startIcon={<Reddit />}>SubReddit</Button></Link>
                                    </ButtonGroup>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                    <Link to='/'><Button variant="contained" className="rounded-pill" startIcon={<NavigateBeforeIcon />}>back</Button></Link>
                </Box>
            </Box>
        </>
    )
}

export default CoinDetails