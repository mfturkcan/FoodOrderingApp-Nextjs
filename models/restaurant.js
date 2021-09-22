import mongoose from 'mongoose';
/*
    Connect
    It will connect to the mongodb db if not exist will create it.
*/
mongoose.connect("mongodb://localhost:27017/restaurantsDB", { useNewUrlParser: true, useUnifiedTopology: true });

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


export default  mongoose.models["Restaurant"] || mongoose.model("Restaurant", restaurantSchema);