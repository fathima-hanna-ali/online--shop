const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shop', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Database connected!')
})
.catch(() => {
    console.log('Connection failed!');
});
const cartSchema = mongoose.Schema({
    items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
      subTotal: { type: Number, required: true }
    },
  ],
  totalPrice: Number,
  totalQuantity: Number,

});

module.exports = mongoose.model('Cart', cartSchema);
