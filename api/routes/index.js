const express = require('express');
const router = express.Router();
const CrimeUserController = require("../controllers/CrimeUser.controller")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ data: "API works!",
    error: false
  })
});

router.get('/crime-users', CrimeUserController.list);
router.post('/csv-upload', CrimeUserController.importRecords);

module.exports = router;
