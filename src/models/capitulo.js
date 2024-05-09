const mongoose = require("mongoose"); // importando el componente mogoose
const capSchema = mongoose.Schema({
    numeroCap: {
        type: Number,
        required: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    numeroArts: {
        type: String,
        required: true,
    },
    palabrasClave: {
        type: [String],
        requiered: true,
    }
});
module.exports = mongoose.model("Capitulo", capSchema);