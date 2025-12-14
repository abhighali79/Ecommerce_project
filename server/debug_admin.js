const mongoose = require("mongoose");
const User = require("./models/User");
const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "debug_log.txt");

function log(message) {
    const timestamp = new Date().toISOString();
    const line = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(logFile, line);
}

log("Script started");

mongoose
    .connect("mongodb://127.0.0.1:27017/ecommerce")
    .then(() => {
        log("MongoDB connected");
        runDebug();
    })
    .catch((error) => {
        log(`DB Connection Error: ${JSON.stringify(error)}`);
        process.exit(1);
    });

const runDebug = async () => {
    try {
        log("Querying for user with email: admin@gmail.com");
        const admin = await User.findOne({ email: "admin@gmail.com" });

        if (admin) {
            log(`Admin FOUND. ID: ${admin._id}, Role: ${admin.role}, Email: ${admin.email}`);
        } else {
            log("Admin user NOT FOUND in database.");
            // Attempt to create
            const bcrypt = require("bcryptjs");
            const hashPassword = await bcrypt.hash("admin123", 12);
            const newAdmin = new User({
                userName: "admin",
                email: "admin@gmail.com",
                password: hashPassword,
                role: "admin",
            });
            await newAdmin.save();
            log("Admin user created programmatically in debug script.");
        }

    } catch (error) {
        log(`Error during operation: ${error.message}`);
        log(error.stack);
    } finally {
        log("Disconnecting...");
        await mongoose.disconnect();
        log("Disconnected. Script finished.");
    }
};
