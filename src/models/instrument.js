const mongoose = require('mongoose')

const Schema = mongoose.Schema

const instrumentSchema = new Schema({
    id: {
        type: Number,
        required: false
    },

    numberInList: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    typeThis: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: false
    },
    featureTop: {
        type: String,
        required: true
    },
    featureTopTitle: {
        type: [{
            featureTopTitleInfoTitle: String,
            featureTopTitleInfoText: String
        }],
        required: true
    },
    featureMiddle: {
        type: [{
            feature: String,
            featureValue: String
        }],
        required: true
    },
    featureDownArray: {
        type: [{
            featureDown: String
        }],
        required: true
    },
    availability: {
        type: Number,
        required: true
    },
    imgTitle: {
        type: String,
        required: true
    },
    imgArray: {
        type: [{
            src: String
        }],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    orderSum: {
        type: Number,
        required: true
    },
    priceOrder: {
        type: Number,
        required: true
    }
})

const Instrument = mongoose.model('Instrument', instrumentSchema)

module.exports = Instrument






















