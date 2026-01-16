const express = require("express");
require("dotenv").config();
require("./config/db");

const reservationRoutes = require("./routes/reservationRoutes");

const app = express();

app.use(express.json());

app.use("/api/reservations", reservationRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Reservation API çalışıyor" });
});

module.exports = app;

