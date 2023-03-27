import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from 'body-parser'
dotenv.config();
const app = express();
app.use(cors());

// mongoose
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoose connected to mongodb"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// router
import pinRouter from "./routes/pins.js";
import userRouter from "./routes/users.js";
import herbRouter from './routes/herbs.js'
import farmRouter from './routes/farm.js'

app.use("/api/pins", pinRouter);
app.use("/api/user", userRouter);
app.use("/api/herb", herbRouter);
app.use("/api/farm", farmRouter);

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
