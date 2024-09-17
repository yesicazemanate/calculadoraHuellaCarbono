export const CalcularGas=(data)=>{
   const emision= 1.98*data.consumoGas
  const gas= data.consumoGas* emision
  const total= gas.toFixed(2)
  return total
}