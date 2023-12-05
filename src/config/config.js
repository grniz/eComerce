import dotenv from "dotenv";

dotenv.config();

export default {
  app: {
    ENV: process.env.NODE_ENV || "production",
  },
  mongo: {
    URL: process.env.MONGO_URL,
  },
};