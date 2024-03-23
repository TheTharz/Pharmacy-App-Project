const mongoose = require('mongoose');
const joi = require('joi');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  medicines: [
    {
      medicine: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medicine',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
});

//add validations
const orderValidate = function (data) {
  const schema = joi.object({
    user: joi.string().required().label('User'),
    medicines: joi
      .array()
      .items(
        joi.object({
          medicine: joi.string().required().label('Medicine'),
          quantity: joi.number().required().label('Quantity'),
        })
      )
      .required()
      .label('Medicines'),
    totalAmount: joi.number().required().label('Total Amount'),
  });

  return schema.validate(data);
};

const Order = mongoose.model('Order', orderSchema);

module.exports = { Order, orderValidate };
