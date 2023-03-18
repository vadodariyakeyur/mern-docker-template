import { connect } from "mongoose";

const MONGO_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mongo:27017`;

export const connectDB = async () => {
  console.log("Initializing connection to Mongo Database");
  await connect(MONGO_URI);
  console.log("Mongo Database connected successfully");
};
