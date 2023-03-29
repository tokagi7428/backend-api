import mongoose from "mongoose";

const herbSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nameScience: {
      type: String,
      required: true,
    },
    otherName: {
      type: String,
    },
    image: {
      type: String,
      required: true
    },
    // รูปภาพ ใบ
    imageBlade: {
      type: String,
    },
    // รูปภาพ ดอก
    imageBloom: {
      type: String,
    },
    // รูปภาพ ผล
    imageFruit: {
      type: String,
    },
    // รูปภาพ ราก
    imageRoot: {
      type: String,
    },
    desc: {
      type: String,
      required: true,
    },
    // คำอธิบาย ใบ
    descBlade: {
      type: String,
    },
    // คำอธิบาย ดอก
    descBloom: {
      type: String,
    },
    // คำอธิบาย ผล
    descFruit: {
      type: String,
    },
    descRoot: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    shortProperties: {
      type: String,
      required: true
    },
    properties: {
      type: String,
      required: true
    },
    propertiesBlade: {
      type: String,
    },
    propertiesBloom: {
      type: String,
    },
    propertiesFruit: {
      type: String,
    },
    propertiesRoot: {
      type: String,
    },
    howToUse: {
      type: String,
    },
    reference: {
      type: String,
    },
    approved: {
      type: Boolean,
      default: false
    },
    create_by: {
      type: String,
      default: "admin"
    }
  },
  {
    timestamps: true,
  }
);

const Herb = mongoose.model("Herb", herbSchema);
export default Herb;
