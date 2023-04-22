import express from "express";
import Statistics from '../models/Statistics.model.js'


const statisticRouter = express.Router()

statisticRouter.get('/', async (req, res) => {
    try {
        const data = await Statistics.find({})
        res.status(201).json({ message: "GET SUCCESS", status: "SUCCESS", data: data });
    } catch (err) {
        console.log({ err })
    }
})
statisticRouter.get('/countApi/:id', async (req, res) => {
    try {
        const statistic = await Statistics.findById(req.params.id)
        res.status(201).json({ message: "SUCCESS", status: "SUCCESS", data: statistic });
    } catch (err) {
        console.log(err)
    }
})
statisticRouter.post('/countApi', async (req, res) => {
    try {
        const body = req.body
        // console.log({ body })
        const { did, ip } = body
        const findBody = await Statistics.findOne({ did: did })

        if (findBody) {
            console.log({ findBody })
            // console.log("count : ", )
            const countView = findBody.count + 1
            const updateStatistic = await Statistics.findOneAndUpdate({ did: did }, { count: countView, ip: ip }, { new: true })
            res.status(201).json({ message: "update was successfully", status: "SUCCESS", data: updateStatistic });
            return
        } else {
            const newStatistic = new Statistics(body)
            const saveNewStatistic = await newStatistic.save();
            res.status(201).json({ message: "create was successfully", status: "SUCCESS", data: saveNewStatistic });
        }
    } catch (err) {
        console.log(err)
    }
})

export default statisticRouter;