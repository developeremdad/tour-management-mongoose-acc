const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// database connect with mongoose and mongodb atlas.
const database = (module.exports = () =>{
  const connectionParams = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  };
  try {
    mongoose.connect(process.env.URL,
    connectionParams
    );
    console.log("Database Connection Successfully");
  } catch (error) {
    console.log("Database connection fail.", error);
  }
})

database();



// database connect with mongoose and local mongodb.
// mongoose.connect(process.env.DATABASE,).then(() => {
//   console.log(`Database connection is successfully`.red.bold);
// })

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Tour Management app is running on port ${port}`.yellow.bold);
});
