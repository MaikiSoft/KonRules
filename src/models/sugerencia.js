
//modulo de sugerencias
const mongoose = require("mongoose"); // importando el componente mogoose
const sugSchema = mongoose.Schema({
    
    fecha: {
        type: Date,
        requiered: true,
    },
    prioridad: {
        type: String,
        requiered: true,
    },
    sugerencia: {
        type: String,
        requiered: true,
    },
    categoria: {
        type: String,
        requiered: true,
    }
});
module.exports = mongoose.model("Sugerencias", sugSchema);