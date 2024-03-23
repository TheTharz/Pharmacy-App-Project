const router = require('express').Router();
const { Order } = require('../models/Order');
const { addOrder, getAllOrders } = require('../controllers/OrderController');

router.route('/add-order').post(addOrder);
router.route('/get-all-orders').get(getAllOrders);
