
const mongoose = require("mongoose")

const URI = process.env.Mongodb_URI

const ConnectDB = async (req, res) => {
    try {
        await mongoose.connect(URI);
        console.log("Mongodb Connected Successfully");
    } catch (error) {
        console.log("Mongodb failed", error);

        
    }
}
module.exports = ConnectDB;