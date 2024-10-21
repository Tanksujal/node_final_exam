const mongoose = require('mongoose');

const stateSchema = mongoose.Schema({
    countryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'country'
    },
    state :{
        type:String,
        required:true
    },
    status :{
        type: String,
        default :'Active'
    }
})
module.exports = mongoose.model('state', stateSchema);
