const {getDevicesService,getBillService,createBillService}  = require('../service/electricicty.devices.service')

const electricDevicesController = async(req,res)=>{
    try{
        const devices = await getDevicesService()
        res.status(200).json({status:true,message:"all devices received", result:{devices}})
    }catch(err){
       res.json(500).json({status:false,message:err.message})
    }
}
const getBillController = async(req,res)=>{
    try{
        const bills = await getBillService()
        res.status(200).json({status:true,message:"all bills received", result:{bills}})
    }catch(err){
       res.status(500).json({status:false,message:err.message})
    }
}

const createBillController = async(req,res)=>{
    try {
        console.log(req.body)
        await createBillService(req.body)
        res.status(200).json({status:true,message:"all bill stored successfully"})
        
    } catch(err){
        res.status(500).json({status:false,message:err.message})
     }
}



module.exports = {electricDevicesController,getBillController,createBillController}