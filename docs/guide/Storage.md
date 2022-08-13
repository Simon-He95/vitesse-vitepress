# LocalStorage
## dbStorage
🧿浏览器大数据存储
```typescript
/**
 * @func dbStorage
 * @returns {{ add, read, remove }} add:添加 read:读取 remove:删除
 * @desc  浏览器大数据存储
 * @example 
  const { add, read, remove } = await dbStorage()
  set('key', { video:Blob }) // 添加数据或更新数据 key: string | number, value: object
  read('key') // 读取数据 key: string | number, 返回 { video:Blob }
  remove('key') // 删除数据 key: string | number
 */
```
