var express = require('express');
var router = express.Router();
var indexController = require("./../indexController");
var indexMiddleware = require("../indexMiddleware");

router.post('/', function (req, res, next) {
    indexController.shopController.addShop(req, res);
});
router.get('/', function (req, res, next) {
    indexController.shopController.getShop(req, res);
});

module.exports = router;
