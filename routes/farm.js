import express from "express";
import Farmer from "../models/Farmer.model.js";

const farmRouter = express.Router();

// get all farmer
farmRouter.get("/", async (req, res) => {
  try {
    const farms = await Farmer.find({});
    res.status(201).json({ message: "GET SUCCESS", status: "SUCCESS", data: farms });
  } catch (err) {
    res.status(500).json({ message: "บางอย่างผิดพลาด", status: "FAILED" });
  }
});

// get the farm
farmRouter.get("/:id", async (req, res) => {
  try {
    const farms = await Farmer.findById(req.params.id);
    // console.log("Farmer : ", Farmer);
    res.status(201).json({ message: "SUCCESS", status: "SUCCESS", data: farms });
  } catch (error) {
    res.status(500).json({ message: "บางอย่างผิดพลาด", status: "FAILED" });
  }
});

// add a herb to the farm
farmRouter.put("/:id/herb", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("body : ", req.body)
    const farmlated = await Farmer.findById(id);
    farmlated.herbs.push(req.body);
    await farmlated.save()
    res.json({ message: "Farm has been updated successfully", status: "SUCCESS" })
  } catch (error) {
    console.log({ error })
  }

});

farmRouter.put("/:id/edit/approved", async (req, res) => {
  try {
    const { id, approved } = req.body
    // console.log(req.body)

    const updateFarm = await Farmer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    console.log({ updateFarm })
    res.status(201).json({ message: "update was successfully", status: "SUCCESS", data: updateFarm });

  } catch (error) {
    console.log({ error })
  }
});

// add a herb to the farm
farmRouter.put("/:id/del/herb", async (req, res) => {
  try {
    const { id } = req.params
    const { herbId } = req.body
    // console.log("body : ", id)
    // console.log("body : ", req.body)
    const farmlated = await Farmer.findById(id);
    farmlated.herbs = farmlated.herbs.filter(item => {
      return item._id.toString() !== herbId
    })
    await farmlated.save()
    res.json({ message: "Farm has been updated successfully", status: "SUCCESS", data: farmlated })
  } catch (error) {
    console.log({ error })
  }
});

// create a farm
farmRouter.post("/", async (req, res) => {
  try {
    // console.log("body : ", req.body)
    const newFarmer = new Farmer(req.body);
    const saveFarm = await newFarmer.save();
    res.status(201).json({ message: "create was successfully", status: "SUCCESS", data: saveFarm });
  } catch (error) {
    console.log("error : ", error)
    res.status(500).json({ message: "บางอย่างผิดพลาด", status: "FAILED" });
  }
});

farmRouter.put("/edit/:id", async (req, res) => {
  try {
    // console.log('body : ', req.body)
    // console.log('params : ', req.params.id)
    const updateFarm = await Farmer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    await updateFarm.save()
    // console.log({ updateFarm })
    res.status(201).json({ message: "update was successfully", status: "SUCCESS", data: updateFarm });

  } catch (error) {
    res.status(500).json({ message: "บางอย่างผิดพลาด", status: "FAILED" });
  }
});

farmRouter.delete("/:id", async (req, res) => {
  try {
    await Farmer.findByIdAndDelete(req.params.id)
    res.status(200).json({ status: "SUCCESS", message: "The Farm has been deleted" })
  } catch (error) {
    res.status(500).json({ message: "บางอย่างผิดพลาด", status: "FAILED" });
  }

});

export default farmRouter;
