# Error

## interceptError
🧿异常拦截
```typescript
/**
 * @func interceptError
 * @param { function } fn 可能存在异常的函数
 * @return {Promise<string>} 
 * @desc 📝 异常拦截
 * @example // interceptError(fn: Function) => Promise<any>
interceptError(() => { throw new Error('error') }).catch(err=>{ console.log(err) })
 */
