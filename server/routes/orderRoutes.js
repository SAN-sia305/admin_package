const express = require('express');
const { getOrderStatus, updateOrderStatus } = require('../controllers/orderController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.get('/:orderId', protect, getOrderStatus);
router.post('/update', protect, updateOrderStatus);

module.exports = router;
