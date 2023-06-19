const mongoose = require('mongoose')

const Schema = mongoose.Schema

const instrumentSchema = new Schema({
    id: {
        type: Number,
        required: false
    },

    numberInList: {
        type: Number,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    typeThis: {
        type: String,
        required: false
    },
    brand: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    featureTop: {
        type: String,
        required: false
    },
    featureTopTitle: {
        type: [{
            featureTopTitleInfoTitle: String,
            featureTopTitleInfoText: String
        }],
        required: false
    },
    featureMiddle: {
        type: [{
            feature: String,
            featureValue: String
        }],
        required: false
    },
    featureDownArray: {
        type: [{
            featureDown: String
        }],
        required: false
    },
    availability: {
        type: String,
        required: false
    },
    avalibilitySecond: {
        type: Boolean,
        default: true
    },
    imgTitle: {
        type: String,
        required: false
    },
    imgArray: {
        type: [{
            src: String
        }],
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    orderSum: {
        type: Number,
        required: false
    },
    priceOrder: {
        type: Number,
        required: false
    }
}, { versionKey: false })

const Instrument = mongoose.model('Instrument', instrumentSchema)

module.exports = Instrument






















