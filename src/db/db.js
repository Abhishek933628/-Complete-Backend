const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

async function connectDB() {
  
    await mongoose.connect(
      "mongodb+srv://yt:abhi@yt-complete-backend.4005ibm.mongodb.net/halley"
    );

    console.log("Connected to DB");
  
}

module.exports = connectDB;