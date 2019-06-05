var indexModel = require("./../indexModel");
var indexComponent = require("./../indexComponent");
exports.preRegdPost = async function (req, res, next) {
    try {
        // validate field
        indexComponent.utility.validateNull(req,res,'owner');
        // validate user
        let owner = await indexModel.userModel.findById(req.body.owner).populate("role");
        if(!owner){
            indexComponent.errorHandler.throw(global.constants.error.shopOwnerNotFound);
        }
        else{
            owner =  owner.role.filter( (v,k) => {
                if([global.constants.roles.ROLE_ADMIN, global.constants.roles.ROLE_SHOP].indexOf(v.type) != -1)
                    return v;
            } );
            if(owner.length == 0) {
                indexComponent.errorHandler.throw(global.constants.error.invalidRole);
            }
            
        }
       
        next();
    }
    catch (e) {
        next(e);
    }
}
