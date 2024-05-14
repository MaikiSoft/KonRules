const express = require("express");
const router = express.Router(); //manejador de rutas de express
const ejemploSchema = require("../models/ejemplo");
const verifyToken = require('./validate_token');
const articuloController = require('../controllers/articuloController');


//Admin 
router.post("/ejemplos", verifyToken, articuloController.crearEjemplo);

//Elimina el ejemplo buscado por el ID
router.delete("/ejemplo/:id", verifyToken, (req, res) => {
    ejemploSchema.findByIdAndDelete(req.params.id, req.body, { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});
router.put("/ejemplo/:id", (req, res) => {
    const { id } = req.params;
    const { title, image, video } = req.body;
    ejemploSchema
        .updateOne({ _id: id }, {
            $set: {title, image, video}
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//peticion del usuario

//Buscar un ejemplo por titulo
router.get("/ejemplo/:titulo", (req, res) => {
    ArticuloSchema.findOne({ titulo: req.params.titulo })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

//Buscar un ejemplo por idArticulo al que pertenece
router.get("/ejemplo/:idArticulo", (req, res) => {
    ArticuloSchema.findOne({ idArticulo: req.params.idArticulo })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

//Buscar todos los ejemplos por idArticulo al que pertenece
router.get("/ejemplos/:idArticulo", (req, res) => {
    ArticuloSchema.find({ idArticulo: req.params.idArticulo })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

module.exports = router;