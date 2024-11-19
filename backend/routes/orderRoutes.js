import express from 'express';
import { addUser, makeOrder } from '../controller/orderController.js';

const router = express.Router();

// POST 请求用于创建用户
router.route('/').post(addUser);

// PUT 请求用于更新用户的服务信息
router.route('/order').put(makeOrder);

export default router;
