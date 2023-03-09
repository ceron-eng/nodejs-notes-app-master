import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://Sysadmin:ñoncla12@cluster0.zmqva5x.mongodb.net/test";
