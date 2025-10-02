const mongoose = require('mongoose');

const schema = mongoose.Schema;

const MenuSchema = new schema({
    menu : { 
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
     rating : {
        type : Number,
    },
    quantity: {
        type : Number,
        required : true
    },
    description: {
        type : String,
        required : true
    },
    photo: {
        type : String
    }
    
}, {timestamps:true})

module.exports = mongoose.model('menu', MenuSchema);