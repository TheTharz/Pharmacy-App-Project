const { Order } = require('../models/Order');
const { orderValidate } = require('../models/Order');

const addOrder = async (req, res) => {
  //validate
  const { error } = orderValidate(req.body);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }

  //add order
  const order = new Order({
    user: req.body.user,
    medicines: req.body.medicines,
    totalAmount: req.body.totalAmount,
  });

  await order
    .save()
    .then((order) => {
      res
        .status(201)
        .send({ data: order, message: 'Order saved successfully' });
    })
    .catch((error) => {
      res.status(500).send({ message: 'Internal Server error' });
    });
};

//get all orders
const getAllOrders = async (req, res) => {
  await Order.find()
    .populate('user', 'firstName lastName email')
    .populate('medicines.medicine', 'name price')
    .then((orders) => {
      res.status(200).send({ data: orders });
    })
    .catch((error) => {
      res.status(500).send({ message: 'Internal Server error' });
    });
};

module.exports = { addOrder, getAllOrders };
