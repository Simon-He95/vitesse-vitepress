# Transform
## htmlTransform
- 将template字符串通过ast操作后转回字符串
- 只支持对于html的简单操作,不支持对于js的操作
- 可用于小程序不同渠道的转换、一些特殊占位符的替换、模板的替换插入删除操作等等
```typescript
/**
 * @func htmlTransform
 * @desc 将template字符串通过ast操作后转回字符串
 * @param { string } templateStr template字符串
 * @param { object } 针对标签或属性名开头的函数traverse
 * @return { string } 
 * @example 
  const code = await htmlTransform('<div class="_ee">hello</div><view bindtap="xx"></view>', {
    div(node, { setAttribs,beforeInsert, afterInsert }) {
      node.name = 'p'
      setAttribs('age','19')
      beforeInsert('<span>hi</span>')
      afterInsert('<span>你好</span>')
    },
    '*'(node){
      // 所有的节点都会进入这里
    },
    "$attr$_ee"(node){
      // $attr$开头会匹配存在_ee属性的节点
    },
    "$attr$bindtap"(node,{ renameAttribs }){
      renameAttribs('bindtap','onTap')
    }
  })
  console.log(code) // <span>hi</span><p age="19" class="_ee">hello</p><span>你好</span><view onTap="xx"></view>
 */
```

## toBase64
将blob | file | url转换为base64
```typescript
/**
 * @func toBase64
 * @desc 将blob | file | url转换为base64
 * @param { any } file template字符串
 * @param { 'file' | 'blob' | 'url' = 'url' } 类型
 * @return { string } 
 * @example toBase64(file: File, type: 'file' | 'blob' | 'url' = 'url'): string
 */
```

## base64ToFile
将base64转换为file
```typescript
/**
 * @func base64ToFile
 * @desc 将base64转换为file
 * @param { base64 } string  base64字符串
 * @param { string } name 文件名
 * @return { File } 
 * @example base64ToFile(s: string, name: string): File
 */
```
## base64ToBlob
将base64转换为blob
```typescript
/**
 * @func base64ToBlob
 * @desc 将base64转换为blob
 * @param { base64 } string  base64字符串
 * @return { Blob } 
 * @example base64ToBlob(s: string): Blob
 */
```
