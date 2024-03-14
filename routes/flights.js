var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')

//All paths start with /flights

//Post /flight
router.get('/', flightsCtrl.index)
//Get /flight/new
router.get('/new', flightsCtrl.new)
// Get /movies/:id
router.get('/:id', flightsCtrl.show)
//Get /flights
router.post('/', flightsCtrl.create)

module.exports = router;
