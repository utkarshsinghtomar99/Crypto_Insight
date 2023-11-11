// import CardContainer from "../components/CardContainer"
import { Grid, Typography } from "@mui/material";
import bg from '../assets/Crypto_BG.jpg';
import cryptoSide from "../assets/crypto_side.png";


const Home = () =>
{
    return (
        <>
            <div id="bg" className="d-flex flex-column align-items-start justify-content-center text-light">
                <img id="home-wallpaper" src={bg} />
                <Grid container>
                    {/* !Have apply responsive values */}
                    <Grid item lg={5} className="d-flex flex-column align-items-center justify-content-center ">
                        <Typography variant="h4" className="animate__animated animate__zoomIn text-center" color={'GrayText'}>Welcome To</Typography>
                        <Typography variant="h2" className="animate__animated animate__zoomIn text-center">Crypto Insight</Typography>
                        <Typography variant='h6' className="animate__animated animate__fadeIn text-center" color={'gainsboro'}>"Where Trust Meets Technology."</Typography>
                    </Grid>
                    {/* !Same here... */}
                    <Grid item lg={7} className="d-flex flex-column align-items-center justify-content-center ">
                        <img src={cryptoSide} style={{ width: '650px' }} />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Home