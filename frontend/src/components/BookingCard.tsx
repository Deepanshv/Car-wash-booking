import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActions, Typography, IconButton, Divider, Chip, Box, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Button, CircularProgress, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhoneIcon from '@mui/icons-material/Phone';
import EventIcon from '@mui/icons-material/Event';
import { Booking } from '../App';
import api from '../api/axios';

interface BookingCardProps {
  booking: Booking;
  onDelete: (id: string) => void;
  onUpdateStatus: (id: string, status: Booking['status']) => void;
}

const statusColors: { [key in Booking['status']]: 'primary' | 'secondary' | 'success' | 'error' | 'warning' } = {
    Pending: 'warning',
    Confirmed: 'primary',
    Completed: 'success',
    Cancelled: 'error',
};

const BookingCard: React.FC<BookingCardProps> = ({ booking, onDelete, onUpdateStatus }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const open = Boolean(anchorEl);

  const handleStatusChange = (status: Booking['status']) => {
    onUpdateStatus(booking._id, status);
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await api.delete(`/api/bookings/${booking._id}`);
      onDelete(booking._id);
    } catch (error) {
      console.error('Error deleting booking:', error);
    } finally {
      setIsDeleting(false);
      setDeleteDialogOpen(false);
    }
  };

  return (
    <>
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: '12px', transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', '&:hover': { transform: 'scale(1.02)', boxShadow: 6, } }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Typography variant="h5" component="div">
            {booking.customerName}
            </Typography>
            <Chip label={booking.status} color={statusColors[booking.status]} size="small" />
        </Box>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {booking.carDetails.make} {booking.carDetails.model}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <EventIcon sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body2">
                {new Date(booking.date).toLocaleDateString()}
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body2">{booking.phone}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mr: 1 }}>
                Service:
            </Typography>
            <Typography variant="body1" color="text.primary">
                {booking.serviceType}
            </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Tooltip title="Edit Booking"><IconButton component={Link} to={`/edit/${booking._id}`} aria-label="edit"><EditIcon /></IconButton></Tooltip>
        <Tooltip title="Delete Booking"><IconButton onClick={() => setDeleteDialogOpen(true)} aria-label="delete" color="error"><DeleteIcon /></IconButton></Tooltip>
        <Tooltip title="More Options"><IconButton aria-label="more" id="long-button" aria-controls={open ? 'long-menu' : undefined} aria-expanded={open ? 'true' : undefined} aria-haspopup="true" onClick={(e) => setAnchorEl(e.currentTarget)}><MoreVertIcon /></IconButton></Tooltip>
        <Menu id="long-menu" MenuListProps={{ 'aria-labelledby': 'long-button' }} anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => handleStatusChange('Pending')}>Pending</MenuItem>
          <MenuItem onClick={() => handleStatusChange('Confirmed')}>Confirmed</MenuItem>
          <MenuItem onClick={() => handleStatusChange('Completed')}>Completed</MenuItem>
          <MenuItem onClick={() => handleStatusChange('Cancelled')}>Cancelled</MenuItem>
        </Menu>
      </CardActions>
    </Card>

    <Dialog open={deleteDialogOpen} onClose={isDeleting ? undefined : () => setDeleteDialogOpen(false)}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent><Typography>Are you sure you want to delete the booking for <strong>{booking.customerName}</strong>?</Typography></DialogContent>
      <DialogActions>
        <Button onClick={() => setDeleteDialogOpen(false)} disabled={isDeleting}>Cancel</Button>
        <Button onClick={handleDelete} color="error" variant="contained" disabled={isDeleting} startIcon={isDeleting && <CircularProgress size={20} color="inherit" />}>
          {isDeleting ? 'Deleting...' : 'Delete'}
        </Button>
      </DialogActions>
    </Dialog>
    </>
  );
};

export default BookingCard;