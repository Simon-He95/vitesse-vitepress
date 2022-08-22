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
## exportPlugin
🧿VitePlugin
```typescript
/**
 * @func exportPlugin
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
## copyTemplate
🧿VitePlugin
```typescript
/**
 * @func copyTemplate
 * @return {Plugin}
 * @desc 将模板文件复制到打包后的目录下
 * @example
  // 默认拷贝到dist目录下
  export default defineConfig({
    plugins: [
      copyTemplate('./template.html'),
    ],
  })
 */
```

