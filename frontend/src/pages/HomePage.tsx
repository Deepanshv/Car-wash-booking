import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  Skeleton,
  useTheme,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
  SelectChangeEvent,
} from "@mui/material";
import api from "../api/axios";
import { Booking } from "../App";
import BookingCard from "../components/BookingCard";
import StatCard from "../components/StatCard";
import { useDebounce } from "../hooks/useDebounce";

// Icons
import ConfirmedIcon from "@mui/icons-material/ThumbUp";
import PendingIcon from "@mui/icons-material/HourglassTop";
import CompletedIcon from "@mui/icons-material/CheckCircle";
import CancelledIcon from "@mui/icons-material/Cancel";

const HomePage: React.FC = () => {
  const theme = useTheme();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [serviceTypeFilter, setServiceTypeFilter] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const fetchBookings = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        if (statusFilter) params.append("status", statusFilter);
        if (serviceTypeFilter) params.append("serviceType", serviceTypeFilter);
        if (sortBy) params.append("sortBy", sortBy);
        params.append("page", currentPage.toString());

        let response;
        if (debouncedSearchTerm) {
          params.append("q", debouncedSearchTerm);
          response = await api.get(`/api/bookings/search?${params.toString()}`);
        } else {
          response = await api.get(`/api/bookings?${params.toString()}`);
        }

        setBookings(response.data.bookings);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookings();
  }, [
    debouncedSearchTerm,
    statusFilter,
    serviceTypeFilter,
    sortBy,
    currentPage,
  ]);

  const handleDelete = (deletedBookingId: string) => {
    setBookings((prevBookings) =>
      prevBookings.filter((booking) => booking._id !== deletedBookingId)
    );
  };

  const handleUpdateStatus = async (id: string, status: Booking["status"]) => {
    try {
      const response = await api.put(`/api/bookings/${id}`, { status });
      setBookings((prevBookings) =>
        prevBookings.map((b) => (b._id === id ? response.data : b))
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setStatusFilter("");
    setServiceTypeFilter("");
    setSortBy("date");
    setCurrentPage(1);
  };

  const kpiData = useMemo(() => {
    return {
      pending: bookings.filter((b) => b.status === "Pending").length,
      confirmed: bookings.filter((b) => b.status === "Confirmed").length,
      completed: bookings.filter((b) => b.status === "Completed").length,
      cancelled: bookings.filter((b) => b.status === "Cancelled").length,
    };
  }, [bookings]);

  const renderSkeletons = () => (
    <Grid container spacing={3}>
      {[...Array(8)].map((_, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
          <Skeleton
            variant="rectangular"
            height={250}
            sx={{ borderRadius: 3 }}
          />
        </Grid>
      ))}
    </Grid>
  );

  const statItems = [
    {
      title: "Pending",
      value: kpiData.pending,
      icon: <PendingIcon />,
      color: theme.palette.warning.main,
    },
    {
      title: "Confirmed",
      value: kpiData.confirmed,
      icon: <ConfirmedIcon />,
      color: theme.palette.primary.main,
    },
    {
      title: "Completed",
      value: kpiData.completed,
      icon: <CompletedIcon />,
      color: theme.palette.success.main,
    },
    {
      title: "Cancelled",
      value: kpiData.cancelled,
      icon: <CancelledIcon />,
      color: theme.palette.error.main,
    },
  ];

  return (
    <Box>
      {/* KPI CARDS */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statItems.map((stat, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <StatCard
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
            />
          </Grid>
        ))}
      </Grid>

      {/* FILTERS AND SEARCH */}
      <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ flexGrow: 1, minWidth: '200px' }}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={statusFilter}
            label="Status"
            onChange={(e: SelectChangeEvent) => setStatusFilter(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Confirmed">Confirmed</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Service Type</InputLabel>
          <Select
            value={serviceTypeFilter}
            label="Service Type"
            onChange={(e: SelectChangeEvent) => setServiceTypeFilter(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Basic Wash">Basic Wash</MenuItem>
            <MenuItem value="Deluxe Wash">Deluxe Wash</MenuItem>
            <MenuItem value="Full Detailing">Full Detailing</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortBy}
            label="Sort By"
            onChange={(e: SelectChangeEvent) => setSortBy(e.target.value)}
          >
            <MenuItem value="date">Newest</MenuItem>
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="duration">Duration</MenuItem>
            <MenuItem value="status">Status</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={handleResetFilters} variant="outlined">Reset</Button>
      </Box>

      {/* BOOKING CARDS */}
      {isLoading ? (
        renderSkeletons()
      ) : bookings.length > 0 ? (
        <>
          <Grid container spacing={3}>
            {bookings.map((booking) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={booking._id}>
                <BookingCard
                  booking={booking}
                  onDelete={handleDelete}
                  onUpdateStatus={handleUpdateStatus}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(_, page) => setCurrentPage(page)}
              color="primary"
            />
          </Box>
        </>
      ) : (
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="h6" paragraph>
            No bookings match your criteria.
          </Typography>
          <Button variant="contained" component={Link} to="/add">
            Add a Booking
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default HomePage;