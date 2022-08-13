# String
## escapeHtml
将html字符串转换为实体字符串
```typescript
/**
 * @func escapeHtml
 * @desc 将html字符串转换为实体字符串
 * @param { string } str 需要处理的字符
 * @return { string } 处理后的字符
 * @example console.log(excapeHtml("< a href=" ">xx</ a>")) // "&lt; a href=&quot; &quot;&gt;xx&lt;/ a&gt;"
 */
```
## unescapeHtml
将实体字符串转换为html字符串
```typescript
/**
 * @func unescapeHtml
 * @desc 将实体字符串转换为html字符串
 * @param { number } tel 需要处理的字符
 * @return { string } 处理后的字符
 * @example console.log(unescapeHtml('&lt; a href=&quot; &quot;&gt;xx&lt;/ a&gt;')) // "< a href=" ">xx</ a>"
 */
```

## camelize
驼峰化
```typescript
/**
 * @func camelize
 * @desc 驼峰化
 * @param { string } str 需要处理的字符
 * @return { string } 处理后的字符
 * @example console.log(camelize(hello-world)) // 'helloWorld'
 */
```
## hyphenate
连字符化
```typescript
/**
 * @func hyphenate
 * @desc 连字符化
 * @param { string } str 需要处理的字符
 * @return { string } 处理后的字符
 * @example console.log(hyphenate(helloWorld)) // 'hello-world'
 */
```
