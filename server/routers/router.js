/*
 * 该文件作为中间路由层
 * */

const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  next()
});
module.exports = router;
