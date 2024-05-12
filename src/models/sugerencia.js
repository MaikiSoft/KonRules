//modulo de sugerencias
const mongoose = require("mongoose"); // importando el componente mogoose
const sugSchema = mongoose.Schema({
    
    fecha: {
        type: Date,
        required: true,
    },
    sugerencia: {
        type: String,
        required: true,
    },
    categoria: {
    //true para imagen y false para video
        type: Boolean,
        required: false,
    },
    //articulo al que pertenece
    idArticulo:{
        type: Number,
        required: true,
    }

});
module.exports = mongoose.model("Sugerencias", sugSchema);