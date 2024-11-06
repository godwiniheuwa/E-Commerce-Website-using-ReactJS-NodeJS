const mongoose = require('mongoose');
const config = require('./config.js');

mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,  // 30 seconds
}).then(() => {
    console.log("Connected to MongoDB successfully");
    process.exit(0);
}).catch(error => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
});
