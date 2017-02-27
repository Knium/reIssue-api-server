const mongoose = require("../config");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    completed: {
        type: Array,
        required: true
    },
    failedClass: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);
