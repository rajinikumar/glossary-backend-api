module.exports = (app) => {
    const glossary = require('../controllers/glossary.controller.js');

    // Create a new Glossary
    app.post('/glossary', glossary.create);

    // Retrieve all Glossary
    app.get('/glossary', glossary.findAll);

    // Retrieve a single Glossary with glossaryId
    app.get('/glossary/:glossaryId', glossary.findOne);

    // Update a Glossary with glossaryId
    app.put('/glossary/:glossaryId', glossary.update);

    // Delete a Glossary with glossaryId
    app.delete('/glossary/:glossaryId', glossary.delete);
}
