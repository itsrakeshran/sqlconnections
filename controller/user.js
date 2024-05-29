import {sqlQuery} from '../dbconfig.js';


//get user
export const getUser=async(req,res)=>{
    let query='SELECT * FROM userdata';
    // const query=`insert into userdata(username,age) values('${userName}',${age})`
    try{
        const result=await sqlQuery(query);
        res.status(200).send(result.recordset);
    }catch(err){
        res.status(400).send("get user error:",err)
    }
    
}



//set User
export const setUser=async(req,res)=>{
    const {username,age}=req.body;
    const query=`insert into userdata(username,age) values('${username}',${age})`
    try{
        const result=await sqlQuery(query);
        res.status(200).json({"msg":"success","affected row":result.rowsAffected})
    }catch(err){
        res.status(400).send("set user error:",err)
    }
}


//remove user
export const removeUser=async(req,res)=>{
    const {username}=req.body;
    const query=`DELETE FROM userdata WHERE username = '${username}'`
    try{
        const result=await sqlQuery(query);
        res.status(200).send({"msg":"success","affected row":result.rowsAffected})
    }catch(err){
        res.status(400).json({"set user error":err})
    }
}


//update user
export const updateUser=async(req,res)=>{
    const {username,age}=req.body;
    const query = `UPDATE userdata SET age = '${age}' WHERE username = '${username}'`;
    try{
        const result=await sqlQuery(query);
        res.status(200).send({"msg":"success","affected row":result.rowsAffected})
    }catch(err){
        res.status(400).json({"set user error":err})
    }
}
