const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.idea.get);

router.post('/', controllers.idea.post); //

router.put('/:id', auth(), controllers.idea.put);

router.delete('/:id', auth(), controllers.idea.delete);

module.exports = router;