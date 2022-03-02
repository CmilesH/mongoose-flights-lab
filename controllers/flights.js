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

  const flight = new Flight(req.body)
  // const dt = flight.departs;
  // if ( dt != null){
  // const departsDate = dt.toISOString().slice(0, 16);
  // res.render('flights/new', {departsDate});
// }
  console.log(flight)
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
    res.redirect(`/flights`)
  })
}

export {
  index,
  newFlight as new,
  create
}