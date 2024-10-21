const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    countryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'country'
    },
    stateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'state'
    },
    city :{
        type:String,
        required:true
    },
    status :{
        type: String,
        default :'Active'
    }
})
module.exports = mongoose.model('city', citySchema);
