const mongoose = require('mongoose')

const Schema = mongoose.Schema

const instrumentSchema = new Schema({
    id: {
        type: Number,
        required: true
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
        required: true
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
        type: String,
        required: true
    },
    avalibilitySecond: {
        type: Boolean,
        default: true
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
}, { versionKey: false })

const Instrument = mongoose.model('Instrument', instrumentSchema)

module.exports = Instrument






















