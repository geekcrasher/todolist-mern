const dotenv = require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB");
const todoRouter = require("./routes/todoRouter");

// connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/todos", todoRouter);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });



/*
  const startDB = async () => {
   try {
      await connectDB()
      app.listen(PORT, () => {
         console.log(`Server running on port ${PORT}`)
      })
   } catch (error) {
      console.log(error)
   }
}

startDB()
*/
