import { connect } from "mongoose";
import { configEnv } from "./config.js";

export const startConnection = async () => {
  try {
    const db = await connect(configEnv.MONGO_URI, {
      dbName: "product",
    });
    console.log("Database is connected to:", db.connection.name);
  } catch (error) {
    console.log(error);
  }
};
