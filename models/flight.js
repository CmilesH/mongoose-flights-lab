import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String,
    
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
    default: function(){
      if (this.departs = null) {
        console.log('funct check')
        Date.now
      } 
    }
  },
  tickets: {
    type: ticketSchema
  }

})
const Flight = mongoose.model('Flight', flightSchema)

export{
  Flight
}