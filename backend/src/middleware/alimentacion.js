export const CalculoAlimentacion=(data)=>{
   let ress=0
   let pollo =0
   let fruta=0
   let vegetal=0
   if(data.tipoAlimento=='res'){
      ress= 27*data.cantidad
   }else if(data.tipoAlimento=='pollo'){
      pollo= 6.9 * data.cantidad
   }else if(data.tipoAlimento=='vegetal'){
      vegetal = 2 * data.cantidad
   }else if (data.tipoAlimento== 'fruta'){
      fruta=1.1 *data.cantidad
   }
const alimento= ress+pollo+vegetal+fruta
const total= alimento.toFixed(2)
return total
}