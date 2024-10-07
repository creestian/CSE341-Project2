const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("WZ talktowalls Meta APIs");
})

router.use('/wzmeta', require('./wzmeta'));
router.use('/', require('./swagger'));

module.exports = router;