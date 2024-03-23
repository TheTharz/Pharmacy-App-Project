const router = require('express').Router();
const { addMedicine } = require('../controllers/MedicineController');

router.route('/add-medicine').post(addMedicine);
