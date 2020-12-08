const express= require('express');
const router=express.Router();
const fetch= require('node-fetch'); 
//para hacer peticiones a otros servicios mediante nodejs



router.get("/",async(req,res)=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/users");
    //el await es que espere

    const users= await response.json();
    console.log(users)
    res.send(users);
});

module.exports=router;