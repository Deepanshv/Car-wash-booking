import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ThemeContext);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ color: 'inherit', textDecoration: 'none', mr: 2 }}>
          Car Wash Co.
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit" component={RouterLink} to="/">
          Bookings
        </Button>
        <Button color="inherit" component={RouterLink} to="/add">
          New Booking
        </Button>
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
          aria-label={theme.palette.mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;