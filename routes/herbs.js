import express from "express";
import Herb from "../models/Herb.model.js";

const herbRouter = express.Router();

// create a pin
// get all Herb
herbRouter.get("/", async (req, res) => {
  try {
    const farms = await Herb.find({});
    res.status(201).json({ message: "GET SUCCESS", status: "SUCCESS", data: farms });
  } catch (err) {
    res.status(500).json({ message: "บางอย่างผิดพลาด", status: "FAILED" });
  }
});

// get the farm
herbRouter.get("/:id", async (req, res) => {
  try {
    const farms = await Herb.findById(req.params.id);
    // console.log("Herb : ", Herb);
    res.status(201).json({ message: "SUCCESS", status: "SUCCESS", data: farms });
  } catch (error) {
    res.status(500).json({ message: "บางอย่างผิดพลาด", status: "FAILED" });
  }
});

// get the farm
herbRouter.put("/:id", async (req, res) => {
  try {
    const { name, image, desc, price, properties } = req.body
    // console.log(req.body)
    if (name === "" || image === "" || desc === "" || price === "" || properties === "") {
      res.status(403).json({ message: "กรุณาเติมข้อมูลให้ครบถ้วน", status: "FAILED" });
    }
    const updateHerb = await Herb.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(201).json({ message: "update was successfully", status: "SUCCESS", data: updateHerb });

  } catch (error) {
    console.log({ error })
  }
});

// get the farm
herbRouter.put("/:id/edit/approved", async (req, res) => {
  try {
    const { id, approved } = req.body
    // console.log(req.body)

    const updateHerb = await Herb.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    console.log({ updateHerb })
    res.status(201).json({ message: "update was successfully", status: "SUCCESS", data: updateHerb });

  } catch (error) {
    console.log({ error })
  }
});

// create a herb
herbRouter.post("/", async (req, res) => {
  try {
    // console.log("body : ", req.body)
    const newHerb = new Herb(req.body);
    const saveFarm = await newHerb.save();
    res.status(201).json({ message: "create was successfully", status: "SUCCESS", data: saveFarm });
  } catch (error) {
    res.status(500).json({ message: "บางอย่างผิดพลาด", status: "FAILED" });
  }
});


herbRouter.delete("/:id", async (req, res) => {
  try {
    await Herb.findByIdAndDelete(req.params.id)
    res.status(200).json({ status: "SUCCESS", message: "The Farm has been deleted" })
  } catch (error) {
    res.status(500).json({ message: "บางอย่างผิดพลาด", status: "FAILED" });
  }

});



export default herbRouter;
