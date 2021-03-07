const router = require('express').Router();

const { add, get, featured } = require('../controllers/cars');

router.post('/', add);
router.get('/', get);
router.get('/featured', featured);

module.exports = router;
