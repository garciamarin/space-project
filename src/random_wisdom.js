import React from 'react';
import { ConstructionRounded } from '@mui/icons-material';
import { Box, Typography, Paper } from '@mui/material';
import {useState} from "react";

export default function GetWisdom() {

    const [wisdom, getWisdom] = useState("");

fetch("https://type.fit/api/quotes")
.then((res) => res.json())
.then((data) => {
     getWisdom(data.text + " Author:" + data.author);
     });
  return(
    <div>
        {wisdom}
    </div>

)

};