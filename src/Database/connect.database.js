import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/22jan");
    console.log("database connected ");
  } catch (error) {
    console.log("error is occurred at connecting database ", error.message);
  }
};

export default connectDatabase;
