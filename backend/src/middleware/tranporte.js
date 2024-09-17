export const CalculoTransporte=async(data)=>{
   if(data.vehiculo=='coche'){
      if(data.tipoConbustible=='gasolina'){
         const factorEmision = 2.31*data.consumo
         console.log(factorEmision);
         const combustible = data.consumo/100
         console.log(combustible);
         const transporte = (data.distancia*combustible*factorEmision)/100
         const totalFinal = transporte.toFixed(2)
          console.log(totalFinal);
           return totalFinal
         }
       
      else if(data.tipoConbustible=='diesel'){
         const factorEmision = 2.68*data.consumo
         const combustible = data.consumo/100
        const  transporte = (data.distancia*combustible*factorEmision)/100
          const totalFinal = transporte.toFixed(2)
          return totalFinal
      }}
   else if(data.vehiculo='vuelo'){
      const factorEmision = 0.115*data.distancia
      let clase =0

if(data.claseVuelo == 'economica'){
clase=1
 const transporte = (data.distancia*factorEmision*clase)/100
 const totalFinal = transporte.toFixed(2)
 return totalFinal
}else if(data.claseVuelo == 'ejecutiva'){
clase = 1.5
const  transporte = (data.distancia*factorEmision*clase)/100
const totalFinal = transporte.toFixed(2)
return totalFinal
}else if(data.claseVuelo=='primera'){
clase= 2
const transporte = (data.distancia*factorEmision*clase)/100
const totalFinal = transporte.toFixed(2)
return totalFinal
}  }
   else if(data.vehiculo== 'publico'){
      if(data.tipoVPublico=='autobus'){
const emision=0.104*data.distancia
const transporte= data.distancia* emision
const totalFinal = transporte.toFixed(2)
return totalFinal
      }else if(data.tipoVPublico== 'tren'){
         const emision=0.041*data.distancia
const transporte= data.distancia* emision
const totalFinal = transporte.toFixed(2)
return totalFinal
      }
      
   }
}