import mongoose from 'mongoose';
/*
    Connect
    It will connect to the mongodb db if not exist will create it.
*/

const env = process.env.NODE_ENV;
let db_string = "http://localhost:27017/restaurantsDB";
if (env === "production") {
    db_string = process.env.DB_STRING;
}
mongoose.connect(db_string, { useNewUrlParser: true, useUnifiedTopology: true });

// Specify the schema for restaurants

const restaurantSchema = mongoose.Schema({
    restaurantName: {
        type: String,
        required: [true, "Restaurant name must be given!"],
    },
    foods: {
        type: Array,
        required: [true, "Foods must be given!"],
    },
    about: {
        type: String,
        required: [true, "About is required!"],
    },
    resImg: {
        type: String,
        required: [true, "Restaurant image is required!"],
    },
});


export default mongoose.models["Restaurant"] || mongoose.model("Restaurant", restaurantSchema);