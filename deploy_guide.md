# DreamQuest Web Homepage 部署指南

## 1. 准备工作

### 1.1 本地项目打包
1. 确保所有代码已提交到版本控制系统
2. 检查项目结构是否完整：
   - static/：静态资源目录
   - templates/：模板文件目录
   - app.py：主应用程序
   - requirements.txt：依赖文件
   - wsgi.py：WSGI入口文件

### 1.2 服务器环境要求
- Python 3.8+
- Nginx
- Supervisor（进程管理工具）

## 2. 阿里云服务器配置

### 2.1 安装基础环境
```bash
# 更新系统包
sudo apt update
sudo apt upgrade

# 安装Python和相关工具
sudo apt install python3 python3-pip python3-venv

# 安装Nginx
sudo apt install nginx

# 安装Supervisor
sudo apt install supervisor
```

### 2.2 创建项目目录
```bash
# 创建应用目录
sudo mkdir -p /var/www/dreamquest
sudo chown -R $USER:$USER /var/www/dreamquest
```

## 3. 部署步骤

### 3.1 上传项目文件
```bash
# 在本地打包项目
zip -r dreamquest.zip .

# 使用scp上传到服务器
scp dreamquest.zip user@your-server-ip:/var/www/dreamquest/

# 在服务器上解压
cd /var/www/dreamquest
unzip dreamquest.zip
```

### 3.2 配置Python环境
```bash
# 创建虚拟环境
python3 -m venv venv
source venv/bin/activate

# 安装依赖
pip install -r requirements.txt
```

### 3.3 配置Supervisor
创建配置文件：`/etc/supervisor/conf.d/dreamquest.conf`
```ini
[program:dreamquest]
directory=/var/www/dreamquest
command=/var/www/dreamquest/venv/bin/gunicorn wsgi:app -w 4 -b 127.0.0.1:8000
user=www-data
autostart=true
autorestart=true
stderr_logfile=/var/log/dreamquest/dreamquest.err.log
stdout_logfile=/var/log/dreamquest/dreamquest.out.log
```

### 3.4 配置Nginx
创建配置文件：`/etc/nginx/sites-available/dreamquest`
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /static/ {
        alias /var/www/dreamquest/static/;
    }
}
```

### 3.5 启动服务
```bash
# 重启Supervisor
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl restart dreamquest

# 启用Nginx配置
sudo ln -s /etc/nginx/sites-available/dreamquest /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 4. SSL证书配置（可选）

### 4.1 安装Certbot
```bash
sudo apt install certbot python3-certbot-nginx
```

### 4.2 获取SSL证书
```bash
sudo certbot --nginx -d your-domain.com
```

## 5. 维护说明

### 5.1 日志查看
- Nginx日志：`/var/log/nginx/`
- 应用日志：`/var/log/dreamquest/`

### 5.2 更新部署
1. 备份当前版本
2. 上传新代码
3. 安装新依赖（如有）
4. 重启服务：
```bash
sudo supervisorctl restart dreamquest
```

### 5.3 常见问题处理
1. 如果网站无法访问：
   - 检查Supervisor状态：`sudo supervisorctl status`
   - 检查Nginx状态：`sudo systemctl status nginx`
   - 查看错误日志

2. 如果静态资源无法加载：
   - 检查Nginx配置中的静态资源路径
   - 确认文件权限正确

## 6. 安全建议
1. 配置防火墙，只开放必要端口
2. 定期更新系统和依赖包
3. 使用强密码和SSH密钥登录
4. 配置日志轮转
5. 定期备份数据