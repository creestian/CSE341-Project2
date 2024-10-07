const express = require('express');
const router = express.Router();
const controller = require('../controllers/wzmeta');
const validation = require('../middleware/validate');

//--ROUTES
//Get all the collection.
router.get('/', controller.getAll);
//Get ony document.
router.get('/:id', controller.getSingle);
//Get all the collection.
router.post('/',validation.saveContact, controller.createMeta);
//Get ony document.
router.put('/:id',validation.saveContact, controller.updateMeta);
//Get ony document.
router.delete('/:id', controller.deleteMeta);

module.exports = router;