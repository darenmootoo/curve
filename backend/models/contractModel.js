const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contractSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Contract', contractSchema);
