const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// routes 
const toursRoute = require('./routes/api/v1/tours.route');
app.use("/api/v1/tours/", toursRoute);

const tourRoute = require('./routes/api/v1/tour.route');
app.use("/api/v1/tour", tourRoute)


app.get("/", (_req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
