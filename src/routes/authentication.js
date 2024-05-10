const express = require("express");
const router = express.Router(); 
const adminSchema = require("../models/admin");
router.post('/signup', async (req, res) => {
    const { codigo, correo, clave } = req.body;
    const admin = new adminSchema({
        codigo: codigo,
        correo: correo,
        clave: clave
    });
    admin.clave = await admin.encryptClave(admin.clave);
    await admin.save(); 
    res.json(user);
});
module.exports = router;
