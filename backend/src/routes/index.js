import routeTotal from './totalSuma.js'
import express from 'express'
const route= express()

route.use('/totalSuma', routeTotal)

export default route