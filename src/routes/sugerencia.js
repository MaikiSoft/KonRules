const express = require("express");
const router = express.Router(); 
const sugSchema = require("../models/sugerencia");
const verifyToken = require('./validate_token');

//El post lo hace SOLO el usuario
router.post("/sugerencias", verifyToken,  (req, res) => {
    const sugerencia = new sugSchema(req.body);
    sugerencia
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar 
router.get("/sugerencias", (req, res) => {
    sugSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//modificar
router.put("/sugerencias/:id", (req, res) => {
    const { id } = req.params;
    const {fecha, sugerencia, categoría, idArticulo} = req.body;
    sugSchema
        .updateOne({ _id: id }, {
            $set: { fecha, sugerencia, categoría, idArticulo }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//eliminar
router.delete("/sugerencias/:id", (req, res) => {
    const { id } = req.params;
    sugSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});


module.exports = router;

