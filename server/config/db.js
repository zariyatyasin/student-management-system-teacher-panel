import mongoose from "mongoose";

const connectDB = async () => {
  try {
    
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connceted to mongodb");
  } catch (error) {
    console.log(error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB connected");
});

export default connectDB;
