const mongoose = require("mongoose");
const config = {
    host: "localhost"
};

mongoose.connect(`mongodb://${config.host}/repoty_dev`);
module.exports = mongoose;
