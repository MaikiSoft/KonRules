const mongoose = require("mongoose");
const articuloSchema = mongoose.Schema({
    
    //capitulo al que pertenece
    idCapitulo: {
        type: Number,
        required: true,
    },
    numeroArticulo: {
        type: Number,
        required: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    contenido: {
        type: String,
        required: true,
    },
    Ejemplos: {
        type: [/*enlazar con modelo de ejemplo*/],
        required: false,
    }
});
module.exports = mongoose.model("Articulo", articuloSchema);