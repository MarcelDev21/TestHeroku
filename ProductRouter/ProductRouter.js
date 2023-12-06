const ProductController = require('../ProductController/ProductController')
const router = require('express').Router()

router.get('/getProduct', ProductController.getProduct)
router.post('/createProverbe', ProductController.createProverbe)

module.exports = router



