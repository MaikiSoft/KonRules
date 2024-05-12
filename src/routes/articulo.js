const express = require("express");
const verifyToken = require('./validate_token');
const router = express.Router(); //manejador de rutas de express
const ArticuloSchema = require("../models/articulo");

//Admin
router.post("/articulos", verifyToken, (req, res) => {
    const articulo = ArticuloSchema(req.body);
    articulo
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Actualiza un articulo buscado por el ID
router.put("/articulo/:id/change", (req, res) => {
    ArticuloSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

//Elimina el articulo buscado por el ID
router.delete("/articulo/delete/:id", verifyToken, (req, res) => {
    ArticuloSchema.findByIdAndDelete(req.params.id, req.body, { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

//Peticiones del usuario

// Buscar un artículo por su título
router.get("/articulo/:titulo",(req, res) => {
    ArticuloSchema.findOne({ titulo: req.params.titulo })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// Buscar un artículo por su número de artículo
router.get("/articulo/numero/:numeroArticulo", (req, res) => {
    ArticuloSchema.findOne({ numeroArticulo: req.params.numeroArticulo })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

//Buscar todos los articulos
router.get("/articulos", (req, res) => {
    ArticuloSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

module.exports = router;