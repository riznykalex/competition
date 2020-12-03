var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.send('GET request to the page');
});

/* POST home page. */
router.post('/', function(req, res, next) {
    res.send('POST request to the page');
});


module.exports = router;