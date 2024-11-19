import express from 'express';
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import orderRoutes from './routes/orderRoutes.js';
import { errHandler } from './middleware/errMiddlewares.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/user', orderRoutes);

// 获取当前文件的路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 提供前端构建后的静态文件
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// 处理 SPA 的所有路由
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
});

app.use(errHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`服务器在${process.env.NODE_ENV}模式下的${PORT}端口号运行`.rainbow.bold));
