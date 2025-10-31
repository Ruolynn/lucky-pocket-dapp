# Vercel 部署指南

## 🎉 项目已准备好部署！

项目构建成功，所有依赖已安装。现在可以通过以下方式部署到 Vercel：

## 方式 1：通过 Vercel 网站部署（推荐）

### 步骤：

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 使用 GitHub 账户登录

2. **导入项目**
   - 点击 "Add New..." → "Project"
   - 选择或搜索仓库：`Ruolynn/lucky-pocket-dapp`
   - 点击 "Import"

3. **配置项目**
   - Framework Preset: Next.js（自动检测）
   - Root Directory: `./`（默认）
   - Build Command: `npm run build`（默认）
   - Output Directory: `.next`（默认）
   - Install Command: `npm install`（默认）

4. **环境变量（可选）**
   如果需要 WalletConnect 功能，添加环境变量：
   - 点击 "Environment Variables"
   - 添加：`NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` = `你的项目ID`
   - 从 https://cloud.walletconnect.com 获取 Project ID

5. **部署**
   - 点击 "Deploy"
   - 等待构建完成（通常 2-3 分钟）

6. **完成**
   - 部署完成后，你会获得一个 `.vercel.app` 域名
   - 每次推送到 GitHub 的 `main` 分支都会自动触发部署

## 方式 2：使用 Vercel CLI

如果需要使用命令行：

```bash
# 安装 Vercel CLI（如果还没安装）
npm install -g vercel

# 或者在项目中使用 npx（不需要全局安装）
npx vercel

# 首次部署需要登录
# 然后按照提示操作即可
```

## 方式 3：使用 GitHub Actions（高级）

项目已包含 `vercel.json` 配置文件，可以直接通过 GitHub 集成自动部署。

## 测试结果

✅ **构建测试**: 通过
✅ **开发服务器**: 运行正常（http://localhost:3001）
✅ **所有依赖**: 已安装
✅ **代码**: 已推送到 GitHub

## 注意事项

1. **环境变量**: 如果需要完整的 Web3 功能，记得在 Vercel 中添加 `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
2. **自动部署**: 启用 GitHub 集成后，每次 `git push` 都会自动部署
3. **预览部署**: Vercel 会为每个 Pull Request 创建预览部署

## 访问部署后的网站

部署完成后，你可以通过以下方式访问：
- 生产环境: `https://lucky-pocket-dapp.vercel.app`（或你设置的自定义域名）
- 预览环境: Vercel 会为每次部署生成唯一 URL

---

**项目 GitHub 地址**: https://github.com/Ruolynn/lucky-pocket-dapp

