var config = require('config');
var constants = {
  debug:true,
  gender:{
    MALE:"male",
    FEMALE:"female",
  },
  roles:{
    ROLE_ADMIN:"admin",
    ROLE_SHOP:"shop",
    ROLE_USER:"user",
    

  },
  userStatus:['active','pending','inactive'],
  messages:{
    error:{
      //global
      "save"   : "Error in saving data",
      "get"   : "Error in fetch data",
      "invalidData" : "Invalid data", // generic
      "invalidRole" : "Invalid Role", // generic
      "changePassword" : "Error in change password",
      "saveJob"   : "save Job Failure",
      "saveData"   :"save Data Error",
      "getData"   :"Get Data Error",
      "updateData"   :"Update Data Error",
      "deleteData"   :"Delete Data Error",
      "userUnAuthorised"   :"User not authorised",
      "username"   :"username already Exists",
      "undefinedPassword":"Password not defined",
      "saveState":"error in saving state",
      "getState":"error in get state",
      "deleteState":"error in Delete state",
      "shopOwnerNotFound":"shop owner not found",
      },
    success:{
      //global
      "save"   : "data saved successfully",
      "get"   : "Data Fetched successfully",
      "changePassword" : "password change success",
      "saveJob"   : "save Job Success",
      "saveData"   :"save Data Success",
      "getData"   :"Get Data Success",
      "updateData"   :"Update Data Success",
      "deleteData"   :"Delete Data Success",
      "verified":"verified",
      "getData"   :"get Data Success",
      "getUser"                     :"Success in fething user details",
      "saveUser"                 : "Success in saving user",
      "saveState":"success in saving state",
      "getState":"success in get state",
      "deleteState":"success in Delete state",
    },
  },

}
module.exports = constants;
