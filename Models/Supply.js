const mongoose = require("mongoose")
const SupplySchema = mongoose.Schema({    
    title:{
        type:String,
    },    
    file:{
        type:[String]
    },
    

},
{ timestamps: true }
);

const Supply = mongoose.model('Supply', SupplySchema);

module.exports = Supply ;