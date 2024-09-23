
## 对等依赖

确保项目依赖的 `rc-picker` 版本与 `antd` 依赖的 `rc-picker` 版本一致

```bash
pnpm add rc-picker@$(cat node_modules/antd/package.json | jq -r '.dependencies."rc-picker"') --save
```

> 上面的命令需要安装 `jq`，可以通过 `brew install jq` 安装/卸载
