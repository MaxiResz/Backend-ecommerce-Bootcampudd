const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is connected...");
  } catch (error) {
    console.log("MongoDB connection failed: ", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
