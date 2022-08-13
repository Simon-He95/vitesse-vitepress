# Type

## isType
🧿判断任意类型
```typescript
/**
 * @func isType
 * @desc 判断任意类型
 * @param { any } o 需要判断的数据
 * @param { string } type 被判断的类型
 * @return { boolean } 是否是该类型
 * @example
  console.log(isType(1, 'Number')) // true
  console.log(isType('1', 'N')) // false
  console.log(isType({}, 'O | A')) // true (Object | Array)
  console.log(isType(new Promise(), 'P')) // true (Promise)
  console.log(isType(function(){}, 'P | F')) // true (Promise | Function)
 */
```
