const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const axios = require("axios");
const app = express();
app.use(bodyparser.json());

const PORT = process.env.PORT;
const DB = process.env.DB_URL;

app.get("/", (req, res) => {
  res.send("Hello...");
});

if (!DB) {
  process.exit;
}

// Connect to MongoDB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4, //To Prevent Connection Error
  })
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Server is running...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
