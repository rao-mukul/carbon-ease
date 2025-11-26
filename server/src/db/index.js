import mongoose from "mongoose";
import logger from "../utils/logger.js";

const connect = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/carbonEase";
    await mongoose.connect(mongoUri);
    logger.info("MongoDb connected successfully");
  } catch (error) {
    logger.error("MongoDb connection error:", error);
    process.exit(1);
  }
};

export default connect;
