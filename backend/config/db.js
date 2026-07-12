const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("=== connectDB() called ===");
  console.log("URI:", process.env.MONGO_URI);

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌ MongoDB Connection Failed");
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;