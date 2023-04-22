import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import express from "express";
import { generateToken } from '../utils.js'

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  const users = await User.find({})
  res.send(users)
})

// update user
userRouter.put("/:id/edit", async (req, res) => {
  try {
    // console.log(req.body)
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    // console.log({ updateUser })
    res.status(201).json({ message: "update was successfully", status: "SUCCESS", data: updateUser });

  } catch (error) {
    console.log({ error })
  }
});

// login
userRouter.post("/login", async (req, res) => {
  try {
    // find user
    // console.log(req.body)
    let { username, password } = req.body

    if (username === "" || password === "") {
      res.json({ status: "FAILED", message: "กรุณากรอกข้อมูลให้ครบถ้วน" })
    } else {
      const user = await User.findOne({ username: req.body.username })
      // console.log({ user })
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          res.json({
            status: "SUCCESS",
            data: {
              _id: user._id,
              username: user.username,
              isAdmin: user.isAdmin,
              role: user.role,
              token: generateToken(user)
            }
          })
          return;
        } else {
          res.json({
            status: "FAILED",
            message: "กรอกชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"
          })
          return;
        }
      }
      res.json({
        status: "FAILED",
        message: "กรอกชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"
      })
    }
  } catch (error) {
    res.json({ message: "บางอย่างผิดพลาด", status: "FAILED" });
  }
});

// register
userRouter.post("/register", async (req, res) => {
  // console.log(req.body)
  let { username, email, password1 } = req.body;
  username = username.trim();
  email = email.trim();
  let password = password1.trim();

  if (username === "" || email === "" || password === "") {
    res.json({
      status: "FAILED",
      message: "Empty input fields!",
    });
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    res.json({
      status: "FAILED",
      message: "Invalid email",
    });
  } else if (password.length < 4) {
    res.json({
      status: "FAILED",
      message: "Password is too short!",
    });
  } else {
    // Checking if user already exists
    const emailCheck = await User.findOne({ email: req.body.email });
    const usernameCheck = await User.findOne({ username: req.body.username });
    if (emailCheck) {
      res.json({
        status: "FAILED",
        message: "Email has registed",
      });
    } else if (usernameCheck) {
      res.json({
        status: "FAILED",
        message: "Username has registed",
      });
    }
    else {
      // generate new password
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password1, salt);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      const user = await newUser.save();
      res.json({
        status: "SUCCESS",
        message: "Signin successful",
        data: newUser,
      });
      return;
    }
  }
});

export default userRouter;
