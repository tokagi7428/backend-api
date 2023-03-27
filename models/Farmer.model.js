import mongoose from "mongoose";

const farmerScema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
    herbs: [
      // {
      //   name: {
      //     type: String,
      //     required: true,
      //     default: "ฟ้าทะลายโจร"
      //   },
      //   image: {
      //     type: String,
      //     required: true,
      //     default: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Andrographis_paniculata_%28Kalpa%29_in_Narshapur_forest%2C_AP_W2_IMG_0867.jpg/330px-Andrographis_paniculata_%28Kalpa%29_in_Narshapur_forest%2C_AP_W2_IMG_0867.jpg"
      //   },
      //   desc: {
      //     type: String,
      //     required: true,
      //     default: "ฟ้าทะลายโจรเป็นพืชล้มลุกมีความสูงประมาณ 30 - 70 เซนติเมตร หรือประมาณ 1-2 ศอก[4] ลำต้นเป็นเหลี่ยมสี่มุมป้าน ใบเป็นใบเดี่ยวรูปร่างเรียวยาวสีเขียวเข้มเป็นมัน ปลายแหลม กว้างประมาณ 1 เซนติเมตร ดอกช่อออกที่ปลายกิ่งและซอกใบ มีดอกย่อยขนาดเล็กสีขาว ด้านในสีม่วง โคนกลีบติดกัน กลีบดอกด้านบนมี 3 หยักด้านล่างมี 2 หยัก ผลเป็นฝักเมื่อผลแก่จะมีสีน้ำตาล ภายในมีเมล็ดสีน้ำตาลอ่อนจำนวนมาก"
      //   },
      //   price: {
      //     type: Number,
      //     required: true,
      //     default: 35
      //   },
      //   properties: {
      //     type: String,
      //     required: true,
      //     default: "ฟ้าทะลายโจร (ชื่อวิทยาศาสตร์: Andrographis paniculata ( Burm.f. ) Wall ex Nees.) เป็นพืชล้มลุกฤดูเดียว ในตระกูล Acanthaceae มีถิ่นกำเนิดในอินเดียและศรีลังกา โดยในตำรายาโบราณของไทย จัดให้เป็นสมุนไพรพื้นบ้านที่สามารถหามารับประทานแก้โรคได้เอง สูงประมาณ 30-70 ซม. ลำต้นเป็นสี่เหลี่ยม แตกกิ่งมาก ใบรียาว ปลายใบแหลม ดอกขนาดเล็กสีขาว มีรอยกระสีม่วงแดง ลักษณะเป็นหลอด ฝักคล้ายฝักต้อยติ่ง เมล็ดสีน้ำตาลอ่อน ใบมีสารประกอบแลกโตน ซึ่งมีฤทธิ์เป็นยาแก้ไข้ โรคทางเดินหายใจ แก้เจ็บคอ แต่บางคนอาจเกิดอาการแพ้ได้ ซึ่งต้องหยุดยาทันที"
      //   },
      // }
    ],
    approved: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

const Farmer = mongoose.model("Farmer", farmerScema);
export default Farmer;
