const axios = require('axios');

const testLogin = async () => {
    try {
        console.log("Attempting login with admin@gmail.com...");
        const response = await axios.post('http://localhost:5000/api/auth/login', {
            email: 'admin@gmail.com',
            password: 'admin123'
        });

        if (response.data.success) {
            console.log("Login SUCCESS!");
            console.log("User Role:", response.data.user.role);
            if (response.data.user.role === 'admin') {
                console.log("VERIFIED: Role is strictly 'admin'.");
            } else {
                console.log("WARNING: Role is NOT admin.");
            }
        } else {
            console.log("Login FAILED:", response.data.message);
        }
    } catch (error) {
        console.log("Login Error:", error.response ? error.response.data : error.message);
    }
};

testLogin();
