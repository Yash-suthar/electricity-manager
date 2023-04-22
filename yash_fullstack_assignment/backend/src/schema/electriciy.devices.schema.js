const mongoose = require("mongoose")

const deviceShema = mongoose.Schema({
  
    Name:{Type:String},
    consumption:{Type:Number}
},
{
    collection:"electric-devices"
})

const deviceModel = mongoose.model("deviceSchema",deviceShema)

module.exports = deviceModel