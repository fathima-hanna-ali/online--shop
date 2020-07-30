const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

mongoose.connect('mongodb://localhost:27017/shop', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Database connected!')
})
.catch(() => {
    console.log('Connection failed!');
});

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
