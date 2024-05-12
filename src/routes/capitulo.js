const express = require("express");
const router = express.Router(); //manejador de rutas de express
const capituloSchema = require("../models/capitulo");
const verifyToken = require('./validate_token');

//Admin (falta clave) 
router.post("/capitulos", verifyToken, (req, res) => {
    const capitulo = capituloSchema(req.body);
    capitulo
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Peticiones del usuario

//Busca todos los capitulos con sus respectivos articulos
router.get("/capitulos", (req, res) => {
    capituloSchema.find().populate('articulos')
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Busca todos los capitulos por palabra clave
router.get("/capitulos/buscar/:palabraClave", verifyToken, (req, res) => {
    capituloSchema.find({ palabrasClave: { $in: [req.params.palabraClave] } }).populate('articulos')
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

module.exports = router;
