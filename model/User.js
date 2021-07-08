const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true, //스페이스 없애주는 역할
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: { 
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

//이 모듈을 다른곳에서 쓰게 함.
module.exports = {User} 