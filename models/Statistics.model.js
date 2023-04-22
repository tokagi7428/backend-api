import mongoose from "mongoose";

const statisticsScheme = new mongoose.Schema(
    {
        ip: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            default: 1
        },
        did: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)
const Statistics = mongoose.model("Statistics", statisticsScheme);
export default Statistics