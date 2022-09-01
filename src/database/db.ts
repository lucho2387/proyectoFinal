import "dotenv/config"
import { connect } from "mongoose"
import { config } from "../config/config";

async function dbConnect(): Promise<void> {
    const DB_URI = <string>config.URL;
    await connect(DB_URI)
    console.log("BD Conectada");
    
}

export default dbConnect
