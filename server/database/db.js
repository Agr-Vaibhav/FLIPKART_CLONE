import mongoose from "mongoose";
const Connection=async(username,password)=>{
    // const URL=`mongodb+srv://${username}:${password}@ecommerce-web.7dknblt.mongodb.net/?retryWrites=true&w=majority`;
     const URL=`mongodb://${username}:${password}@ac-cjiagh7-shard-00-00.7dknblt.mongodb.net:27017,ac-cjiagh7-shard-00-01.7dknblt.mongodb.net:27017,ac-cjiagh7-shard-00-02.7dknblt.mongodb.net:27017/?ssl=true&replicaSet=atlas-86kqi6-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});//connect function is async func
       console.log('Database connected successfully');
    }
    catch(error){
        console.log('Error while connecting with the database',error.message)
    }
}
export default Connection;