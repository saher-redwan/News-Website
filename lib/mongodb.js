import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
    // for test
    console.log(mongoose.connection.name);
  } catch (error) {
    console.log("Error in Connected to MongoDB: " + error);
  }
};

export default connectMongoDB;
