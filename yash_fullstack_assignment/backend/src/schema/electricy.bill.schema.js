const mongoose = require("mongoose")

const billSchema = mongoose.Schema({
   date:{type:String},
   totalConsumption:{type:Number},
   totalAmount:{type:Number}
},
{
    collection:"bills"
})

const billModel = mongoose.model("billSchema",billSchema)

module.exports = billModel