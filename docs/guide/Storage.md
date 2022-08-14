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
## jsSession
🧿操作sessionStorage
```typescript
/**
 * @func jsSession
 * @returns {{ get, set, delete,clear }} get:读取 set:添加 delete:删除 clear:清空
 * @desc  操作sessionStorage
 * @example 
  const { get, set, delete,clear } = jsSession()
  set('key', 'value') // 添加数据或更新数据 
  set({
    key1: 'value1',
    key2: 'value2'
  }) // 你也可以使用这样的形式一次性添加多个数据
  }) // 添加数据或更新数据 
  get('key') // 读取数据 
  remove('key') // 删除数据 
 */
```
## dbStorage
🧿操作localStorage
```typescript
/**
 * @func dbStorage
 * @returns {{ get, set, delete,clear }} get:读取 set:添加 delete:删除 clear:清空
 * @desc  操作localStorage
 * @example 
  const { get, set, delete,clear } = jsLocal()
  set('key', 'value') // 添加数据或更新数据 
  set({
    key1: 'value1',
    key2: 'value2'
  }) // 你也可以使用这样的形式一次性添加多个数据
  get('key') // 读取数据 
  remove('key') // 删除数据 
 */
```
