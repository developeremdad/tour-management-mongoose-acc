const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// server
const port = process.env.PORT || 8080;


// database connection
mongoose.connect(process.env.DATABASE,).then(() => {
  console.log(`Database connection is successfully`.red.bold);
})

app.listen(port, () => {
  console.log(`Tour Management app is running on port ${port}`.yellow.bold);
});
