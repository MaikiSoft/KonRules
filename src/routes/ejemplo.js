const express = require("express");
const router = express.Router(); //manejador de rutas de express
const ArticuloSchema = require("../models/ejemplo");

//Admin (falta clave) 
router.post("/ejemplos", (req, res) => {
    const articulo = ArticuloSchema(req.body);
    articulo
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;