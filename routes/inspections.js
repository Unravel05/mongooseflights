const express = require('express')
const router = express.Router()
const inspectionsCtrl = require('../controllers/inspections')

router.post('/flights/:id/inspections', inspectionsCtrl.create)

module.exports = router