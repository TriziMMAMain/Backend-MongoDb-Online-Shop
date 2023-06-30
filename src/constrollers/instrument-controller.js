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
const getInstrumentTypeDiesel = (req, res) => {
    Instrument
        .find({ type: 'Дизельный инструмент' })
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
    const loginRustam = 'Rus1@TaMMMa12'
    const loginStas = 'StA@SMmMa12421'
    const passwordRustam = 'RusQtam01q1'
    const passwordStas = 'stAsELantra23'

    return res
        .status(200)
        .json({ loginRustam, loginStas, passwordRustam, passwordStas })
}

// users
const getUsers = (req, res) => {
    User
        .find()
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
const updateUsersByNewId = (req, res) => {
    const data = req.body
    User
        .findOneAndUpdate(
        { newId: data.newId },
        { $push: { instrumentArraySecond: data.instrumentArraySecond } },
        { new: true }
    )
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => handlerError(res, err))
}
const updateUsersById = (req, res) => {
    const { instrumentArraySecond: { orderId, processing, _id } } = req.body;
    User
        .findOneAndUpdate(
            {newId: req.params.newId, "instrumentArraySecond._id": _id},
            {$set: {"instrumentArraySecond.$.processing": processing}},
            {new: true}
        )
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {handlerError(res, err)})
}
const updateUsersByIdAndOrder = (req, res) => {
    const {orderId, _id} = req.body;
    User
        .findOneAndUpdate(
            { "instrumentArraySecond._id": _id },
            { $pull: { instrumentArraySecond: { orderId } } },
            { new: true }
        )
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {handlerError(res, err)})
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
    getInstrumentTypeDiesel,

    // Get admin-panel
    getAdminAndPassword,

    // users
    getUsers,

    // Post
    postInstrument,

    // users
    postUser,
    updateUsersByNewId,

    // Update
    updateInstrumentById,
    updateUsersById,
    updateUsersByIdAndOrder
}