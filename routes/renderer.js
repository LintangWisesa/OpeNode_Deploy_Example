var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	return res.send("<h1>Salam dari Lintang & Openode!</h1>");
});

router.get('/:lintang', function (req, res) {
	return res.send("<h1>Anda mengirim request GET /"+req.params.lintang+"</h1>");
});

module.exports = router;
