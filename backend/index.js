// index.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const { errorHandler } = require("./middleware/errorMiddleware.js");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(morgan("dev"));

// Routes
const bookingRoutes = require("./routes/bookings.js");
const searchRoutes = require("./routes/search.js");
app.use("/api/bookings", bookingRoutes);
app.use("/api/bookings/search", searchRoutes);

// Basic Route
app.get("/", (req, res) => {
  res.send("Car Wash Booking API is running!");
});

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log("MongoDB connected successfully.");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
