import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import generateToken from '../utils/generateToken.js';

// 添加新用户
const addUser = asyncHandler(async (req, res) => {
  const { name, email, address, contactNumber } = req.body;

  // 检查用户是否已注册
  const userExists = await Order.findOne({
    $or: [{ email }, { contactNumber }]
  });

  if (userExists) {
    // 如果用户已注册，返回 200 状态码，并发送用户已存在的消息
    return res.status(200).json({
      message: "用户已注册",
      user: {
        _id: userExists._id,
        name: userExists.name,
        email: userExists.email,
        address: userExists.address,
        contactNumber: userExists.contactNumber,
        token: generateToken(userExists._id)
      }
    });
  }

  // 注册新用户
  const user = await Order.create({ name, email, address, contactNumber });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      contactNumber: user.contactNumber,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("无效的用户数据");
  }
});

// 更新用户的服务
const makeOrder = asyncHandler(async (req, res) => {
  const { email, contactNumber, services, bedRoom, bathRoom } = req.body; // 接收 bedRoom 和 bathRoom

  // 根据邮箱或电话号码查找用户
  const user = await Order.findOne({
    $or: [{ email }, { contactNumber }]
  });

  if (!user) {
    res.status(404);
    throw new Error('用户未找到');
  }

  // 更新用户的 services、bedRoom 和 bathRoom 字段
  user.services = services;
  user.bedRoom = bedRoom;  // 更新 bedRoom
  user.bathRoom = bathRoom; // 更新 bathRoom

  // 保存更新后的用户信息
  const updatedUser = await user.save();

  if (updatedUser) {
    res.status(201).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      address: updatedUser.address,
      bedRoom: updatedUser.bedRoom,
      bathRoom: updatedUser.bathRoom,
      contactNumber: updatedUser.contactNumber,
      services: updatedUser.services,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(400);
    throw new Error('无法更新用户服务');
  }
});


export { addUser, makeOrder };
