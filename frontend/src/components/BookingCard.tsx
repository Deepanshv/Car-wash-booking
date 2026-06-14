import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActions, Typography, IconButton, Divider, Chip, Box, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
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
  const [confirmOpen, setConfirmOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusChange = (status: Booking['status']) => {
    onUpdateStatus(booking._id, status);
    handleClose();
  };

  const handleDeleteClick = () => {
    setConfirmOpen(true);
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
  };

  const handleConfirmDelete = async () => {
    try {
        await api.delete(`/api/bookings/${booking._id}`);
        onDelete(booking._id);
    } catch (error) {
        console.error('Error deleting booking:', error);
    } finally {
        handleConfirmClose();
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
        <IconButton component={Link} to={`/edit/${booking._id}`} aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDeleteClick} aria-label="delete" color="error">
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{ 'aria-labelledby': 'long-button' }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleStatusChange('Pending')}>Pending</MenuItem>
          <MenuItem onClick={() => handleStatusChange('Confirmed')}>Confirmed</MenuItem>
          <MenuItem onClick={() => handleStatusChange('Completed')}>Completed</MenuItem>
          <MenuItem onClick={() => handleStatusChange('Cancelled')}>Cancelled</MenuItem>
        </Menu>
      </CardActions>
    </Card>

    <Dialog
        open={confirmOpen}
        onClose={handleConfirmClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            Confirm Deletion
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete the booking for <strong>{booking.customerName}</strong>? This action cannot be undone.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleConfirmClose}>Cancel</Button>
            <Button onClick={handleConfirmDelete} color="error" autoFocus>
                Delete
            </Button>
        </DialogActions>
    </Dialog>
    </>
  );
};

export default BookingCard;