const mongoose = require("mongoose"); // importando el componente mogoose
const sugSchema = mongoose.Schema({
    
    fecha: {
        type: Date,
        default: Date.now
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
    // Ejemplo al que pertenece
    // idEjemplo:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Ejemplo',
    //     required: true,
    // }

});
module.exports = mongoose.model("Sugerencias", sugSchema);
