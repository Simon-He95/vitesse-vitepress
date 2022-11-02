# Node
## getPkgTool
🧿获取当前项目的包管理工具
```typescript
/**
 * @func getPkgTool
 * @return {'yarn' | 'pnpm' | 'npm' | 'bun'}
 * @desc 获取当前项目的包管理工具
 * @example 
  getPkgTool() // 'pnpm'
 */
```
## jsShell
🧿js调用shell命令
```typescript
/**
 * @func jsShell
 * @param {string} cmd shell命令
 * @return {String}
 * @desc 基于node封装的js调用shell命令
 * @example 
  const data = jsShell('ls')
  const term1 = data?.split('\n').map(item => item).join(' ')
  jsShell(`gum choose  ${term1}`)
 */
```
## isExist
🧿判断文件是否存在
```typescript
/**
 * @func isExist
 * @return {Boolean} 存在返回true，不存在返回false
 * @desc 📝 🧿判断文件是否存在
 * @example 
  isExist('./README.md') // true
  isExist('./a.md') // false
 */
```
## transformArgv
🧿处理命令行参数
```typescript
/**
 * @func transformArgv
 * @desc 处理命令行参数
 * @return {Object}
 * @example 
  // build --minify --mode=production --type=es5
  const args = transformArgv() // {minify: true, mode: 'production', type: 'es5'}
 */
```
## getExportBundle
🧿返回npm打包文件
```typescript
/**
* @func getExportBundle
* @return {string}
* @desc 📝 🧿返回npm打包文件
* @example 
  console.log(getExportBundle('vitest')) // 读取node_modules/vitest/package.json的module字段如果没有才会读取main字段, 返回打包文件的内容
*/
```
## getResolvedPath
🧿获取绝对路径
```typescript
/**
 * @func getResolvedPath
 * @param {string} url 相对路径
 * @return {string}
 * @desc 📝 平滑滚动到底部
 * @example 
  const resolvedPath = getResolvedPath('/assets/kt.png') // /mnt/d/GitHub/assets/kt.png
 */
```
## getPkg
🧿获取package.json的Object 对象
```typescript
/**
 * @func getPkg
 * @param {string} url 路径
 * @return {Object}
 * @desc 📝 获取package.json的Object 对象
 * @example const pkg = await getPkg('package.json')
*/
```
## writeFile
🧿快速修改文件内容,支持多个文件同时修改
```typescript
/**
 * @func writeFile
 * @param {string | string[]} filePath 文件路径
 * @param {(content: string, index: number) => string} callback 传入文件string类型的内容,可以修改后返回新的内容
 * @param {BufferEncoding} encoding 默认utf-8
 * @return {void}
 * @desc 📝 快速修改文件内容,支持多个文件同时修改
 * @example 
  writeFile('./a.js', (content) => {
    return content.replace('a', 'b')
  })
 */
```
## insertUnocssInclude
🧿unocss作为props传入的组件打包会丢失注释// @unocss-include,这个函数会自动插入到打包后的文件头部
```typescript
/**
 * @func insertUnocssInclude
 * @param {string | string[]} filePath 文件路径 默认 ['./dist/index.js', './dist/index.mjs']
 * @return {void}
 * @desc 📝 unocss作为props传入的组件打包会丢失注释// @unocss-include,这个函数会自动插入到打包后的文件头部
 * @example insertUnocssInclude()
 */
```
