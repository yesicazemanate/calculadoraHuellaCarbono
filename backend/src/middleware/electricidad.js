export const CalcularElectrecidad=(data)=>{
   const emision= 0.233*data.consumoElec
const electricidad= data.consumoElec* emision

const total= electricidad.toFixed(2)
return total
}