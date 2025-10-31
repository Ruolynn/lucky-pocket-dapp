# 如何上传到 GitHub

## 步骤 1: 在 GitHub 上创建新仓库

1. 登录你的 GitHub 账户
2. 点击右上角的 "+" 号，选择 "New repository"
3. 填写仓库信息：
   - Repository name: `lucky-pocket-dapp`（或你喜欢的名字）
   - Description: "Web3 Social Lucky Pocket on Base Chain"
   - 选择 Public 或 Private
   - **不要**初始化 README、.gitignore 或 license（我们已经创建了）
4. 点击 "Create repository"

## 步骤 2: 连接本地仓库到 GitHub

在终端中运行以下命令（将 `YOUR_USERNAME` 替换为你的 GitHub 用户名）：

```bash
cd /Users/ruolynnchen/lucky-pocket-dapp
git remote add origin https://github.com/YOUR_USERNAME/lucky-pocket-dapp.git
git branch -M main
git push -u origin main
```

## 步骤 3: 后续更新

当你对代码进行更改后，使用以下命令推送更新：

```bash
git add .
git commit -m "你的提交信息"
git push
```

## 注意事项

1. **WalletConnect Project ID**: 在使用 Web3 功能前，需要：
   - 访问 https://cloud.walletconnect.com 注册并创建项目
   - 获取 Project ID
   - 创建 `.env.local` 文件并添加：`NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=你的项目ID`

2. **安装依赖**: 首次运行时执行：
   ```bash
   npm install
   ```

3. **运行开发服务器**:
   ```bash
   npm run dev
   ```

4. **部署到 Vercel** (可选):
   - 在 GitHub 上推送代码后
   - 访问 https://vercel.com
   - 导入你的 GitHub 仓库
   - Vercel 会自动部署

