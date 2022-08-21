# Regex


## isChines
是否是中文
```typescript
/**
 * @func isChines
 * @desc 是否是中文
 * @param { string } str 需要判断的数据
 * @return { boolean } 是否是中文
 * @example if (isChines(str)) { doSomething }
 */
```
## isCard
是否为身份证号: 支持（1/2）代，15位或18位
```typescript
/**
 * @func isCard
 * @desc 是否为身份证号: 支持（1/2）代，15位或18位
 * @param { string } str 需要判断的数据
 * @param { number } type 1: 15位；2: 18位；默认0：同事匹配15位和18位
 * @return { boolean } 是否为身份证号
 * @example if (isCard(str)) { doSomething }
 */
```
## isPostCode
校验是否是大陆邮政编码
```typescript
/**
 * @func isPostCode
 * @desc 校验是否是大陆邮政编码
 * @param { number } value 需要判断的数据
 * @return { boolean } 是否是大陆邮政编码
 * @example if (isPostCode(str)) { doSomething }
 */
```
## isMobile 
🧿判断是否是手机号
```typescript
/**
 * @func isMobile 
 * @desc 判断是否是手机号
 * @param { string } str 需要判断的数据
 * @return { boolean } 判断是否是手机号
 * @example isMobile(str) // true or false
 */
```
## isEmail
🧿是否是邮箱
```typescript
/**
 * @func isEmail
 * @desc 是否是邮箱
 * @param { string } value 需要判断的数据
 * @return { boolean } 是否是邮箱
 * @example if (isEmail(str)) { doSomething }
 */
```
## isIdCard 
🧿判断是否是身份证
```typescript
/**
 * @func isIdCard 
 * @desc 判断是否是身份证
 * @param { string } str 需要判断的数据
 * @return { boolean } 判断是否是身份证
 * @example if (isIdCard(str)) { doSomething }
 */
```
## hasCn 
🧿判断是否含有中文
```typescript
/**
 * @func hasCn 
 * @desc 判断是否含有中文
 * @param { string } str 需要判断的数据
 * @return { boolean } 是否包含emoji表情
 * @example if (hasCn(str)) { doSomething }
 */
```
## isUrl
🧿校验是否是URL
```typescript
/**
 * @func isUrl
 * @desc 校验是否是URL
 * @param { string } str 需要判断的数据
 * @return { boolean } 校验是否是URL
 * @example if (isUrl(str)) { doSomething }
 */
```
## isFile 
🧿判断是否是File类型
```typescript
/**
 * @func isFile 
 * @desc 判断是否是File类型
 * @param {any} file 需要判断的数据
 * @returns {boolean} 校验是否是十六进制的颜色值
 * @example if (isFile(file)) { doSomething }
 */
```
## isNm
🧿判断是否是node_modules的链接
```typescript
/**
 * @func isNm 
 * @desc 判断是否是node_modules的链接
 * @param {string} str 链接
 * @returns {boolean} 校验是否是node_modules的链接
 * @example if (isNm(str)) { doSomething }
 */
```
## isRelative
🧿判断是否是相对路径
```typescript
/**
 * @func isRelative 
 * @desc 判断是否是相对路径
 * @param {string} str 链接
 * @returns {boolean} 校验是否是相对路径
 * @example if (isRelative(str)) { doSomething }
 */
```
## isBlob  
🧿判断是否是Blob类型
```typescript
/**
 * @func isBlob  
 * @desc 判断是否是Blob类型
 * @param {any} str 需要判断的数据
 * @returns {boolean} 校验是否是十六进制的颜色值
 * @example if (isBlob(file)) { doSomething }
 */
```

## isAbsolute   
🧿判断是否是绝对路径
```typescript
/**
 * @func isAbsolute   
 * @desc 判断是否是绝对路径
 * @param {any} str 需要判断的数据
 * @returns {boolean} 校验是否是十六进制的颜色值
 * @example if (isAbsolute(file)) { doSomething }
 */
```

## isElement    
🧿判断是否是HTMLElement
```typescript
/**
 * @func isElement    
 * @desc 判断是否是HTMLElement
 * @param {any} str 需要判断的数据
 * @returns {boolean} 校验是否是十六进制的颜色值
 * @example if (isElement(file)) { doSomething }
 */
```

## pwdLevel
判断密码的强度
```typescript
/**
 * @func pwdLevel
 * @desc 计算两坐标点之间的距离
 * @param { string } num 待判断的数字
 * @param { number } min 最小长度
 * @return { number } 距离
 * @example 
  const levels = ['', '低', '中', '高', '极高']
  console.log(levels[pwdLevel('123456')]) // 低
  console.log(levels[pwdLevel('123456', 7)]) // ''
  console.log(levels[pwdLevel('q123456')]) // 高
 */
```
## isIPv4
判断是否是IPv4
```typescript
/**
 * @func isIPv4
 * @desc 判断是否是IPv4
 * @param { string } ip 需要判断的数据
 * @return { Boolean } 
 * @example isIPv4(ip) // true or false
 */
```

## isIPv6
判断是否是IPv6
```typescript
/**
 * @func isIPv6
 * @desc 判断是否是isIPv6
 * @param { string } ip 需要判断的数据
 * @return { Boolean } 
 * @example isIPv6(ip) // true or false
 */
```
## isSupportCamera
判断是否支持摄像头
```typescript
/**
 * @func isSupportCamera
 * @desc 判断是否支持摄像头
 * @return { Boolean } 
 * @example isSupportCamera() // true or false
 */
```
