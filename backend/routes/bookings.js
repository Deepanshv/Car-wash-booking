const express = require("express");
const router = express.Router();
const controller = require("../controllers/bookingController.js");
const { validateBooking } = require("../middleware/validationMiddleware.js");

router.post("/", validateBooking, controller.createBooking);
router.get("/", controller.getAllBookings);
router.get("/:id", controller.getBookingById);
router.put("/:id", validateBooking, controller.updateBooking);
router.delete("/:id", controller.deleteBooking);

module.exports = router;
