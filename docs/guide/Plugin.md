# Plugin
## vitePluginTransformVdeep
🧿VitePlugin
```typescript
/**
 * @func vitePluginTransformVdeep
 * @return {Plugin}
 * @desc 将>>> 和 /deep/ 转换成 :deep()
 * @example
  // vite.config.ts
  // import { vitePluginTransformVdeep } from 'simon-js-tool'
  // plugins: [
  //   vitePluginTransformVdeep(),
  // ]
 */
```
## vitePluginExport
🧿VitePlugin
```typescript
/**
 * @func vitePluginExport
 * @return {Plugin}
 * @desc 将以参数结尾的文件直接导出
 * @example
  // glsl文件即可import glsl from 'xxx.glsl
  export default defineConfig({
    plugins: [
      vitePluginExport('glsl'),
    ],
  })
 */
```
## vitePluginCopyHtml
🧿VitePlugin
```typescript
/**
 * @func vitePluginCopyHtml
 * @return {Plugin}
 * @desc 将模板文件复制到打包后的目录下, 并自动导入css和js文件
 * @example
  // 默认拷贝到dist目录下
  export default defineConfig({
    plugins: [
      copyTemplate('./template.html'),
    ],
  })
 */
```

