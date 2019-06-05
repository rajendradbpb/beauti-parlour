let errorHandler = {};
errorHandler.throw = function(message) {
    throw new Error(message);
}




module.exports = errorHandler;