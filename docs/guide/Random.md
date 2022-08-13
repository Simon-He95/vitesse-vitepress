# Random
## randomRgb
🧿随机生成RGB颜色
```typescript
/**
 * @func randomRgb
 * @desc 随机生成颜色
 * @return { string } 随机生成RGB颜色
 * @example console.log(randomRgb())// 'rgb(255,0,0)'
 */
```
## randomHexColor
🧿随机生成十六进制颜色
```typescript
/**
 * @func randomHexColor
 * @desc 随机生成十六进制颜色
 * @return { string } 
 * @example console.log(randomHexColor()) // '#ff0000'
 */
```
## randomDate
🧿随机生成日期
```typescript
/**
 * @func randomDate
 * @param { string } startDate 开始日期 1999/01/01 支持/或-
 * @param { string } endDate 结束日期
 * @desc 随机生成日期
 * @return { Date } 
 * @example // end默认是当前日期
console.log(randomDate('1999/01/01')) // Mon Jun 06 2011 15:11:37 GMT+0800 (中国标准时间) 可再通过formateDate转换为其他格式 如'yyyy-MM-dd'
 */
```
## uuid
🧿生成uuid
```typescript
/**
 * @func uuid
 * @desc 生成uuid
 * @param { number } len 长度 默认为8
 * @param { number|string } radix 进制 默认为16
 * @return { string } 随机数
 * @example
  console.log(uuid()) // '71A793A9-BBAE-49FC-B957-5BC71E5AD044'
  console.log(uuid(16, 'hex')) // 'a0b1c2d3e4f5' 
  console.log(uuid(8, 2)) // '11110011'
 */
```
