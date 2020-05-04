const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicinSchemas = new Schema({
  userID: { type: String, required: true },
  orderName:{type: String, required: false},
  address: { type: String, required: true },
  discription: { type:String},
  paymentType: { type:String, required: true },
}, {
  timestamps: true,
});

const MedicinOrder = mongoose.model('MedicinOrder', medicinSchemas);

module.exports = MedicinOrder;
