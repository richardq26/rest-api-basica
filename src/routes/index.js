const express= require("express");
const router= express.Router();

router.get("/", (req, res) =>{
   const data= {
       "name": "Aicos",
       "website": "Aicos.com"
   };
    
    res.json(data); //Envia un json
  }
);

module.exports=router;