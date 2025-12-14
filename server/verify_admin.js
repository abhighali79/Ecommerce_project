const mongoose = require("mongoose");
const User = require("./models/User");

console.log("Script starting...");

mongoose
    .connect("mongodb://127.0.0.1:27017/ecommerce")
    .then(() => {
        console.log("MongoDB connected");
        checkAdmin();
    })
    .catch((error) => console.log("DB Connection Error:", error));

const checkAdmin = async () => {
    try {
        console.log("Querying for admin...");
        const admin = await User.findOne({ email: "admin@gmail.com" });
        if (admin) {
            console.log("Admin found:", admin.email, admin.role, admin._id);
        } else {
            console.log("Admin NOT found in database.");
        }
    } catch (error) {
        console.log("Error checking admin", error);
    } finally {
        console.log("Closing connection.");
        mongoose.disconnect();
    }
};
