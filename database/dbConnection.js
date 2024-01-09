import mongoose from "mongoose"

export const dbConnection = ()=>{
    mongoose.connect(process.env.ONLINE_DB).then(()=>{
        console.log('connected database........')
    }).catch((err)=>{
        console.error('Fail to connect database:=>', err);
    })
}