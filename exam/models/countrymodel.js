const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    status :{
        type: String,
        default :'Active'
    }
})
module.exports = mongoose.model('country', countrySchema);
