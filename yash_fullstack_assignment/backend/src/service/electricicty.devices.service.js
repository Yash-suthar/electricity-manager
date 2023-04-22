const getAllDevices = require("../model/device.model")
const {getAllBills,createBill} = require("../model/bill.model")

const getDevicesService = async()=>{
   return  await getAllDevices()
}

const getBillService = async()=>{
   return await getAllBills()
}
const createBillService = async(bill)=>{
   return await createBill(bill)
}

module.exports = {getDevicesService,getBillService,createBillService}