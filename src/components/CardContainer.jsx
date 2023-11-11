import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { useGlitch } from 'react-powerglitch'
import BarChart from "./BarChart";


const CardContainer = () =>
{

    /*
    const [userData, setUserData] = useState({
    labels: [250, 480, 790, 744, 666, 478],
    datasets: [{
    label: 'Demo',
    data: [133, 221, 783, 567, 433, 90]
    }],
    }),
    const [ userData, setUserData ] = useState( {
        labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ],
        datasets: [ {
            label: 'Demo',
            data: [ 133, 221, 783, 567, 433 ],
            backgroundColor: [ 'teal', 'red', 'gray', 'violet', 'rgb(255, 255, 0)' ],
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            label: 'Demo1',
            data: [ 482, 796, 152, 325, 689, 235 ],
            backgroundColor: [ 'green', 'red', 'pink', 'violet', 'rgb(255, 255, 0)' ],
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            label: 'Demo',
            data: [ 651, 451, 231, 762, 532, 315 ],
            backgroundColor: [ 'black', 'red', 'indigo', 'violet', 'rgb(255, 255, 0)' ],
            borderColor: 'white',
            borderWidth: 2,
        },
        ],
    } )
     */
    return (
        <>
            {/* Chances of Errors */}
            {/* <Box sx={{ width: '50%' }}>
                <BarChart chartData={userData} />
            </Box> */}
            {/* Chances of Errors */}
        </>
    )
}

export default CardContainer
