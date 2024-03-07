const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB".cyan.underline);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`.red.bold);
    process.exit(1); // Exit process with failure
  }
};

mongoose.set("useCreateIndex", true);

module.exports = connectDb;
