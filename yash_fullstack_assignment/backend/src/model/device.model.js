const deviceModel = require("../schema/electriciy.devices.schema")

const getAllDevices = async()=>{
    return await deviceModel.find({})
}


module.exports = getAllDevices