const mongoose = require("mongoose");
const data = require("./data.js");  // No need to use .default
const Product = require("./models/productModel.js");
const config = require("./config.js");

mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,  // 30 seconds
}).then(() => {
    console.log("Connected to MongoDB successfully for seeding");
}).catch(error => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
});

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(data.products);  // This should now correctly access data.products
        console.log("Data Imported Successfully");
        process.exit();
    } catch (error) {
        console.error("Error importing data:", error);
        process.exit(1);
    }
};

importData();
