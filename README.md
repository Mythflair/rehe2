# 热河风云 · rehe2.com

热河风云由沈楠于2002年建立。本包为怀旧纪念网站，含完整源码和图片，无需 npm、构建工具、数据库或付费依赖。没有游戏登录、充值或游戏服务器功能。

## 预览

解压后直接打开 index.html 即可。也可以在该目录运行 `python -m http.server 8000`，访问 http://localhost:8000 。

## GitHub Pages 部署

1. 在 GitHub 创建公开仓库，例如 rehe2。把本目录内的文件上传到仓库根目录（index.html 必须在根目录，不要再套一层 rehe2-site 文件夹）。保留 assets 文件夹。
2. 仓库 Settings → Pages → Build and deployment，Source 选择 Deploy from a branch，选择 main 分支和 / (root)，保存。
3. Custom domain 填写 rehe2.com 并保存。本包已包含内容为 rehe2.com 的 CNAME 文件。
4. 在域名的 DNS 管理后台设置下面的记录，避免与相同主机名已有的 A/AAAA/CNAME 冲突。先在 GitHub 配置域名，再改 DNS。

|类型|主机记录|值|
|---|---|---|
|A|@|185.199.108.153|
|A|@|185.199.109.153|
|A|@|185.199.110.153|
|A|@|185.199.111.153|
|CNAME|www|你的GitHub用户名.github.io|

最后一项必须替换为你实际的用户名，不带 https://，不带仓库名称。若使用 Cloudflare，首次验证和申请证书期间可使用 DNS only（灰云）。

5. 等 DNS 和证书就绪，在 Pages 勾选 Enforce HTTPS。DNS 生效与 HTTPS 选项出现可能需要24小时。最终访问 https://rehe2.com/ 。
6. 建议按 GitHub 文档验证域名所有权。不要用通配符 DNS 记录。

如暂时仅用 github.io 地址预览，可先不设置自定义域名并删除 CNAME；绑定域名时再恢复。所有页面资产均使用相对路径，也适用于仓库子路径。

官方说明（2026-09-26核对）：
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## 修改内容

- index.html：标题、介绍、正文、链接。
- style.css：色彩、字体、响应式布局。
- script.js：大图弹窗，支持 Esc 关闭。
- assets/rehe-fengyun.png：此次创作的完整主题插画，已经随包提供，无需外链。它是艺术化重现，非原版游戏截图。
- CNAME：自定义域名。

历史内容按沈楠提供的信息整理。网站特意区分1998年紫塞明珠网的背景与2002年热河风云的建立，不虚构当前在线人数或开放服务器。未添加追踪、外部字体或第三方脚本。页面中“下载主题插画”用于保存本站配图。
