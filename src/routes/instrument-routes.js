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

    // Get admin-panel
    getAdminAndPassword,

    // users
    getUsers,
    postGetUser,

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

// Get login and password
router.get('/api/admin-panel-get', getAdminAndPassword)

// Get users
router.get('/api/users/get/all', getUsers)

// Post
router.post('/instrument/add', postInstrument)

// Post user
router.post('/api/user/add', postUser);
// Post and Get user
router.post('/api/user/getPost/:id', postGetUser)

// Patch
router.patch('/instrument/update/:id', updateInstrumentById)
// Ptach user
router.patch('/users/update/:id', updateUsersById)

module.exports = router