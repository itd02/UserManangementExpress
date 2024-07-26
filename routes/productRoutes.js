const express = require("express")
const verify_token = require('../middleware/verification')
const router = express.Router();

const {saveProducts} = require("../controllers/productController")

// router.get('/sample_data/', saveProducts)
module.exports = router;