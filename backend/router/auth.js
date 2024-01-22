const express = require("express");
const router = express.Router();
const cors=require("cors");
const multer = require("multer");

require("../db/conn");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/userschema");
const authenticate=require("../middleware/authenticate")
router.use(cookieParser());
router.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    credentials: true, // Allow sending cookies when making requests
  })
);

// router.get("/", (req, res) => {
//   res.send("Hello world!!hi is from I think your guess is correct");
// });

// router.post("/register", (req, res) => {
//   const { name, email, work, password, cpassword } = req.body;
//   console.log(name);
//   console.log(email);
//   console.log(work);
//   console.log(password);

//   if (!name || !email || !work || !password || !cpassword) {
//     return res.json({ error: "Please fill all the fields" });
//   }

//   User.findOne({ email: email }).then((userExist) => {
//     if (userExist) {
//       return res.json({ error: "Email already exists" });
//     } else {
//       const newUser = new User({ name, email, work, password, cpassword });
//       newUser
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User registered successfully" });
//         })
//         .catch((err) => res.status(500).json({ error: "Failed to register" }));
//     }
//   });
// });

router.get("/", (req, res) => {
  res.send("Hello world!!hi is from I think your guess is correct");
});

router.post("/register", async (req, res) => {
  const { name, email, work, number, password, cpassword } = req.body;

  console.log(name);
  console.log(email);
  console.log(work);
  console.log(password);
  console.log(number);
  if (!name || !email || !work || !password || !cpassword) {
    return res.json({ error: "Please fill all the fields" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "This Email has been used!" });
    } else if (password != cpassword) {
      return res
        .status(422)
        .json({ error: "Password and confirm password are not same" });
    } else {
      const newUser = new User({
        name,
        email,
        number,
        work,
        password,
        cpassword,
      });
      const userRegister = await newUser.save();
      if (userRegister) {
        res.json({
          message: `User Registered Successfully! ${userRegister.name}`,
        });
      } else {
        res.status(500).json({ error: "Failed to register" });
      }
    }
  } catch (err) {
    console.log("err");
  }
});
router.post("/signin", async (req, res) => {
  console.log(req.body);
  // res.json({message:"awesome"})
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please fill in both email and password" });
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2590000800),
        httpOnly: true,
      });

      if (!isMatch) {
        return res.status(400).json({ error: "Invalid Credential password" });
      } else {
        return res.json({ message: "user signin successful" });
      }
    } else {
      return res.status(400).json({ error: "Invalid Credential" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/about",authenticate,(req,res)=>{
  console.log("hello world this is about page")
  // res.send("hello world this is about page");
  res.send(req.rootUser);

})

module.exports = router;
