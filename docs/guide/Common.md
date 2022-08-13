# Common
## sort
🧿数组排序
```typescript
/**
 * @func sort
 * @desc  打印
 * @param { string } array 待排序的数组
 * @param { any } regular 排序规则,常规number[],1升序,-1降序,默认升序; 复杂类型需要自定义排序规则['name'],安装数组对象name属性升序等等...
 * @return { Array } 
 * @example 
  const numbers =  [1, 5, 7, 3, 2, 4, 6, 8, 9, 10]
  console.log(sort(numbers,1)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(sort(numbers,-1)) // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  const array = [{name: 'simon', age: 18}, {name: 'kitty', age: 20}]
  console.log(sort(array, 'name')) // [{name: 'kitty', age: 20}, {name: 'simon', age: 18}]
  console.log(sort(array, '-name')) // [{name: 'simon', age: 18}, {name: 'kitty', age: 20}]
  const array2 = [{name: 'simon', age: 18}, {name: 'kitty', age: 20},{name: 'simon', age: 19}]
  console.log(sort(array2, ['age','name'])) // [{name: 'kitty', age: 20}, {name: 'simon', age: 18}, {name: 'simon', age: 19}]
  console.log(sort(array2, ['-age','name'])) // [{name: 'simon', age: 19}, {name: 'simon', age: 18}, {name: 'kitty', age: 20}]
 */
```

## sortByOrder
🧿将数组按照另一个数组的顺序排序
```typescript
/**
 * @func sortByOrder
 * @param {any[]} array 数组
 * @param {string} prop  数组的对象中的属性名称
 * @param { string[] } order  排序的数组
 * @return {Array}
 * @desc 将数组按照另一个数组的顺序排序
 * @example 
  const order = ['name', '*', 'weight']
  const arr = [{
    props: {
      key: 'weight'
    }
  }, {
    props: {
      key: 'name'
    }
  }, {
    props: {
      key: 'width'
    }
  }, {
    props: {
      key: 'age'
    }
  }]
  const result = sortByOrder(arr, order, 'props.key')
  [
    {
      "props": {
        "key": "name",
      },
    },
    {
      "props": {
        "key": "width",
      },
    },
    {
      "props": {
        "key": "age",
      },
    },
    {
      "props": {
        "key": "weight",
      },
    },
  ]
 */
```

## getLru
🧿记录有限的数据,删除最久未访问的数据
```typescript
/**
 * @func getLru
 * @param {any[]} max 最大缓存数量
 * @return {Object}
 * @desc 记录有限的数据,删除最久未访问的数据
 * @example 
  const lru = getLru(2)
  lru.set('a', 1)
  lru.set('b', 2)
  console.log(lru.get('a')) // 1
  lru.set('b', 3)
  console.log(lru.size()) // 2
  console.log(lru.get('a')) // 1
  console.log(lru.get('b')) // undefined
 */
```
## log
🧿简化console.log的使用
```typescript
/**
 * @func log
 * @param {string} msg 消息
 * @param {string} color 颜色
 * @param {number} fontSize 字体大小
 * @return {void}
 * @desc 简化console.log的使用
 * @example log('hello world') // hello world
 */
```
## scrollToTop
🧿回到顶部
```typescript
/**
 * @func scrollToTop
 * @return {void}
 * @desc 回到顶部
 * @example 
  // 缓慢回到顶部 
  scrollToTop()
 */
```
## scrollToView
🧿滚动到指定元素
```typescript
/**
 * @func scrollToView
 * @param {HTMLElement | string} element: 可视目标元素
 * @return {void}
 * @desc 滚动到指定元素
 * @example scrollToView(el: HTMLElement | string)
 */
```
## getScrollPosition
🧿获取滚动位置
```typescript
/**
 * @func getScrollPosition
 * @return {{ x: number, y: number }}
 * @desc 获取滚动位置
 * @example console.log(getScrollPosition()) // { x: number, y: number }
 */
```
## isBottom
🧿判断滚动是否触底
```typescript
/**
 * @func isBottom
 * @return {Boolean} 
 * @desc 📝 判断滚动是否触底
 * @example
  // isBottom(distance: string = 0): boolean
  console.log(isBottom()) // false
 */
```
