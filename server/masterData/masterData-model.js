// var mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var constants = require("../../config/constants");
/*
var userSchema = new global.mongoose.Schema({
    //basic
    // roles: [{ type: Schema.Types.ObjectId, ref: 'role' }],
    shopName: { type: String },
    landmark: { type: String },
    city: { type: String },
    street: { type: String },
    pin: { type: String },
    dist: { type: String },
    email: { type: String },
    mobile: { type: String,minlength:10,maxlength:10},
    loc : { type: "Point", coordinates: [{ type: Number }] },
    services:[{ type: Mixed }],
    isDelete:{type:Boolean,default:false}
});

const enumOptions = {};
userSchema.plugin(global.enumValues, enumOptions);
userSchema.plugin(global.uniqueValidator, { message: "Shop already exists" });
var userModel = mongoose.model('user', userSchema);
module.exports = userModel;

*/