const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    username: {
        type: "string",
        required: true
    },
    password: {
        type: "string",
        required: true
    },
    name: {
        type: "string",
        required: true
    },
    phone: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true
    }
    
})

module.exports = mongoose.model("User", userSchema);