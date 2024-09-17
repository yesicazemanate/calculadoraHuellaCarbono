import {  consumoTransportte} from "../controller/totalSuma.js";
import express from 'express'
const route= express.Router()
//route.post('/', createSuma)
route.post('/trasnporte', consumoTransportte)

export default route