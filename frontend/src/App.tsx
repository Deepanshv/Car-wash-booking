import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingFormPage from './pages/BookingFormPage';
import Navbar from './components/Navbar';
import { Container, CssBaseline, Toolbar, ThemeProvider, createTheme } from '@mui/material';
import { ThemeContext } from './contexts/ThemeContext';


export interface Booking {
  _id: string;
  customerName: string;
  phone: string;
  carDetails: {
    make: string;
    model: string;
    year: number;
    type: string;
  };
  serviceType: 'Basic Wash' | 'Deluxe Wash' | 'Full Detailing';
  date: string;
  timeSlot: string;
  duration: number;
  price: number;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  rating?: number;
  addOns?: string[];
  createdAt?: string;
  updatedAt?: string;
}

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#009688', // Teal
          },
          secondary: {
            main: '#ff5722', // Deep Orange
          },
          background: {
            default: mode === 'light' ? '#f4f6f8' : '#121212',
          },
        },
        typography: {
          fontFamily: 'Roboto, sans-serif',
        },
        shape: {
          borderRadius: 8,
        },
      }),
    [mode],
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          <Router>
            <CssBaseline />
            <Navbar />
            <Toolbar />
            <Container sx={{ mt: 4, mb: 4, mx: 'auto' }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add" element={<BookingFormPage />} />
                <Route path="/edit/:id" element={<BookingFormPage />} />
              </Routes>
            </Container>
          </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;