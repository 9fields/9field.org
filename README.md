# 9field.org

九野通衢（简称“九野”）的品牌、产品与技术门户。公司正式主站与权威企业信息位于 [`9fields.cn`](https://9fields.cn/)；公司对“九野通衢”与“JiuyeTongqu”享有商标及相关著作权（版权）权益。

## 本地开发

要求 Node.js 20.11 或更高版本。

```sh
npm ci
npm run dev
```

常用命令：

- `npm run check`：运行 Astro 与 TypeScript 检查。
- `npm run build`：检查并生成 `dist/` 静态站点。
- `npm run preview`：本地预览生产构建。
- `npm run deploy`：构建并通过 Wrangler 部署到 Cloudflare。

架构与部署细节见 [`docs/frontend.md`](docs/frontend.md) 和 [`docs/deployment.md`](docs/deployment.md)。
