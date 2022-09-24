const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// routes 
const tourRoute = require('./routes/api/v1/tour.route');
app.use("/api/v1/tours/", tourRoute);


app.get("/", (_req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
