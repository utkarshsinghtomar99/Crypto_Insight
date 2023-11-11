import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const SearchCard = ( { data } ) =>
{

    console.log( data );


    return (
        <>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <Card sx={{ boxShadow: 'none', border: '1px solid lightgray', borderRadius: '25px' }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar alt="coin logo" src={data.large} sx={{ width: '30px', height: '30px' }} className="me-2" />
                            <Typography variant="h5">{data.symbol}</Typography>
                        </Box>
                        <Typography variant="body2" color={'GrayText'}>{data.name}</Typography>
                    </CardContent>
                    <CardActions sx={{ borderRadius: '10px', justifyContent: 'end' }}>
                        <Link to={`/coin/${ data.id }`}><Button endIcon={<NavigateNextIcon />} size="small" sx={{ fontSize: '13px', textTransform: 'capitalize' }}>Know More</Button></Link>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default SearchCard;