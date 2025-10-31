# Lucky Pocket DApp 🎁

一个基于 Base 链的去中心化红包（Lucky Pocket）应用，支持创建、领取和管理红包功能。

## 功能特性

- 🎁 **创建红包** - 将代币分发给多个接收者
- 💰 **领取红包** - 通过红包 ID 领取
- 📊 **仪表板** - 查看统计数据和管理红包
- 🔗 **Base 链集成** - 在 Base 主网和测试网运行
- 🦊 **钱包连接** - 支持 Coinbase Wallet、WalletConnect 和 MetaMask
- 📱 **响应式设计** - 支持移动端、平板和桌面
- 🎨 **精美 UI** - 渐变设计和流畅动画

## 技术栈

- **Next.js 14** - React 框架（App Router）
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式系统
- **Wagmi** + **Viem** - Web3 集成
- **@tanstack/react-query** - 数据获取和缓存
- **Lucide React** - 图标库

## 开始使用

### 安装依赖

```bash
npm install
```

### 环境配置

复制环境变量示例文件：

```bash
cp .env.local.example .env.local
```

编辑 `.env.local` 并添加你的配置：

```bash
# WalletConnect Project ID - 从 https://cloud.reown.com 获取
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here

# 可选：自定义 RPC URL
NEXT_PUBLIC_BASE_RPC_URL=https://mainnet.base.org
NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
```

### 开发

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000)。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
lucky-pocket-dapp/
├── app/                      # Next.js App Router 页面
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 首页（创建红包）
│   ├── claim/               # 领取红包页面
│   │   └── page.tsx
│   └── dashboard/           # 仪表板页面
│       └── page.tsx
├── components/              # React 组件
│   ├── Header.tsx           # 页头导航
│   ├── CreatePocket.tsx     # 创建红包表单
│   ├── ClaimPocketForm.tsx  # 领取红包表单
│   ├── PocketStats.tsx      # 统计数据卡片
│   ├── PocketList.tsx       # 红包列表
│   ├── TokensBackground.tsx # 背景动画
│   ├── providers/           # Context 提供者
│   │   └── WagmiProvider.tsx
│   └── ui/                  # UI 组件
├── config/                  # 配置文件
│   └── wagmi.ts             # Wagmi 配置
└── lib/                     # 工具函数
    └── utils.ts             # 辅助函数
```

## 设计规范

基于 Figma 设计实现，包含：

### 颜色方案
- **背景**: `#fef8f3`（淡米色）
- **主色**: 紫色渐变 `rgba(194,122,255)` → `rgba(251,100,182)`
- **文本**: 
  - 主文本: `#2d3748`
  - 次要文本: `#718096`
- **边框**: `rgba(233,212,255,0.4)` 和 `rgba(252,206,232,0.4)`

### 设计元素
- 卡片使用玻璃态效果和圆角边框
- 渐变按钮和图标
- 浮动代币背景动画
- Base 链标识

## 支持的链

- **Base Mainnet** (Chain ID: 8453)
- **Base Sepolia** (Chain ID: 84532)

## 钱包支持

- Coinbase Wallet
- WalletConnect
- MetaMask
- 其他注入式钱包

## 智能合约

> **注意**: 当前版本包含完整的 UI 和 Web3 集成。智能合约交互功能需要部署合约后才能使用。

智能合约功能（待实现）：
- 创建红包
- 领取红包
- 查看红包详情
- 管理红包

## 开发计划

- [x] 创建红包 UI
- [x] 领取红包 UI
- [x] 仪表板 UI
- [x] Web3 钱包连接
- [x] Base 链集成
- [ ] 智能合约部署
- [ ] 合约交互逻辑
- [ ] 红包查询和过滤
- [ ] 多链支持

## 许可证

MIT

## 贡献

欢迎提交 Issue 和 Pull Request！

## 链接

- **文档**: [查看文档](#)
- **GitHub**: [查看源码](#)
- **支持**: [获取帮助](#)
