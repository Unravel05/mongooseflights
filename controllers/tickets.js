const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
const ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create,
  addToTicket
};

async function addToTicket(req, res) {
  const flight = await Flight.findById(req.params.id)
  flight.ticket.push(req.body.ticketId)
  await flight.save()
  res.redirect(`/flights/${flight._id}`)
}

async function newTicket(req, res) {
    console.log('create a new ticket')
  //Sort Ticketss by their name
//   const tickets = await Ticket.find({}).sort('price');
  const flightId = req.params.id
  console.log(flightId)
  res.render('tickets/new', { title: 'Add Ticket', flightId });
}

async function create(req, res) {
    console.log(req.body)
    console.log(req.params.id)
  try {
    const newTicket = await Ticket.create(req.body);
    newTicket.flight = req.params.id
    newTicket.save()
  } catch (err) {
    // console.log(err);
  }
  res.redirect(`/flights/${req.params.id}`);
}