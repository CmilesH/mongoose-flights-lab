import { Flight } from "../models/flight.js"


function index(req, res) {
  Flight.find({}, function (error, flights) {
    console.log(error)
    res.render("flights/index", {
      error,
      flights,
      title: 'All Flights',
    })
  })
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function create(req, res) {
  if(req.body.departs === '') delete req.body.departs
  
  const flight = new Flight(req.body)
  console.log(flight, flight.departs)
  

  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
    res.redirect(`/flights`)
  })
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('flights/show', { 
      title: 'Flight Details', 
      flight,
    })
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  index,
  newFlight as new,
  create,
  show,
  createTicket
}