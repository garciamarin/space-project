import { ConstructionRounded } from '@mui/icons-material';
import { Box, Typography, Paper } from '@mui/material';
import getBtc from './btc_ticker';

export default function LiveDataComp() { 
    
    return (
        <>
        <Box m={2}>
        <Paper>
        <Typography>
           <div> <getBtc/> </div>
        </Typography>
        </Paper>
        </Box>
        </>
    );
};