# LuckyPocket

Web3 Social Lucky Pocket on Base Chain

一个基于 Base 链的 Web3 社交红包应用，支持创建红包、领取奖励、邀请好友和排行榜功能。

## 功能特性

- 🎁 **创建红包** - 支持固定金额和随机抽奖模式，自定义红包数量和祝福消息
- 💰 **领取奖励** - 通过分享链接领取红包
- 👥 **邀请奖励** - 邀请好友注册并赚取奖励，建立你的红包社交网络
- 📊 **排行榜** - 多维度排行榜展示你的运气和慷慨度

## 技术栈

- **框架**: Next.js 14
- **样式**: Tailwind CSS
- **Web3**: RainbowKit + Wagmi + Viem
- **链**: Base Chain
- **语言**: TypeScript

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 运行开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 项目结构

```
lucky-pocket-dapp/
├── app/                 # Next.js App Router
├── components/          # React 组件
├── lib/                # 工具函数和配置
├── public/             # 静态资源
└── styles/             # 全局样式
```

## 部署

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/lucky-pocket-dapp)

### 其他平台

项目可以部署到任何支持 Next.js 的平台。

## License

MIT
