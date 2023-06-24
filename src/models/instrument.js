const mongoose = require('mongoose')

const Schema = mongoose.Schema

const instrumentSchema = new Schema({
    id: {
        type: Number,
    },

    numberInList: {
        type: Number,
    },
    type: {
        type: String,
    },
    typeThis: {
        type: String,
    },
    brand: {
        type: String,
    },
    name: {
        type: String,
    },
    city: {
        type: String,
    },
    featureTop: {
        type: String,
    },
    featureTopTitle: {
        type: [{
            featureTopTitleInfoTitle: String,
            featureTopTitleInfoText: String
        }],
    },
    featureMiddle: {
        type: [{
            feature: String,
            featureValue: String
        }],
    },
    featureDownArray: {
        type: [{
            featureDown: String
        }],
    },
    availability: {
        type: Number,
    },
    avalibilitySecond: {
        type: Boolean,
        default: true
    },
    imgTitle: {
        type: String,
    },
    imgArray: {
        type: [{
            src: String
        }],
    },
    price: {
        type: Number,
    },
    orderSum: {
        type: Number,
    },
    priceOrder: {
        type: Number,
    },
    equipmentArray: {
        type: [String]
    },
    countryOfOrigin: {
        type: String
    },
    homeOfTheBrand: {
        type: String
    }
}, { versionKey: false })

const Instrument = mongoose.model('Instrument', instrumentSchema)

module.exports = Instrument






















