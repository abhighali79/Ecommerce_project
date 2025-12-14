const mongoose = require("mongoose");
const User = require("./models/User");

mongoose
    .connect("mongodb://127.0.0.1:27017/ecommerce")
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log(error));

const fixAdmin = async () => {
    try {
        const admin = await User.findOne({ email: "admin@gmail.com" });
        if (admin) {
            console.log(`User found. Current Role: ${admin.role}`);
            if (admin.role !== 'admin') {
                admin.role = 'admin';
                await admin.save();
                console.log("UPDATED user role to 'admin'.");
            } else {
                console.log("User is already admin.");
            }
        } else {
            console.log("User admin@gmail.com NOT FOUND. Creating it...");
            // Create if not exists logic (just in case)
            const bcrypt = require("bcryptjs");
            const hashPassword = await bcrypt.hash("admin123", 12);
            const newAdmin = new User({
                userName: "admin",
                email: "admin@gmail.com",
                password: hashPassword,
                role: "admin",
            });
            await newAdmin.save();
            console.log("Admin user created.");
        }
    } catch (error) {
        console.log("Error fixing admin", error);
    } finally {
        mongoose.disconnect();
    }
};

fixAdmin();
