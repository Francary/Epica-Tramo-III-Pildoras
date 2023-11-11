import { config } from "dotenv";
config()

const configEnv = {
  PORT: process.env.PORT || 5000 ,
  MONGO_URI:  "mongodb://127.0.0.1:27017/" || process.env.MONGO_URI ,
};


export {configEnv}