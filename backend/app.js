const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    credentials: true, // Allow sending cookies when making requests
  })
);



// var bodyParser = require("body-parser");
// const User=require("./model/userschema")
dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(express.json());
app.use(require("./router/auth"));
const PORT = process.env.PORT;


// middleware();
// app.use(bodyParser.json()); // support json encoded bodies
app.get("/", (req, res) => {
  console.log("Connected to the server!");
  res.send("Hello world this is from app.js");
});
app.get("/test", (req, res) => {
  console.log("Connected to the server!");
  res.send("Hello world");
});
app.get("/cookie", (req, res) => {
  res.cookie("Test", "thapa");
  res.send("Hello world!! this is login");
});



app.get("/signin", (req, res) => {
  console.log("Connected to the server!");
  //   res.send("Hello world");
  res.send("This is signin page");
});

app.get("/signup", (req, res) => {
  console.log("Connected to the server!");
  //   res.send("Hello world");
  res.send("This is signup page");
});

app.listen(PORT, () => {
  console.log(`Server is running at port number ${PORT}`);
});
