#!/bin/bash

# 配置信息
SERVER_USER="root"
SERVER_HOST="dreams"
SERVER_PATH="/var/www/DreamHomePage"

# 本地构建和打包
echo "📦 Building and packaging..."
pnpm run deploy-all

# 上传到服务器
echo "📤 Uploading to server..."
scp dist.tar.gz $SERVER_USER@$SERVER_HOST:$SERVER_PATH

# 在服务器上执行部署
echo "🚀 Deploying on server..."
ssh $SERVER_USER@$SERVER_HOST "cd $SERVER_PATH && pnpm run deploy-server"

echo "✅ Deployment completed!" 