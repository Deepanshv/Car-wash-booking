import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography, Paper, SelectChangeEvent, Stack, Grid, CircularProgress } from '@mui/material';
import { Booking } from '../App';

// Use a partial of the booking for the form data
type FormData = Partial<Booking>;

const BookingFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    customerName: '',
    phone: '',
    carDetails: { make: '', model: '', year: new Date().getFullYear(), type: '' },
    serviceType: 'Basic Wash',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '',
    duration: 60,
    price: 0,
    status: 'Pending',
    addOns: [],
  });

  useEffect(() => {
    if (id) {
      const fetchBooking = async () => {
        try {
          const response = await api.get<Booking>(`/api/bookings/${id}`);
          const { date, ...rest } = response.data;
          setFormData({ 
            ...rest,
            date: new Date(date).toISOString().split('T')[0], 
          });
        } catch (error) {
          console.error('Error fetching booking:', error);
        }
      };
      fetchBooking();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
        const [parent, child] = name.split('.');
        setFormData(prev => ({
            ...prev,
            [parent]: { ...(prev[parent] as object), [child]: value }
        }));
    } else {
        setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (id) {
        await api.put(`/api/bookings/${id}`, formData);
      } else {
        await api.post('/api/bookings', formData);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving booking:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Paper elevation={0} sx={{ p: { xs: 2, sm: 4 } }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
            {id ? 'Edit Booking' : 'Add New Booking'}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
                <Grid xs={12} sm={6}>
                    <TextField fullWidth margin="normal" label="Customer Name" name="customerName" value={formData.customerName} onChange={handleChange} required />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField fullWidth margin="normal" label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField fullWidth margin="normal" label="Car Make" name="carDetails.make" value={formData.carDetails?.make} onChange={handleChange} required />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField fullWidth margin="normal" label="Car Model" name="carDetails.model" value={formData.carDetails?.model} onChange={handleChange} required />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField fullWidth margin="normal" label="Car Year" name="carDetails.year" type="number" value={formData.carDetails?.year} onChange={handleChange} required />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField fullWidth margin="normal" label="Car Type" name="carDetails.type" value={formData.carDetails?.type} onChange={handleChange} />
                </Grid>
                <Grid xs={12} sm={6}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Service Type</InputLabel>
                        <Select label="Service Type" name="serviceType" value={formData.serviceType} onChange={handleChange}>
                            <MenuItem value="Basic Wash">Basic Wash</MenuItem>
                            <MenuItem value="Deluxe Wash">Deluxe Wash</MenuItem>
                            <MenuItem value="Full Detailing">Full Detailing</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField fullWidth margin="normal" label="Booking Date" name="date" type="date" value={formData.date} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField fullWidth margin="normal" label="Time Slot" name="timeSlot" value={formData.timeSlot} onChange={handleChange} required />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField fullWidth margin="normal" label="Duration (minutes)" name="duration" type="number" value={formData.duration} onChange={handleChange} required />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField fullWidth margin="normal" label="Price" name="price" type="number" value={formData.price} onChange={handleChange} required />
                </Grid>
                {id && (
                    <Grid xs={12} sm={6}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Status</InputLabel>
                            <Select label="Status" name="status" value={formData.status} onChange={handleChange}>
                                <MenuItem value="Pending">Pending</MenuItem>
                                <MenuItem value="Confirmed">Confirmed</MenuItem>
                                <MenuItem value="Completed">Completed</MenuItem>
                                <MenuItem value="Cancelled">Cancelled</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                )}
            </Grid>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    disabled={isSubmitting}
                    startIcon={isSubmitting && <CircularProgress size={20} color="inherit" />}
                >
                    {isSubmitting ? 'Saving...' : 'Save Booking'}
                </Button>
                <Button variant="outlined" size="large" onClick={() => navigate('/')} fullWidth disabled={isSubmitting}>Cancel</Button>
            </Stack>
        </Box>
    </Paper>
  );
};

export default BookingFormPage;