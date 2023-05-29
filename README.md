# 无界类型定义

> fork by https://gitee.com/jh_shot/wujie-typings

```bash
npm i --save wujie-typings-extend
```

基于 Wujie 1.0.6 版本编写

- Vue组件
  - vue <= 2.6 引用 `v26.d.ts`
  - vue 2.7 引用 `v27.d.ts`
  - vue >= 3 引用 `v3.d.ts`
- JSX组件引用 `jsx.d.ts`
- 全局变量引用 `global.d.ts`

`tsconfig.json` 示例：

```json
{
  "compilerOptions": {
    "types": [
      "wujie-typings-extend/global",
      "wujie-typings-extend/jsx"
    ]
  }
}
```

### 自定义 `bus` 类型

在 `tsconfig.json` 中添加 `bus_overwrite`, 然后自己覆盖掉 `window.$wujie.bus`

```ts
import { EventBus } from 'wujie-typings-extend/bus_overwrite'

// 参考: https://github.com/developit/mitt
type RealBus = {
  'header:show'?: boolean
  'header:hide'?: boolean
}

declare global {
  interface Window {
    $wujie: WujieInstance<RealBus>
  }
}

export {}
```