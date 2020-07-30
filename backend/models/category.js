const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shop', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Database connected!')
})
.catch(() => {
    console.log('Connection failed!');
});
const categorySchema = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Category', categorySchema);
