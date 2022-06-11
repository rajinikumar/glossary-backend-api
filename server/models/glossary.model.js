const mongoose = require('mongoose');

const GlossarySchema = mongoose.Schema({
    term: String,
    definition: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Glossary', GlossarySchema);
