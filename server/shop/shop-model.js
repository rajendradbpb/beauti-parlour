// var mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var constants = require("../../config/constants");
const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  });
var shopSchema = new global.mongoose.Schema({
    //basic
    owner: { type: Schema.Types.ObjectId, ref: 'user' },
    shopName: { type: String },
    landmark: { type: String },
    city: { type: String },
    street: { type: String },
    pin: { type: String },
    dist: { type: String },
    email: { type: String },
    mobile: { type: String,minlength:10,maxlength:10},
    location: {
        type: pointSchema
      },
    services:[{ type: Schema.Types.Mixed }],
    facilities:[{ type: Schema.Types.Mixed }],
    isDelete:{type:Boolean,default:false}
});

const enumOptions = {};
// shopSchema.plugin(global.enumValues, enumOptions);
shopSchema.plugin(global.uniqueValidator, { message: "Shop already exists" });
var shopModel = mongoose.model('shop', shopSchema);
module.exports = shopModel;