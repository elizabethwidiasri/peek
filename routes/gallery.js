const router = require('express').Router();

router.get('/gallery', (req, res) => {
    res.render('gallery');
})

module.exports = router;