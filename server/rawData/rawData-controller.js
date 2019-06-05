var indexModel = require("./../indexModel");
// var logger = require("./../component/log4j").getLogger('roleCtrl');
/* 

exports.addShop = async function(req,res){
  try {
    // password encrypt
    new indexModel.shopModel(req.body).save(function (err) {
      if(err){
        //logger.error("addRole ", err);
        return global.response.sendResponse(res,500,"error",global.constants.messages.error.save,err);
      }
      else {
        return global.response.sendResponse(res,200,"success",global.constants.messages.success.save);
      }
    })
  } catch (e) {
    return global.response.sendResponse(res,500,"error",global.constants.messages.error.save,err);
  }
}
exports.getShop = async function(req,res){
  try {
    let query = {};
    if(req.query.mobile)
      query.mobile = req.query.mobile.trim();

    let childRole = await indexModel.roleModel.findOne({type:global.constants.appConstants.ROLE_CHILD});
    query.role = childRole._id;
    let children = await indexModel.shopModel.find(query);
    return global.response.sendResponse(res,200,"success",global.constants.messages.success.get,children);
  } catch (e) {
    return global.response.sendResponse(res,500,"error",global.constants.messages.error.get,err);
  }
}

*/