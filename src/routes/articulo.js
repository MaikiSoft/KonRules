const express = require("express");
const verifyToken = require('./validate_token');
const router = express.Router(); //manejador de rutas de express
const ArticuloSchema = require("../models/articulo");

//Admin (falta clave) 
router.post("/articulos", verifyToken, (req, res) => {
    const articulo = ArticuloSchema(req.body);
    articulo
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Elimina el articulo buscado por el ID (admin)
router.delete("/articulo/delete/:id", verifyToken, (req, res) => {
    ArticuloSchema.findByIdAndDelete(req.params.id, req.body, { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

//Buscar todos los articulos(Usuario)
router.get("/articulos", (req, res) => {
    ArticuloSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

module.exports = router;