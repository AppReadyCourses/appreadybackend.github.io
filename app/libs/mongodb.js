import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://99only:YFseqFLdUA37xGuT@cluster0.wmsnme0.mongodb.net/Cluster0`
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log('mongo error:',error);
  }
};

export default connectMongoDB;
