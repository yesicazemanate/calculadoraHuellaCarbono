import mongoose from "mongoose";
export const connectDB = async()=>{
   try{
      const url= 'mongodb+srv://yemaze123yz:yLQSPvxuixwkKifG@cluster0.8nsa5.mongodb.net/calculadoraHuellaCarbono'
      mongoose.connect(url)
      console.log('connection seccesful database');
   }catch(error){
      console.log('error ', error);
      process.exit(1)
   }
}