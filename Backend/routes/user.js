// user.js
const router = require('express').Router();

const { getAllMedicine } = require('../controllers/MedicineController');
const { signUp } = require('../controllers/UserController');

router.route('/').post(signUp);

router.route('/get-all-medicine').get(getAllMedicine);

module.exports = router;
