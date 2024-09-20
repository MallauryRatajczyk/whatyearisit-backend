var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    let date = new Date().getFullYear();
    console.log(date);
    res.json({ year: date });
})

module.exports = router;