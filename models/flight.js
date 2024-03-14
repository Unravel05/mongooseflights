const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inspectionSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: String
    }
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: String,
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    departure: Date,
    arrival: Date,
    destination: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    flightId: {type: Number, max: [9999, 'Must be 4 digit long!']},
    landed: {type: Boolean, default: false }, 
    clean: {type: Boolean, default: false },
    inspections: [inspectionSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema)