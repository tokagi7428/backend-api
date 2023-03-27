import express from "express";
import Pin from "../models/Pin.model.js";

const pinRouter = express.Router();

// create a pin
pinRouter.post("/", async (req, res) => {
  const newPin = new Pin(req.body);
  try {
    const savePin = await newPin.save();
    res.status(200).json(savePin);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all pins
pinRouter.get("/", async (req, res) => {
  const pins = await Pin.find({});
  try {
    res.status(201).json(pins);
  } catch (err) {
    res.status(500).json(err);
  }
});



export default pinRouter;
