import mongoose, { Schema } from "mongoose";
const sumaShema= mongoose.Schema({
transporte:{
   type:Schema.Types.Mixed,
   require:true
},
alimento:{
   type:Schema.Types.Mixed,
   require:true
},
consumoElectrico:{
   type:Schema.Types.Mixed,
   require:true
},
consumoGas:{
   type:Schema.Types.Mixed,
   require:true
},
totalEmisiones:{
   type:Number, 
   require:true
}
},{
   timestamps: true,
})
const TotalSuma = mongoose.model('totalSuma', sumaShema)
export default TotalSuma