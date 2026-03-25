const mongoose = require("mongoose");

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected Successfully");
    }
    catch (err) {
        console.error("MongoDB Connection Error:", err.message);
        process.exit(1);
    }
}

module.exports = connectToDB