var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	return res.send("Salam dari Lintang & Openode!");
});

router.get('/:lintang', function (req, res) {
	return res.send("Anda mengirim request GET /"+req.params.lintang);
});

module.exports = router;
