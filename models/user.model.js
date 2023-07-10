/**
 *This will hold the schema for teh user
 
 *It explains the different field of user and 
 how it will be stored in the MongoDB 
 */

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: True
    },
    userId: {
        type: String,
        required: True,
        unique: true
    },
    password: {
        type: String,
        required: True
    },
    email: {
        type: String,
        required: True,
        unique: true,
        minLength: 10,
        lowercase: true
    },
    userType: {
        type: String,
        required: True,
        default: "CUSTOMER",
        enum: ["CUSTOMER", "ADMIN"]
    }

}, { timestamps: true }
);
/**
 * Define the collection name where it is stored
 */

module.exports = mongoose.model("User", userSchema);