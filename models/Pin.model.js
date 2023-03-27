import mongoose from "mongoose";
import Farmer from "./Farmer.model.js";

const pinSchema = new mongoose.Schema(
  {
    Farmer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Farmer",
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const Pin = mongoose.model("Pin", pinSchema);
export default Pin;
