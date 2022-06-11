const Glossary = require('../models/glossary.model.js');

exports.findAll = async function (query) {
    try {
        const sortBy = { term: 1 };
        const glossaries = await Glossary.find(query).sort(sortBy);
        return glossaries;
    } catch (e) {
        // Log Errors
        console.log(e);
        throw Error('Some error occurred while retrieving Glossaries');
    }
}

exports.create = async function (reqData) {
    try {
        // Create a Glossary
        const glossary = new Glossary({
            term: reqData.term || "Untitled Glossary",
            definition: reqData.definition
        });
        console.log("glossary", glossary);
        const glossaries = await glossary.save();
        return glossaries;
    } catch (e) {
        console.log(e)
        // Log Errors
        throw Error('Some error occurred while creating the Glossary.');
    }
}

exports.findOne = async function (glossaryId) {
    try {
        const glossaries = await Glossary.findById(glossaryId);
        if (!glossaries) {
            throw Error(`Glossary not found with id ${glossaryId}`);
        }
        return glossaries;
    } catch (e) {
        // Log Errors
        console.log(e.message);
        throw Error(e.message || 'Some error occurred while retrieving Glossary');
    }
}

exports.update = async function (req) {
    try {
        // Update a Glossary
        const { term, definition } = req.body;
        const updateData = {};
        if (term) {
            updateData.term = term;
        }
        if (definition) {
            updateData.definition = definition;
        }

        const glossaries = await Glossary.findByIdAndUpdate(req.params.glossaryId, updateData, { new: true });
        return glossaries;
    } catch (e) {
        // Log Errors
        console.log(e);
        throw Error('Some error occurred while creating the Glossary.');
    }
}

exports.delete = async function (glossaryId) {
    try {
        const glossary = await Glossary.findByIdAndRemove(glossaryId);
        if (!glossary) {
            throw Error(`Glossary not found with id ${glossaryId}`);
        }
        return glossary;
    } catch (e) {
        // Log Errors
        console.log(e);
        throw Error(e.message || `Could not delete glossary with id ${glossaryId}`);
    }
}
