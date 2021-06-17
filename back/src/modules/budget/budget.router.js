const express = require('express');

const router = express.Router();

router.post('/user/check', (req, res) => {
  res.json(
    JSON.stringify({
      user: req.query.userCode,
    })
  );
});

module.exports = router;
