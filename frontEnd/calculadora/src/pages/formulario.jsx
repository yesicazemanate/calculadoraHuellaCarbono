import React, { useState } from 'react'
import {
   Card,
   Input,
   Button,
   Typography,
   
 } from "@material-tailwind/react";
export const Formulario = () => {
   const [combustible, setCombustible]= useState(false)
   const [vehiculo, setVehiculo]= useState()
   const [distancia, setDistancia]= useState()
   const [consumo, setConsumo]= useState()
   const [claseVuelo, setClaseVuelo]= useState()
   const [tipoTransporte, setTipoTransporte]=useState()
   const [tipoVehiculo, setTipoVehiculo]= useState( false)
   const[consumoEnergia, setEnergia]=useState()
const [clase, setClase]= useState(false)
const [consumoGas, setConsumoGas]= useState()
const [tipo, setTipo]=useState()
const [tipoCombustible, setTipoCombustible]= useState()
const [cantidad, setCantidad]=useState()
const tipoAli={
  
}
const datavs={
transporte:{
  vehiculo:vehiculo,
  tipoCombustible:tipoCombustible,
  distancia:distancia,
  consumo:consumo,
  claseVuelo:claseVuelo,
  tipoTransporte:tipoTransporte
},
energia:{
  consumo:consumoEnergia
},
gas:{
  consumo:consumoGas
},
alimento:[{
  tipo:tipo,
  cnatida:cantidad
}
]
}
  return (
   <div className='flex flex-col items-center justify-center'>
   <Card color="transparent" shadow={false}>
   <Typography variant="h4" color="blue-gray">
  Huella de carbono
   </Typography>
   <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
   <Typography color="gray" className="mt-1 font-normal ">
    En que vehiculo vas a tu oficina
   </Typography>
   <div className=" flex flex-col gap-6">
   <div className="flex flex-col">
        <div className='border-solid' value='bicicleta' onChange={(e)=>setVehiculo(e.target.value)}>Bicicleta</div>
        <div value='caminar' onChange={(e)=>setVehiculo(e.target.value)}>Caminando</div>
        <div value='coche' onChange={(e)=>setVehiculo(e.target.value)} onClick={() => setCombustible(!combustible)} >
          Carro
        </div>
        {combustible && (
          <>
          <fieldset>
    <legend>Selecciona un tipo de combustible:</legend>
    
    <label>
      <input type="radio" name="combustible" value="gasolina"  onChange={(e)=>setTipoCombustible(e.target.value)} />
      Gasolina
    </label><br />
    
    <label>
      <input type="radio" name="combustible" value="diesel" onChange={(e)=>setTipoCombustible(e.target.value)} />
      Diesel
    </label>
  </fieldset>
  <p>Distancia que recorre en km</p>
  <input type="number" className='border-solid bg-blue-gray-200' value={distancia} onChange={(e)=>setDistancia(e.target.value)}/>
  <p>combustible utilizado en litros</p>
  <input type="number" className=' bg-blue-gray-200' value={consumo} onChange={(e)=>setConsumo(e.target.value)}/>
          </>
        )}

        <div onClick={()=> setTipoVehiculo(!tipoVehiculo)} value='publico' onChange={(e)=>setVehiculo(e.target.value)}>Transporte Público</div>
        {
          tipoVehiculo&&(
            <>
           <fieldset>
    <legend>Selecciona un tipo de vehículo:</legend>
    
    <label>
      <input type="radio" name="vehiculo" value="bus"  onChange={(e)=>setTipoTransporte(e.target.value)}/>
      Bus
    </label><br />
    
    <label>
      <input type="radio" name="vehiculo" value="tren" onChange={(e)=>setTipoTransporte(e.target.value)} />
      Tren
    </label>
  </fieldset>
        <p>Distancia que recorre en km</p>
        <input type="number" className='border-solid bg-blue-gray-200' value={distancia} onChange={(e)=>setDistancia(e.target.value)}/>

            </>
          )
        }
        <div onClick={()=>setClase(!clase)}>Avión</div>
        {
          clase&&(
            <>
               <fieldset>
    <legend>Clase de viaje</legend>
    
    <label>
      <input type="radio" name="clase" value="economica" onChange={(e)=>setClase(e.target.value)}/>
      Económica
    </label><br />
    
    <label>
      <input type="radio" name="clase" value="ejecutiva" onChange={(e)=>setClase(e.target.value)}/>
      Ejecutiva
    </label><br />
    
    <label>
      <input type="radio" name="clase" value="primera" onChange={(e)=>setClase(e.target.value)}/>
      Primera clase
    </label>
  </fieldset>
  <p>Distancia que recorre en km</p>
  <input type="number" className='border-solid bg-blue-gray-200' value={distancia} onChange={(e)=>setDistancia(e.target.value)}/>
            </>
          )
        }
      </div>
      </div>
     <div className="mb-1 flex flex-col gap-6">
       <Typography variant="h6" color="blue-gray" className="-mb-3">
      Electricidad
       </Typography>
       <p>consumo en (kwh)</p>
       <Input
       type='number'
       value={consumoEnergia}
         size="lg"
         placeholder="name@mail.com"
         className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
         labelProps={{
           className: "before:content-none after:content-none",
         }}
         onChange={(e)=>setEnergia(e.target.value)}
       />
       <Typography variant="h6" color="blue-gray" className="-mb-3">
      Gas natural
       </Typography>
       <p>Consumo de gas en metro cúbico</p>
       <Input
       type='number'
         size="lg"
         value={consumoGas}
         placeholder="name@mail.com"
         className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
         labelProps={{
           className: "before:content-none after:content-none",
         }}
         onChange={(e)=>setConsumoGas(e.target.value)}
       />
      
     </div>
    
     <Typography color="gray" className="mt-4  font-normal">
       Alimentación que consumes
     </Typography>

  <label>
    <input type="checkbox"  value="res" /> Res
    <fieldset>
  <legend>cantidad en kilos</legend>
  <input type="number" />
  </fieldset>
  </label><br/>
  <label>
    <input type="checkbox"  value="pollo" /> Pollo
    <fieldset>
  <legend>cantidad en kilos</legend>
  <input type="number" />
  </fieldset>
  </label><br/>
  <label>
    <input type="checkbox"  value="vegetal" /> Vegetal
    <fieldset>
  <legend>cantidad en kilos</legend>
  <input type="number" />
  </fieldset>
  </label><br/>
  <label>
    <input type="checkbox"  value="fruta" /> Fruta
    <fieldset>
  <legend>cantidad en kilos</legend>
  <input type="number" />
  </fieldset>
  </label>
 
   </form>
   <Button >Calcular</Button>
 </Card>
 </div>
  )
}
