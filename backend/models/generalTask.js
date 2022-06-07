// const bcrypt = require('bcryptjs/dist/bcrypt');   
const mongoose = require('mongoose');

const generaltaskSchema = new mongoose.Schema({
    date:{
        type: Date
    },
    topic:{
        type: String
    },//destype markdown || text 
    objective:{
        type: String
    },//
    category:{
        type:String //hr or admin or IT .
    },
    personResponsible:{ 
        type: mongoose.Schema.Types.ObjectId, refPath: 'category'
    },
    estimatedTime:{
        type:String
    }
},
{
    timestamps: true,
});

const generaltask = mongoose.model('generaltask', generaltaskSchema);

module.exports = generaltask;  
