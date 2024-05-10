const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaEjemplo = new Schema({
  title: {
    type: String,
    required: true
  },
  image: String,
  video: String,
  Articulo: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Articulo'}],
  }
});

SchemaEjemplo.pre('save', function(next) {
  if (!this.image && !this.video) {
    next(new Error('Debe proporcionar al menos una imagen o un video'));
  } else {
    next();
  }
});

module.exports = mongoose.model('Ejemplo', SchemaEjemplo);