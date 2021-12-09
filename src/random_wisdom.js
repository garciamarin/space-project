import React from 'react';
import { ConstructionRounded } from '@mui/icons-material';
import { Box, Typography, Paper } from '@mui/material';
import {useState, useEffect} from "react";

export default function GetWisdom() {

    const [wisdom, setWisdom] = useState("");

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
            .then((res) => res.json())
            .then((data) => {
        setWisdom("______________   " + data[0].text + " Author:" + data[0].author);
        });
    }, [])

  return(
    <div>
        {wisdom}
    </div>

)

};