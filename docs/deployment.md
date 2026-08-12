# Cloudflare 部署

状态：**已部署至 Cloudflare，生产域名已绑定**

更新日期：2026-08-12

## 当前方式

项目使用 Astro 生成 `dist/`，再由 Cloudflare Workers Static Assets 托管。`wrangler.jsonc` 是部署配置的代码内事实来源；项目没有 Worker 入口文件，因此请求只会命中静态资产。

生产地址为 [`https://9field.org`](https://9field.org)。项目使用 Custom Domain 直接承载根域流量，Cloudflare 自动管理对应的 DNS 记录与 TLS 证书。

`workers.dev` 与 Preview URLs 已显式关闭，避免品牌站出现未管理的并行公网入口。`www.9field.org` 尚未启用，也没有设置重定向；是否启用需另行决定。

## 本地验证

```sh
npm ci
npm run build
npm run preview
```

构建必须通过类型检查，并在 `dist/` 生成首页、404、站点地图、安全响应头配置和静态资源。

## 部署与域名接入

1. 使用具有目标 Cloudflare 账户权限的环境登录 Wrangler。
2. 运行 `npm run deploy` 创建或更新名为 `9field-org` 的 Worker 静态资产项目。
3. 在合并部署配置前，通过 Wrangler dry-run 和受保护分支 CI 验证构建产物。
4. `wrangler.jsonc` 中的 Custom Domain 将 `9field.org` 绑定到该项目；`www` 是否启用及其重定向策略另行决定。
5. 验证 HTTPS、首页、404、移动导航、外链和响应头后再认定发布完成。

回滚生产绑定时，从 `wrangler.jsonc` 移除 `routes` 中的 `9field.org` Custom Domain 后重新部署。Cloudflare 文档提示，删除 Custom Domain 不会自动删除其 Advanced Certificate；回滚后还应在 SSL/TLS 证书清单中清理不再使用的证书。

生产域名绑定和 DNS 修改属于高风险操作，必须由用户明确批准后执行。不要把 Cloudflare API Token、账户 ID 或区域 ID 写入仓库。

参考：[Cloudflare Static Assets](https://developers.cloudflare.com/workers/static-assets/) 与 [Wrangler 配置](https://developers.cloudflare.com/workers/wrangler/configuration/)。
