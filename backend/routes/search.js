const express = require("express");
const router = express.Router();
const controller = require("../controllers/searchController.js");

router.get("/", controller.searchBookings);

module.exports = router;
