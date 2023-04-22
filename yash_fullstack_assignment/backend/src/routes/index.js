const express = require('express')
const router = express.Router();
const {electricDevicesController,getBillController,createBillController} = require('../controller/electricity.manager.controller')

router.get("/room/devices",electricDevicesController)
router.route("/user/bills").get(getBillController).post(createBillController)



module.exports = router