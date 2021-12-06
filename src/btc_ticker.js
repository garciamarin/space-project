import React from 'react';
import { ConstructionRounded } from '@mui/icons-material';
import { Box, Typography, Paper } from '@mui/material';
import {useState} from "react";


export default function GetBtc() {
    
    const [btc, getBtc] = useState("");
   
       fetch(`https://api.nomics.com/v1/currencies/ticker?key=197d432dcb8da0bea2f38c965b1697a78f2dea9e&ids=BTC&interval=1h&convert=USD&per-page=1&page=1`)
       .then((res) => res.json())
       .then((data) => {
            getBtc(data[0].id + "  Price:" + data[0].price);
            });
    return(
        <div>
            {btc}
        </div>

    )
};