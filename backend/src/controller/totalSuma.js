//import TotalSuma from "../models/totalSoma.js";
import { CalculoTransporte } from "../middleware/tranporte.js"
import { CalculoAlimentacion } from "../middleware/alimentacion.js"
import { CalcularElectrecidad } from "../middleware/electricidad.js"
import { CalcularGas } from "../middleware/gas.js"
export const consumoTransportte= async(req, res)=>{
   const data= req.body
   try{
     const totalTransporte= await CalculoTransporte(data)
     const totalAlimentacion = await CalculoAlimentacion(data)
     const totalElectricidad= await CalcularElectrecidad(data)
   const totalGas=await CalcularGas(data)
     res.send({totalTransporte:totalTransporte, totalAlimentacion:totalAlimentacion, totalElectricidad:totalElectricidad, totalGas:totalGas});
   }catch(error){
      console.log(error);
   }
}

