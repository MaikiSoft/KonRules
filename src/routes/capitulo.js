const express = require("express");
const router = express.Router(); //manejador de rutas de express
const capituloSchema = require("../models/capitulo");
//Nuevo 
router.post("/capitulos", (req, res) => {
    const capitulo = capituloSchema(req.body);
    capitulo
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;