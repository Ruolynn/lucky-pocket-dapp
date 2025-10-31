# GitHub SSH 密钥配置指南

## 你的 SSH 公钥

请复制以下公钥内容：

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIExOk+anyob+cTGHZU5EQdf3NboqlO28q5tJwNDcZybx github@ruolynn
```

## 添加到 GitHub 的步骤

1. **复制上面的公钥内容**

2. **访问 GitHub SSH 设置页面**：
   - 打开 https://github.com/settings/keys
   - 或者：GitHub 首页 → 右上角头像 → Settings → SSH and GPG keys

3. **添加新密钥**：
   - 点击 "New SSH key" 按钮
   - Title: 填写一个描述（如 "MacBook"）
   - Key: 粘贴上面复制的公钥内容
   - 点击 "Add SSH key"

4. **验证并推送代码**：
   配置完成后，运行以下命令推送代码：
   ```bash
   cd /Users/ruolynnchen/lucky-pocket-dapp
   git push -u origin main
   ```

## 或者使用 Personal Access Token（更简单）

如果你不想配置 SSH，也可以使用 Personal Access Token：

1. **创建 Token**：
   - 访问 https://github.com/settings/tokens
   - 点击 "Generate new token (classic)"
   - 勾选 `repo` 权限
   - 生成并复制 token

2. **推送代码**：
   ```bash
   cd /Users/ruolynnchen/lucky-pocket-dapp
   git remote set-url origin https://Ruolynn:YOUR_TOKEN@github.com/Ruolynn/lucky-pocket-dapp.git
   git push -u origin main
   ```
   将 `YOUR_TOKEN` 替换为你刚才生成的 token

