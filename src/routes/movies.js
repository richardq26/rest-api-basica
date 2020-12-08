const express= require("express");
const router= express.Router();
const _=require("underscore");
//npm i underscore recorre arreglos json
//npm i node-fetch
const movies= require("../sample.json");


router.get("/", (req,res)=>{
    res.json(movies);
});

router.post("/",(req,res)=>{
    //console.log(req.body); escribo en consola el json que recibi
    const{tittle,director,year,rating}=req.body;
    if(tittle && director && year && rating){//si recibi todos estos
        const id= movies.length + 1;
        const newMovie={...req.body,id};
        movies.push(newMovie);
        res.json(movies);
    }
    else{
        res.status(500).json({"Error:": "Hubo un error"});
    }
    res.send("RECIBIDOOOO");
});

router.put("/:id",(req,res)=>{
    const{id}=req.params;
    const{tittle,director,year,rating}=req.body;
    if(tittle && director && year && rating){
        _.each(movies,(movie,i)=>{
            if(movie.id==id){
                movie.tittle=tittle;
                movie.director=director;
                movie.year=year;
                movie.rating=rating;
            }
        });
        res.json(movies);
    }
    else{
        res.status(500).json({"Error:": "Hubo un error"});
    }
});

router.delete("/:id",(req,res) => {
    //console.log(req.params); recibe el parametro {id:"numero"}
    const{id} = req.params;
    _.each(movies,(movie, i)=>{
        if(movie.id==id){
            movies.splice(i,1);
        }
    })
    res.send(movies);
});
module.exports= router;