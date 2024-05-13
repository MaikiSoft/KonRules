const mongoose = require("mongoose");
const articuloSchema = mongoose.Schema({
    
    //capitulo al que pertenece
    idCapitulo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Capitulo',
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
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ejemplo'}],
        required: false,
    }
});
module.exports = mongoose.model("Articulo", articuloSchema);