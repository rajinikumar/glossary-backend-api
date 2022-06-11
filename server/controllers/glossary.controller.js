const GlossaryService = require('../services/glossary.service');

// Retrieve and return all glossarys from the database.
exports.findAll = async function (req, res, next) {
    // Validate request parameters, queries using express-validator    
    try {
        const glossaries = await GlossaryService.findAll({})
        return res.status(200).json({ status: 200, data: glossaries, message: "Succesfully Glossaries Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Create and Save a new Glossary
exports.create = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    if (!req.body.term || !req.body.definition) {
        return res.status(400).send({
            message: "Glossary term/definition can not be empty"
        });
    }
    try {
        const glossaries = await GlossaryService.create(req.body)
        return res.status(200).json({ status: 200, data: glossaries, message: "Succesfully Glossaries Created" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Find a single glossary with a glossaryId
exports.findOne = async function (req, res, next) {
    // Validate request parameters, queries using express-validator    
    try {
        const { glossaryId } = req.params
        const glossaries = await GlossaryService.findOne(glossaryId)
        return res.status(200).json({ status: 200, data: glossaries, message: "Succesfully Glossaries Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Update a glossary identified by the glossaryId in the request
exports.update = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    if (!req.body.term && !req.body.definition) {
        return res.status(400).send({
            message: "Glossary term or definition can not be empty"
        });
    }
    try {
        const glossaries = await GlossaryService.update(req)
        return res.status(200).json({ status: 200, data: glossaries, message: "Succesfully Glossaries Created" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Delete a glossary with the specified glossaryId in the request
exports.delete = async function (req, res, next) {
    // Validate request parameters, queries using express-validator    
    try {
        const { glossaryId } = req.params;
        const glossaries = await GlossaryService.delete(glossaryId)
        return res.status(200).json({ status: 200, data: glossaries, message: "Succesfully Glossaries Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}