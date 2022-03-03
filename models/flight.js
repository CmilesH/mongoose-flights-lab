import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
    
  },
price: {
  type: Number,
}
})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAC', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    required: true,

  },
  departs: {
    type: Date,
    default: Date.now() + 365*24*60*60000
    
  },
  tickets: {
    type: [ticketSchema]
  },
  menu: [{ type: Schema.Types.ObjectId, ref: "Meal"}]

})

const Flight = mongoose.model('Flight', flightSchema)

export{
  Flight
}