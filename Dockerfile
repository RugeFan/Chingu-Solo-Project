# 设置 Node 版本
ARG NODE_VERSION=20.15.1
FROM node:${NODE_VERSION}-slim AS base

LABEL fly_launch_runtime="Node.js"

# 设置工作目录
WORKDIR /pureglim

# 设置生产环境变量
ENV NODE_ENV="production"

# 构建阶段：安装依赖和构建前端
FROM base AS build

# 安装构建所需工具
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# 复制依赖文件并安装所有依赖（包括 devDependencies）
COPY --link package.json package-lock.json ./
RUN npm install --force

# 复制脚本
COPY --link scripts ./scripts

# 复制前端代码并安装前端依赖
WORKDIR /pureglim/frontend
COPY --link frontend/package.json frontend/package-lock.json ./
RUN npm install --force

# 复制前端代码
COPY --link frontend ./

# 构建前端
RUN npm run build || true  # 即使构建失败，也继续下一步

# 最终阶段：准备生产镜像
FROM base

# 复制构建阶段的 node_modules 和脚本
COPY --from=build /pureglim/node_modules /pureglim/node_modules
COPY --from=build /pureglim/scripts /pureglim/scripts

# 复制构建后的前端文件
COPY --from=build /pureglim/frontend /pureglim/frontend

# 复制后端代码
COPY --link backend /pureglim/backend

# 安装生产依赖
COPY --link package.json package-lock.json ./
RUN npm ci --only=production

# 打印日志检查文件路径和内容
RUN echo "Checking /pureglim/scripts directory:" && ls -la /pureglim/scripts
RUN echo "Checking /pureglim/frontend/assets directory:" && ls -la /pureglim/frontend/src/assets

# 运行优化脚本
WORKDIR /pureglim
RUN node ./scripts/optimize-images.js || { echo 'Image optimization failed'; exit 1; }

# 设置工作目录到后端
WORKDIR /pureglim/backend

# 暴露端口
EXPOSE 8080

# 启动应用
CMD ["node", "server.js"]
