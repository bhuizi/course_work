const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TheaterSchema = new Schema({
    theaterId: Number,
    location: {
        address: {
            street1: String,
            city: String,
            state: String,
            zipcode: String,
        },
        geo: {
            coordinates: Array
        }
    }
});

module.exports = mongoose.model('theater', TheaterSchema);