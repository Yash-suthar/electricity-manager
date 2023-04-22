const billModel = require("../schema/electricy.bill.schema")


const getAllBills = async()=>{
    return await billModel.find({})
}

const createBill = async(bill)=>{
    console.log(bill)
    return await billModel.create(bill)
}


module.exports = {getAllBills,createBill}