# Cloudflare 部署

状态：**代码就绪，生产接入待执行**  
更新日期：2026-08-12

## 当前方式

项目使用 Astro 生成 `dist/`，再由 Cloudflare Workers Static Assets 托管。`wrangler.jsonc` 是部署配置的代码内事实来源；项目没有 Worker 入口文件，因此请求只会命中静态资产。

## 本地验证

```sh
npm ci
npm run build
npm run preview
```

构建必须通过类型检查，并在 `dist/` 生成首页、404、站点地图、安全响应头配置和静态资源。

## 首次部署

1. 使用具有目标 Cloudflare 账户权限的环境登录 Wrangler。
2. 运行 `npm run deploy` 创建或更新名为 `9field-org` 的 Worker 静态资产项目。
3. 在 Cloudflare 控制台把 `9field.org` 与需要的 `www` 策略绑定到该项目。
4. 验证 HTTPS、首页、404、移动导航、外链和响应头后再认定发布完成。

生产域名绑定和 DNS 修改属于高风险操作，必须由用户明确批准后执行。不要把 Cloudflare API Token、账户 ID 或区域 ID 写入仓库。

参考：[Cloudflare Static Assets](https://developers.cloudflare.com/workers/static-assets/) 与 [Wrangler 配置](https://developers.cloudflare.com/workers/wrangler/configuration/)。
