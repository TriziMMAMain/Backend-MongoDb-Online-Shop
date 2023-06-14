const Instrument = require('../models/instrument.js')
const User = require('../models/user.js')
const fs = require("fs");

const handlerError = (res, error) => {
    res.status(500).json({error})
}

// Get
const getHomePage = (req, res) => {
    try {
        res.status(200).send('Express server up and running!');
    } catch (err) {
        handlerError(res, err)
    }
}
// instrument
const getInstrument = (req, res) =>  {
    Instrument
        .find()
        .sort({name: 1})
        .then((instruments) => {
            res
                .status(200)
                .json(instruments)
        })
        .catch((err) => handlerError(res, err))
}
const getInstrumentId = (req, res) => {
    Instrument
        .findById(req.params.id)
        .then((instrument) => {
            res
                .status(200)
                .json(instrument)
        })
        .catch((err) => handlerError(res, err))
}
const getInstrumentTypeCordless = (req, res) => {
    Instrument
        .find({ type: 'Аккумуляторный инструмент' })
        .sort({name: 1})
        .then((instruments) => {
            res
                .status(200)
                .json(instruments)
        })
        .catch((err) => handlerError(res, err))
}
const getInstrumentTypeGasoline = (req, res) => {
    Instrument
        .find({ type: 'Бензоинструмент' })
        .sort({name: 1})
        .then((instruments) => {
            res
                .status(200)
                .json(instruments)
        })
        .catch((err) => handlerError(res, err))
}
const getInstrumentTypeNetwork = (req, res) => {
    Instrument
        .find({ type: 'Сетевой инструмент' })
        .sort({name: 1})
        .then((instruments) => {
            res
                .status(200)
                .json(instruments)
        })
        .catch((err) => handlerError(res, err))
}
const getInstrumentTypePneumotool = (req, res) => {
    Instrument
        .find({ type: 'Пневмоинструмент' })
        .sort({name: 1})
        .then((instruments) => {
            res
                .status(200)
                .json(instruments)
        })
        .catch((err) => handlerError(res, err))
}

// Get admin-panel
const getAdminAndPassword = (req, res) => {
    const loginRustam = 'rustam'
    const loginStas = 'stas'
    const passwordRustam = '123456'
    const passwordStas = '123456'

    return res
        .status(200)
        .json({ loginRustam, loginStas, passwordRustam, passwordStas })
        .catch((err) => handlerError(res, err))
}

// users
const getUsers = (req, res) => {
    User
        .find()
        .sort({name: 1})
        .then((users) => {
            res
                .status(200)
                .json(users)
        })
        .catch((err) => handlerError(res, err))
}

// Post

// instrument
const postInstrument = (req, res) => {
    const data = req.body
    const instrumentNew = new Instrument(data)
    instrumentNew
        .save()
        .then((result) => {
            res
                .status(201)
                .json(result)
        })
        .catch((err) => handlerError(res, err))
}


// users
const postUser = (req, res) => {
    const data = req.body
    console.log(data);
    const userNew = new User(data)
    userNew
        .save()
        .then((result) => {
            res
                .status(201)
                .json(result)
        })
        .catch((err) => handlerError(res, err))
}

// Update
const updateInstrumentById = (req, res) => {
    const data = req.body
    Instrument
        .findByIdAndUpdate(req.params.id, data)
        .then((result) => {
            res
                .status(200)
                .json(result)
        })
        .catch((err) => handlerError(res, err))
}
const updateUsersById = (req, res) => {
    const data = req.body
    console.log(data);
    User
        .findByIdAndUpdate(req.params.id, data)
        .then((result) => {
            res
                .status(200)
                .json(result)
        })
        .catch((err) => handlerError(res, err))
}


// Exports
module.exports = {
    // Get
    getHomePage,
    getInstrument,
    getInstrumentId,
    getInstrumentTypeCordless,
    getInstrumentTypeGasoline,
    getInstrumentTypeNetwork,
    getInstrumentTypePneumotool,

    // Get admin-panel
    getAdminAndPassword,

    // users
    getUsers,


    // Post
    postInstrument,

    // users
    postUser,

    // Update
    updateInstrumentById,
    updateUsersById

}