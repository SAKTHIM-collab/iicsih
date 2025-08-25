const mongoose = require('mongoose');
const validator = require('validator');

const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Invalid email address']
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: 'Phone number must be 10 digits'
        }
    },
    team: {
        type: String,
        required: true,
        trim: true
    },
    idea: {
        type: String,
        required: true,
        trim: true
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Registration', registrationSchema);