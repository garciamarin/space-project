import { AppBar, Box, Toolbar, Typography, IconButton, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function AppBarComp ( { darkToggle } ) {
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
        <Toolbar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Space [b]Log
            </Typography>
            <Switch onChange={darkToggle} />

            <DarkModeIcon />

        </Toolbar>
        </AppBar>
    </Box>
        </>
    )
}