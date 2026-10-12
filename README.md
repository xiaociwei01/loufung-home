# LouFung Home

[中文](#中文) · [English](#english)

---

## 中文

`loufung.cn` 的源代码。

### 这是什么

一个个人主页 + 一个浏览器钢琴。
纯静态，无框架，无构建。运行在自建服务器上。

### 在线地址

| 页面 | 地址 |
|---|---|
| 主页 | https://loufung.cn |
| 钢琴 | https://loufung.cn/piano.html |

### 技术栈

- HTML / CSS / 原生 JavaScript
- GSAP + ScrollTrigger（滚动动画）
- Tone.js + Salamander 采样（钢琴音源）
- Cloudflare Turnstile（人机验证）

### 文件结构

- `index.html` — 主页
- `style.css` — 主页样式
- `extra.css` — 附加样式（状态栏、响应式）
- `extra.js` — 附加脚本（动画、问候语）
- `piano.html` — 钢琴
- `avatar.png` — 头像
- `turnstile-test.html` — Turnstile 测试页（开发用）

### 部署

这是一个纯静态站点，可以被任何 HTTP 服务器托管。

本项目的实际运行环境：

- 服务器：Redmi K60 Pro（Termux）
- 反向代理：Cloudflare Tunnel
- 域名：`loufung.cn`（阿里云注册）

### 许可

个人项目，代码供参考。

---

## English

Source code for `loufung.cn`.

### What it is

A personal homepage + a browser piano.
Pure static, no framework, no build step. Runs on a self-hosted server.

### Live

| Page | URL |
|---|---|
| Home | https://loufung.cn |
| Piano | https://loufung.cn/piano.html |

### Stack

- HTML / CSS / vanilla JavaScript
- GSAP + ScrollTrigger (scroll animations)
- Tone.js + Salamander samples (piano sounds)
- Cloudflare Turnstile (bot verification)

### Structure

- `index.html` — Homepage
- `style.css` — Homepage styles
- `extra.css` — Extra styles (top bar, responsive)
- `extra.js` — Extra scripts (animations, greeting)
- `piano.html` — Piano
- `avatar.png` — Avatar
- `turnstile-test.html` — Turnstile test page (dev)

### Deployment

This is a static site; any HTTP server can host it.

Actual runtime for this project:

- Server: Redmi K60 Pro (Termux)
- Reverse proxy: Cloudflare Tunnel
- Domain: `loufung.cn` (registered at Aliyun)

### License

Personal project. Code shared for reference.
