# Plugin
## transformVdeep
🧿VitePlugin
```typescript
/**
 * @func transformVdeep
 * @return {Plugin}
 * @desc 将>>> 和 /deep/ 转换成 :deep()
 * @example
  // vite.config.ts
  // import { transformVdeep } from 'simon-js-tool'
  // plugins: [
  //   transformVdeep(),
  // ]
 */
```
## ExportPlugin
🧿VitePlugin
```typescript
/**
 * @func ExportPlugin
 * @return {Plugin}
 * @desc 将以参数结尾的文件直接导出
 * @example
  // glsl文件即可import glsl from 'xxx.glsl
  export default defineConfig({
    plugins: [
      exportPlugin('glsl'),
    ],
  })
 */
```
