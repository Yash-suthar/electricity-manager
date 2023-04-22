const express = require('express')
require("dotenv").config();
const app = express();
require("./db/conn")
const router = require('./routes/index')
const cors = require("cors")
app.use(cors("*"))
app.use(express.json())
app.use("/",router)
app.listen(process.env.PORT)
