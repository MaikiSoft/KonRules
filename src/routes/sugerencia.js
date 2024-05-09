const express = require("express");
const router = express.Router(); 
const sugSchema = require("../models/sugerencia");

//El post lo hace SOLO el usuario
router.post("/sugerencias", (req, res) => {
    const sugerencia = new sugSchema(req.body);
    sugerencia
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;

