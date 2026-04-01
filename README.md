# ClashFox Portal

> 🦊 ClashFox 官方网站 - Native Proxy GUI for Mihomo

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)
[![Version](https://img.shields.io/badge/version-v0.5.5-orange.svg)](https://github.com/lukuochiang/ClashFox/releases)

## 📖 简介

ClashFox Portal 是 ClashFox 项目的官方网站，展示了这款强大的 Mihomo 代理内核图形用户界面。

ClashFox 是一个基于 Electron 构建的原生代理 GUI 应用，专为 Mihomo 代理内核设计。它提供了直观、现代化的界面，让代理内核管理变得轻松有趣（Make kernel management a lot of fun!）。

## ✨ 特性

- ⚡ **快速轻量** - 基于 Electron 构建，支持多平台，保持卓越性能
- 🎨 **现代 UI 设计** - 美观直观的界面，支持深色主题和流畅动画
- 🔧 **简单配置** - 简化 Mihomo 配置管理，提供友好的用户界面
- 📊 **实时监控** - 追踪代理流量、连接和性能指标
- 🔒 **安全私密** - 配置保持在本地，数据不发送到外部服务器
- 🚀 **macOS 原生** - 深度集成 macOS，包括 LaunchDaemon 助手

## 🚀 快速开始

### 本地开发

1. **克隆仓库**

```bash
git clone https://github.com/lukuochiang/ClashFox-Portal.git
cd ClashFox-Portal
```

2. **打开网站**

直接在浏览器中打开 `index.html` 文件，或使用本地服务器：

```bash
# 使用 Python 3
python3 -m http.server 8000

# 使用 Python 2
python -m SimpleHTTPServer 8000

# 使用 Node.js (http-server)
npx http-server -p 8000

# 使用 PHP 内置服务器
php -S localhost:8000

# 或使用其他静态服务器
```

3. **访问**

在浏览器中访问 `http://localhost:8000`

### 部署

本网站是静态站点，可轻松部署到各种平台：

- **GitHub Pages** - 推送到仓库后启用 Pages
- **Vercel** - 直接导入 Git 仓库
- **Netlify** - 拖放文件夹或连接 Git 仓库
- **Cloudflare Pages** - 连接 Git 仓库
- **任何静态网站托管服务** - 只需上传 HTML 文件

## 📂 项目结构

```
ClashFox-Portal/
├── index.html          # 主页面
├── assets/             # 静态资源
│   ├── logo.png
│   ├── logo_light.png
│   ├── logo_night.png
│   └── clashfox_team.png
└── README.md           # 项目说明
```

## 🎨 界面功能

### 主题切换
- 支持深色/浅色主题切换
- 可手动切换按钮控制
- 自动跟随系统偏好设置
- 平滑的主题过渡动画

### 交互特性
- 平滑滚动导航
- 卡片悬停动画效果
- 滚动触发的渐入动画
- 响应式移动端适配

## 🎨 界面预览

网站包含以下主要部分：

- **英雄区域 (Hero Section)** - 项目介绍、版本徽章 (v0.5.5) 和下载入口
- **功能特性 (Features)** - 6大核心功能卡片展示
  - ⚡ Fast & Lightweight - 快速轻量
  - 🎨 Modern UI Design - 现代 UI 设计
  - 🔧 Easy Configuration - 简单配置
  - 📊 Real-time Monitoring - 实时监控
  - 🔒 Secure & Private - 安全私密
  - 🚀 macOS Native - macOS 原生
- **应用截图 (Screenshots)** - ClashFox 各功能模块的界面预览
- **安装指南 (Installation)** - 4步快速安装说明
- **页脚 (Footer)** - 相关链接、资源和许可证信息

## 🌐 相关链接

### ClashFox 项目
- **ClashFox 主仓库**: [https://github.com/lukuochiang/ClashFox](https://github.com/lukuochiang/ClashFox)
- **下载页面**: [https://github.com/lukuochiang/ClashFox/releases](https://github.com/lukuochiang/ClashFox/releases)
- **问题反馈**: [https://github.com/lukuochiang/ClashFox/issues](https://github.com/lukuochiang/ClashFox/issues)
- **更新日志**: [https://github.com/lukuochiang/ClashFox/blob/main/CHANGELOG.md](https://github.com/lukuochiang/ClashFox/blob/main/CHANGELOG.md)
- **许可证**: [https://github.com/lukuochiang/ClashFox/blob/main/LICENSE](https://github.com/lukuochiang/ClashFox/blob/main/LICENSE)

### Mihomo 相关
- **Mihomo 官方仓库**: [https://github.com/MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo)
- **Mihomo 文档**: [https://wiki.metacubex.one/](https://wiki.metacubex.one/)

## 📝 许可证

本项目采用 GPL-3.0 许可证 - 详见 [LICENSE](https://github.com/lukuochiang/ClashFox/blob/main/LICENSE) 文件

## 👥 团队

### 项目维护者
- **Kuochiang Lu** - [GitHub](https://github.com/lukuochiang)

### ClashFox Team
查看 [assets/clashfox_team.png](assets/clashfox_team.png) 了解团队成员

## 🤝 贡献

欢迎贡献！如果你发现了问题或有改进建议，请：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 贡献指南

- 保持代码风格一致
- 添加适当的注释
- 确保响应式设计在各种设备上正常工作
- 测试主题切换功能
- 更新相关文档

## 📮 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 [Issue](https://github.com/lukuochiang/ClashFox/issues)
- 访问 [GitHub 主页](https://github.com/lukuochiang)

---

<div align="center">

**Made with ❤️ by [Kuochiang Lu](https://github.com/lukuochiang)**

[⬆ 回到顶部](#clashfox-portal)

</div>
