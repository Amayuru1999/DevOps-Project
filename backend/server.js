require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const riderRoutes = require("./routes/riders");
const userRoutes = require("./routes/user");
const cors = require('cors');
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


const corsOptions = {
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow these HTTP methods
  allowedHeaders: '*', // Allow all headers
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions)); 
//routes
app.use("/api/riders", riderRoutes);
app.use("/api/user", userRoutes);
//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Successfully connected to the database 🚀");
    //Listen for requests
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
