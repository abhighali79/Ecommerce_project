const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

mongoose
    .connect("mongodb://127.0.0.1:27017/ecommerce")
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log(error));

const createAdmin = async () => {
    try {
        const existingAdmin = await User.findOne({ email: "admin@gmail.com" });
        if (existingAdmin) {
            console.log("Admin already exists");
            return;
        }

        const hashPassword = await bcrypt.hash("admin123", 12);
        const newAdmin = new User({
            userName: "admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin",
        });

        await newAdmin.save();
        console.log("Admin created successfully");
    } catch (error) {
        console.log("Error creating admin", error);
    } finally {
        mongoose.disconnect();
    }
};

createAdmin();
