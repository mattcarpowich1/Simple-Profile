const express = require('express');
const path = require('path');
const router = express.Router();

router.use((_, res) => {
	res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;