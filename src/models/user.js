const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    newId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    deliveryType: {
        type: [String],
        required: true
    },
    address: {
        type: String,
        required: false
    },
    instrumentArray: {
        type: [{
            id: {
                type: Number
            },
            numberInList: {
                type: Number
            },
            type: {
                type: String
            },
            typeThis: {
                type: String
            },
            brand: {
                type: String
            },
            name: {
                type: String
            },
            city: {
                type: String
            },
            featureTop: {
                type: String
            },
            featureTopTitle: {
                type: [{
                    featureTopTitleInfoTitle: String,
                    featureTopTitleInfoText: String
                }]
            },
            featureMiddle: {
                type: [{
                    feature: String,
                    featureValue: String
                }]
            },
            featureDownArray: {
                type: [{
                    featureDown: String
                }]
            },
            availability: {
                type: Number
            },
            avalibilitySecond: {
                type: Boolean,
                default: false
            },
            imgTitle: {
                type: String
            },
            imgArray: {
                type: [{
                    src: String
                }]
            },
            price: {
                type: Number
            },
            orderSum: {
                type: Number
            },
            priceOrder: {
                type: Number
            }
        }],
        required: true,
    },
    dayAndTime: {
        type: String,
        required: false
    },
    processing: {
        type: String,
        required: false
    },
    dateClick: {
        type: String,
        required: false
    },
    timeClick: {
        type: String,
        required: false
    }
}, { versionKey: false })

const User = mongoose.model('User', userSchema)

module.exports = User