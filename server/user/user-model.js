// var mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var constants = require("../../config/constants");
var userSchema = new global.mongoose.Schema({
    //basic
    role: [{ type: Schema.Types.ObjectId, ref: 'role' }],
    username: { type: String },
    password: { type: String },
    email: { type: String },
    mobile: { type: String,unique:true,required:true ,minlength:10,maxlength:10},

    // personal details
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    gender: { type: String,enum: [global.constants.gender.MALE,global.constants.gender.FEMALE] },
    adhar: { type: String,unique:true },

    createdDate: {type: Date,default: new Date()},
    isDelete:{type:Boolean,default:false}
});

const enumOptions = {};
userSchema.plugin(global.enumValues, enumOptions);
userSchema.plugin(global.uniqueValidator, { message: "User already exists" });
var userModel = mongoose.model('user', userSchema);
module.exports = userModel;