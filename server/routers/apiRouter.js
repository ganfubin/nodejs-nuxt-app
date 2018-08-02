/*
 * 该文件作api 转发路由层
 * */

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json({aa: 1111});
});
module.exports = router;
