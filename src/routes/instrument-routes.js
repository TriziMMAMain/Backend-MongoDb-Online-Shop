const express = require('express')
const router = express.Router()
const {
    // Get
    getHomePage,
    getInstrument,
    getInstrumentId,
    getInstrumentTypeCordless,
    getInstrumentTypeGasoline,
    getInstrumentTypeNetwork,
    getInstrumentTypePneumotool,

    // users
    getUsers,


    // Post
    postInstrument,

    // users
    postUser,

    // Update
    updateInstrumentById,
    updateUsersById

} = require('../constrollers/instrument-controller.js')
const fs = require("fs");
const path = require("path");



// Get
router.get('/', getHomePage)
router.get('/api/instruments/get/all', getInstrument)
router.get('/api/instruments/get/cordless', getInstrumentTypeCordless)
router.get('/api/instruments/get/gasoline', getInstrumentTypeGasoline)
router.get('/api/instruments/get/network', getInstrumentTypeNetwork)
router.get('/api/instruments/get/pneumo', getInstrumentTypePneumotool)
router.get('/api/instrument/:id', getInstrumentId)

// users Get
router.get('/api/users/get/all', getUsers)

// Post
router.post('/instrument/add', postInstrument)
router.post('/api/user/add', postUser);

// Patch
router.patch('/instrument/update/:id', updateInstrumentById)
router.patch('/users/update/:id', updateUsersById)

module.exports = router