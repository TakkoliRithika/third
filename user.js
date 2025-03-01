const mongoose=require('mongoose');
let user=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Username cannot be blank']
    },
    password:{
        type:String,
        required:[true,'Password cannot be blank']
    }
})
module.exports=mongoose.model('User',user)