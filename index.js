import express from 'express'
import dbconection from './dbconfig.js'
import user from './router/user.js'
import 'dotenv/config';


const app=express()
const config = JSON.parse(process.env.CONFIG)

//body parser json
app.use(express.json())

app.use('/user',user);
app.get('/',(req,res)=>{
    res.status(200).send("Test Ok");
})

app.listen(3000,()=>{
    console.log(`Server is runing on port no 3000`),
    dbconection(config)
})

