const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newFlight,
    create,
    index,
    show
}


async function index(req, res) {
    const flights = await Flight.find({})
    res.render('flights/index', { title: 'All Flights', flights})
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id)
    const tickets = await Ticket.find({flight: req.params.id }).sort('price')
    console.log(tickets)
    res.render('flights/show', { title: 'Ticket Detail', flight, tickets });
}

function newFlight(req, res) {
    res.render('flights/new', {
        title: 'Add Flight',
        errorMsg: ''
    })
}

async function create(req, res) {
    req.body.landed= !!req.body.landed
    req.body.clean= !!req.body.clean
    console.log(req.body)
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
    try {
        if (req.body.from === req.body.destination) {
            return 'Can not be the same Airport!'
        }
        await Flight.create(req.body)
        res.redirect(`/flights/${flight._id}`)
    } catch (err) {
        console.log(err)
        res.render('flights/new', {
            errorMsg: err
        })
    }
}