import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const uri = process.env.MONGO_URI;

// if (!uri) {
//   console.error("❌ MongoDB URI is missing in the .env file");
//   process.exit(1);
// }

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
//   // serverSelectionTimeoutMS: 20000, // Timeout when selecting a MongoDB server
//   // connectTimeoutMS: 20000, // Timeout for establishing the connection
// });

// let isConnected = false;

const connectDB = async () => {
  try {
    // if (isConnected) {
    //   console.log("🔄 Using existing MongoDB connection...");
    //   return;
    // }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("🔍 Connecting to MongoDB...");
    // await client.connect();
    console.log("✅ MongoDB Connected Successfully!");


  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
