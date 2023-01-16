const mongoose = require("mongoose");


const compSchema = mongoose.Schema({
    nom: { type: String, require },
    disp: { type: String, require },
    code: { type: String, require },
    prix: { type: String, require },
    categorie: { type: String, require },
    image: { type: String, require },
    description: { type: String, require }

}, {
    timestamps: true,
})

const compModel = mongoose.model('comps', compSchema)

module.exports = compModel