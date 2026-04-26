import express from "express";
import { usermodel } from "../models/User.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { purchasemodel } from "../models/purchase.module.js";
import { userMiddleware } from "../middleware/user.middleware.js";
import { coursemodel } from "../models/course.model.js";

dotenv.config();

const userRouter = express.Router();

// Signup
userRouter.post("/signup", async (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await usermodel.create({
      email:email,
      password: hashedPassword,
      firstName: firstname,
      lastName: lastname
    });

    res.json({ message: "Signup successful" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Signin
userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.status(403).json({ message: "Incorrect credentials1" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(403).json({ message: "Incorrect credentials2" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRATE_PASS_U, {
      expiresIn: "1h"
    });

    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Purchases
userRouter.get("/purchases",userMiddleware,async(req, res) => {
  const userId=req.userId;
  const purchases=await purchasemodel.find({
    userId
  })
  const courseData=await coursemodel.find({
    _id:{$in: purchases.map(x=>x.courseId)}
  })
  res.json({
    purchases,
    courseData
  })

  
});

export { userRouter };
